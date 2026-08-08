import { defineConfig } from '@prisma/config';
import dotenv from 'dotenv';

// Load .env.local since Prisma CLI runs outside Next.js
dotenv.config({ path: '.env.local' });

export default defineConfig({
  datasource: {
    url: process.env.DIRECT_URL,
  },
  migrations: {
    seed: 'npx tsx prisma/seed/seed.ts',
  },
});
