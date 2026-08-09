import { NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getSession } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const resolvedParams = await params;
    const id = resolvedParams.id;

    const application = await db.application.findUnique({
      where: { id },
      select: {
        firstName: true,
        lastName: true,
        resumeUrl: true,
      },
    });

    if (!application || !application.resumeUrl) {
      return new NextResponse('Not found', { status: 404 });
    }

    // Check if it's a legacy local path from previous development
    if (application.resumeUrl.startsWith('/uploads/')) {
      return NextResponse.redirect(new URL(application.resumeUrl, request.url));
    }

    // Otherwise, assume it's base64 encoded data stored in the DB (for Vercel serverless)
    const buffer = Buffer.from(application.resumeUrl, 'base64');

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="resume-${application.firstName}-${application.lastName}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Failed to serve resume:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
