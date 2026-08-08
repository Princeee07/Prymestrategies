import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
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

    // Convert file to buffer, then base64, upload as raw
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(
      `data:application/pdf;base64,${buffer.toString('base64')}`,
      { folder: 'pryme-resumes', resource_type: 'raw' }
    );

    // Save to database
    // Assuming a generic application table. If not, this can be customized.
    await db.application.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        resumeUrl: uploadResult.secure_url,
      },
    });

    return NextResponse.json({ success: true, url: uploadResult.secure_url });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting the application' },
      { status: 500 }
    );
  }
}
