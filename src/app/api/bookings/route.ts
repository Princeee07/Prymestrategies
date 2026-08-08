import { NextRequest, NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/validations';
import { db as prisma } from '@/server/db';

// POST create a new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        ...result.data,
        status: 'pending',
      },
    });

    return NextResponse.json({ data: booking }, { status: 201 });
  } catch (error) {
    console.error('Failed to create booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
