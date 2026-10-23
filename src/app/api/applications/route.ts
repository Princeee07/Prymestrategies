import { NextResponse } from 'next/server';
import { db } from '@/server/db';
import cloudinary from '@/lib/cloudinary';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB strictly enforced limit

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

    // 1. Strict File Size Validation (Mitigate Large Memory-Bomb DoS)
    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 413 }
      );
    }

    // 2. Process Upload Stream
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let secureResumeUrl: string;

    // Stream directly to Cloudinary if configured
    if (
      process.env.CLOUDINARY_API_SECRET &&
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    ) {
      const uploadResult = await new Promise<{ secure_url: string }>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: 'resumes',
              resource_type: 'raw',
              format: 'pdf',
            },
            (error, result) => {
              if (error || !result) {
                reject(error || new Error('Upload failed'));
              } else {
                resolve(result as { secure_url: string });
              }
            }
          );
          uploadStream.end(buffer);
        }
      );
      secureResumeUrl = uploadResult.secure_url;
    } else {
      // Local development fallback: Store mock URL if credentials not provided
      secureResumeUrl = `https://res.cloudinary.com/local-dev/raw/upload/resumes/${Date.now()}-${resume.name}`;
    }

    // 3. Save metadata to database (stores only the URL, keeping DB lightweight)
    await db.application.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        resumeUrl: secureResumeUrl,
      },
    });

    return NextResponse.json({ success: true, resumeUrl: secureResumeUrl });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting the application' },
      { status: 500 }
    );
  }
}
