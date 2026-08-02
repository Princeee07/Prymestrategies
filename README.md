# PrymeStrategies Marketing Site & Admin Portal

A modern, high-performance marketing website and admin dashboard built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, and Supabase.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & GSAP
- **Database & Auth**: Supabase (PostgreSQL)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Tooling**: pnpm, ESLint, Prettier, Husky, lint-staged

---

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### 1. Prerequisites

- **Node.js**: v20 or later
- **pnpm**: v9 or later (`npm install -g pnpm`)

### 2. Clone and Install

```bash
git clone https://gitlab.com/prymestrategies/prymestrategies.git
cd prymestrategies
pnpm install
```

### 3. Environment Variables

Copy the example environment file and fill in your details:

```bash
cp .env.local.example .env.local
```

**Required Variables:**

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Project Anon Key.
- `NEXT_PUBLIC_CLOUDINARY_*`: (Optional for now) For image uploads.

_Note: You can find your Supabase credentials in your Supabase Dashboard under Project Settings > API._

### 4. Database Setup

The database requires a `bookings` table with Row Level Security (RLS) policies.
If you are initializing a fresh Supabase project, you can run the provided node script to automatically create the schema:

```bash
node setup-db.js
```

_(Make sure to update the connection string inside the script if using a different database)._

### 5. Run the Development Server

Start the Next.js development server:

```bash
pnpm dev
```

- **Marketing Site:** `http://localhost:3000`
- **Admin Portal:** `http://localhost:3000/admin/login`

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── (marketing)/    # Public facing marketing pages
│   ├── (admin)/        # Protected admin portal and dashboard
│   ├── api/            # Next.js Route Handlers (API endpoints)
├── components/
│   ├── ui/             # Reusable base components (Button, Input, Modal, etc.)
│   ├── layout/         # Navbar, Footer, Sidebar
│   ├── sections/       # Landing page sections (Hero, Features, etc.)
│   ├── admin/          # Admin-specific components
│   └── booking/        # Booking-specific components
├── lib/                # Supabase clients, utils, validations, and constants
├── hooks/              # Custom React hooks (useBookings, useMediaQuery)
├── types/              # TypeScript definitions for DB and App
└── config/             # Site metadata and Animation variants
```

## 🔐 Git Hooks (Husky)

This project uses **Husky** and **lint-staged** to ensure code quality. Before every commit, it will automatically:

1. Format staged files using Prettier.
2. Run ESLint checks across the project.
3. Run a Next.js production build check.

If you need to bypass hooks temporarily (not recommended), use `git commit --no-verify`.

---

## 📝 License

Proprietary / All Rights Reserved.
