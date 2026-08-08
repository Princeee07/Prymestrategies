import { NextResponse } from 'next/server';
import { db } from '@/server/db';
import { getSession } from '@/lib/auth';

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { status } = await req.json();
    const { id } = await params;

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      );
    }

    const allowedStatuses = [
      'pending',
      'reviewed',
      'interview',
      'rejected',
      'hired',
    ];
    if (!allowedStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const application = await db.application.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error('Update application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
