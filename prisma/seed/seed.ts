import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Setup database connection for seeding
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('DATABASE_URL is not set in your environment.');
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding started...');

  // Example seed logic:
  // await prisma.bookings.create({
  //   data: {
  //     name: 'John Doe',
  //     email: 'john@example.com',
  //     phone: '1234567890',
  //     date: '2026-09-01',
  //     time: '10:00 AM',
  //     service: 'Consultation',
  //   }
  // });

  console.log('Seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
