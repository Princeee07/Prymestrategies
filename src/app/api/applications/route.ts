import { NextResponse } from 'next/server';
import { db } from '@/server/db';
import fs from 'fs';
import path from 'path';
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

    // Convert file to buffer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save locally
    const fileName = `${Date.now()}-${resume.name.replace(/\s+/g, '-')}`;
    const filePath = path.join(
      process.cwd(),
      'public',
      'uploads',
      'resumes',
      fileName
    );

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, buffer);
    const resumeUrl = `/uploads/resumes/${fileName}`;

    // Save to database
    await db.application.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        resumeUrl,
      },
    });

    return NextResponse.json({ success: true, url: resumeUrl });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting the application' },
      { status: 500 }
    );
  }
}
