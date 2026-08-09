import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { hashSync } from 'bcryptjs';

// ── Database connection ──────────────────────────────────────
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error(' DATABASE_URL is not set in your environment.');
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// ── Seed data ────────────────────────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@prymestrategies.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123456';

async function main() {
  console.log('Seeding started...\n');

  // ── 1. Seed Admin User ──────────────────────────────────────
  const hashedPassword = hashSync(ADMIN_PASSWORD, 12);

  const admin = await prisma.adminUser.upsert({
    where: { email: ADMIN_EMAIL },
    update: { password: hashedPassword },
    create: {
      email: ADMIN_EMAIL,
      password: hashedPassword,
    },
  });

  console.log(`Admin user seeded: ${admin.email}`);

  // ── 2. Seed sample applications (dev only) ──────────────────
  if (process.env.NODE_ENV !== 'production') {
    const sampleApplications = [
      {
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 (555) 123-4567',
        email: 'john.doe@example.com',
        resumeUrl: 'https://res.cloudinary.com/demo/raw/upload/sample.pdf',
        status: 'pending',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        phone: '+1 (555) 987-6543',
        email: 'jane.smith@example.com',
        resumeUrl: 'https://res.cloudinary.com/demo/raw/upload/sample.pdf',
        status: 'reviewed',
      },
      {
        firstName: 'Mike',
        lastName: 'Johnson',
        phone: '+1 (555) 456-7890',
        email: 'mike.j@example.com',
        resumeUrl: 'https://res.cloudinary.com/demo/raw/upload/sample.pdf',
        status: 'interview',
      },
    ];

    for (const app of sampleApplications) {
      await prisma.application.create({ data: app });
    }

    console.log(`✅ ${sampleApplications.length} sample applications seeded.`);
  }

  console.log('\n🎉 Seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
