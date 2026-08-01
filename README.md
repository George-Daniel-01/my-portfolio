# George Daniel | Creative Software Engineer Portfolio

A modern, responsive single-page portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + Custom SVGs

## Features

- Dark theme with animated gradient text
- Fully responsive design
- Project showcase with live links
- Skills & work experience timeline
- Contact section with email, phone, and location
- Live digital clock in footer
- Downloadable CV/Resume PDF
- Social media integration (GitHub, LinkedIn, X/Twitter, Instagram, Facebook)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Live Site

Deployed on Vercel — [https://george-daniel.vercel.app](https://george-daniel.vercel.app)

```bash
vercel --prod   # deploy from this directory
```

## Authentication (Google Sign-In with Clerk)

The site uses Clerk for Google sign-in. Before running locally, create a free project at https://clerk.com, enable **Google** under *User & Authentication -> Social Connections*, then paste the two keys into `.env.local`: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`. The app will not boot until these are set.

**Deploy note:** after deploying, add your production domain (e.g. `https://george-daniel.vercel.app`) to the Clerk dashboard under *User & Authentication -> Security* allowed origins / authorized redirect URIs, or Google sign-in will fail on the live site.
