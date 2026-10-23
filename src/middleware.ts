import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

// -----------------------------------------------------------------------------
// In-Memory Sliding Window Rate Limiter
// (Works out-of-the-box in Node/Edge instances; integrates with Redis in multi-pod)
// -----------------------------------------------------------------------------
interface RateLimitBucket {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitBucket>();

// Periodic cleanup to avoid memory leak from stale IPs
const CLEANUP_INTERVAL_MS = 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleBuckets() {
  const now = Date.now();
  if (now - lastCleanup > CLEANUP_INTERVAL_MS) {
    for (const [key, bucket] of rateLimitStore.entries()) {
      if (now > bucket.resetAt) {
        rateLimitStore.delete(key);
      }
    }
    lastCleanup = now;
  }
}

function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; retryAfter: number } {
  cleanupStaleBuckets();
  const now = Date.now();
  const bucket = rateLimitStore.get(key);

  if (!bucket || now > bucket.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (bucket.count >= maxRequests) {
    const retryAfter = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
    return { allowed: false, retryAfter };
  }

  bucket.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Resolve client IP (handles reverse proxies & load balancers)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientIp = forwardedFor
    ? forwardedFor.split(',')[0].trim()
    : '127.0.0.1';

  // ---------------------------------------------------------------------------
  // 1. Rate Limiting: Sensitive Auth (/api/auth/login) -> Max 5 req/min
  // ---------------------------------------------------------------------------
  if (pathname === '/api/auth/login' && request.method === 'POST') {
    const rateCheck = checkRateLimit(`auth:${clientIp}`, 5, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: 'Too Many Requests',
          message: 'Too many login attempts. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateCheck.retryAfter),
          },
        }
      );
    }
  }

  // ---------------------------------------------------------------------------
  // 2. Rate Limiting: Form Submissions (/api/bookings & /api/applications) -> Max 10 req/min
  // ---------------------------------------------------------------------------
  if (
    (pathname === '/api/bookings' || pathname === '/api/applications') &&
    request.method === 'POST'
  ) {
    const rateCheck = checkRateLimit(`form:${clientIp}`, 10, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: 'Too Many Requests',
          message:
            'Submission rate limit exceeded. Please wait before submitting again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateCheck.retryAfter),
          },
        }
      );
    }
  }

  // ---------------------------------------------------------------------------
  // 3. Early Auth Gatekeeper: Admin Pages (/admin/*)
  // Blocks unauthenticated users before executing page rendering
  // ---------------------------------------------------------------------------
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const session = await verifyToken(token);
    if (!session) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ---------------------------------------------------------------------------
  // 4. Early Auth Gatekeeper: Admin APIs (/api/admin/*)
  // Rejects invalid requests before hitting database connections
  // ---------------------------------------------------------------------------
  if (pathname.startsWith('/api/admin/')) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Authentication required' },
        { status: 401 }
      );
    }

    const session = await verifyToken(token);
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Invalid or expired session' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
    '/api/auth/login',
    '/api/bookings',
    '/api/applications',
  ],
};
