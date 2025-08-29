# Preet Kotmire — Portfolio

This repository contains the source code for my personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui components.

## Overview

- Tech: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, lucide-react
- Features: Projects, Experience, Education, Skills & Tools, Contact form (Nodemailer), server actions for simple counters
- Deploy: Designed to be deployed on Vercel or any Node-compatible host

## Quick start

1. Install dependencies

```bash
pnpm install
# or
npm install
```

2. Copy environment variables

```bash
cp .env.example .env.local
```

3. Fill in required env vars (see `.env.example`)

4. Run the dev server

```bash
pnpm dev
# or
npm run dev
```

5. Open http://localhost:3000

## Environment variables

This project uses the following environment variables (see `.env.example` in the repo):

- NODEMAILER_HOST, NODEMAILER_PORT, NODEMAILER_USER, NODEMAILER_PASS — SMTP details for the contact form
- USER_MAILER, USER_TO — From and recipient emails for contact form
- MONGODB_URI — MongoDB connection string for simple counters (optional)

Note: `.env*` files are ignored by default. Keep secrets out of source control.

## Deployment

- Deploy to Vercel: Connect your repo and set environment variables in the Vercel dashboard.
- For other hosts, ensure Node 18+ and the environment variables are set.

## Contributing

Pull requests welcome. For substantial changes, please open an issue first to discuss.

## License

This project is personal. Use the code as a reference; please ask before reusing unique assets or designs.
