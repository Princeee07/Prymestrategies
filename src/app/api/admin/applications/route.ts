import { NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const applications = await db.application.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });

    return NextResponse.json({ applications });
  } catch (error) {
    console.error('Fetch applications error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
