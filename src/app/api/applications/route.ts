import { NextResponse } from 'next/server';
import { db } from '@/server/db';
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const resume = formData.get('resume') as File | null;

    if (!firstName || !lastName || !phone || !email || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (resume.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Resume = buffer.toString('base64');

    // Save to database
    await db.application.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        resumeUrl: base64Resume, // Store base64 in resumeUrl field
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting the application' },
      { status: 500 }
    );
  }
}
