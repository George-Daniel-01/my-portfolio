export const projects = [
  {
    name: "ShopMate E-Commerce",
    company: "Fullstack E-Commerce",
    location: "Production App",
    period: "2025 - 2026",
    desc: "AI-powered e-commerce platform with customer storefront, Stripe payments, and OpenRouter AI product search",
    lang: "React.js + TypeScript + Vite + TailwindCSS + PostgreSQL",
    tech: "React.js + TypeScript + Vite + TailwindCSS + Stripe",
    link: "https://shop-mate-six-azure.vercel.app/",
    github: "https://github.com/George-Daniel-01/ShopMate/tree/main/frontend",
    details: [
      "Architected a full-stack e-commerce platform serving real users with secure payment processing via Stripe API.",
      "Integrated OpenRouter AI for natural language product search, enabling intelligent shopping queries.",
      "Designed relational database schema in PostgreSQL with optimized queries reducing page load times.",
      "Implemented JWT authentication with secure cookie-based sessions and role-based access control."
    ]
  },
  {
    name: "ShopMate Admin Dashboard",
    company: "Fullstack E-Commerce",
    location: "Production App",
    period: "2025 - 2026",
    desc: "Admin panel with real-time analytics, role-based auth, and comprehensive inventory management",
    lang: "React.js + TypeScript + Vite + TailwindCSS + Recharts",
    tech: "React.js + TypeScript + Vite + TailwindCSS + Redux Toolkit",
    link: "https://shop-dashboard-tan.vercel.app/",
    github: "https://github.com/George-Daniel-01/ShopMate/tree/main/ecommerce-dashboard-template",
    details: [
      "Built a full-featured admin dashboard for managing products, orders, and customers with real-time analytics via Recharts.",
      "Implemented role-based authentication ensuring only authorized admins can access sensitive operations.",
      "Integrated Cloudinary for efficient product image uploads and CDN-based media management.",
      "Developed RESTful API endpoints with OpenRouter AI search handling thousands of requests with proper error handling and validation."
    ]
  },
  {
    name: "ShopMate Backend API",
    company: "Fullstack E-Commerce",
    location: "Production API",
    period: "2025 - 2026",
    desc: "RESTful API with PostgreSQL, JWT auth, Stripe payments, OpenRouter AI search, and Cloudinary media",
    lang: "Node.js + Express + TypeScript + PostgreSQL",
    tech: "Node.js + Express + TypeScript + PostgreSQL",
    link: "https://github.com/George-Daniel-01/ShopMate",
    github: "https://github.com/George-Daniel-01/ShopMate",
    details: [
      "Architected a production RESTful API with Express handling thousands of concurrent requests and secure payment processing via Stripe.",
      "Integrated OpenRouter AI for natural language product search, enabling AI-powered shopping experiences.",
      "Designed relational PostgreSQL schema with optimized queries, indexes, and migrations for data integrity.",
      "Implemented JWT authentication with secure HTTP-only cookie sessions and role-based access control.",
      "Built file upload pipeline with Cloudinary CDN for efficient product image management and delivery."
    ]
  },
  {
    name: "My Portfolio",
    company: "Personal Project",
    location: "Open Source",
    period: "2025",
    desc: "This site — built with Next.js 16, Tailwind CSS v4, and Framer Motion. Fully responsive, SEO-optimized, dark-themed.",
    lang: "Next.js + TailwindCSS + TypeScript",
    tech: "Next.js + TailwindCSS + Framer Motion",
    link: "https://github.com/George-Daniel-01/my-portfolio",
    github: "https://github.com/George-Daniel-01/my-portfolio",
    details: [
      "Built with Next.js 16 App Router and Tailwind CSS v4 for optimal Core Web Vitals — 95+ Lighthouse performance score.",
      "Implemented SEO best practices: structured Open Graph tags, JSON-LD metadata, sitemap, and semantic HTML.",
      "Engineered dark-themed responsive design with Framer Motion scroll-triggered animations and glassmorphism UI.",
      "Integrated FormSubmit contact endpoint with toast notifications and a downloadable CV PDF pipeline."
    ]
  },
  {
    name: "Spotify Taste Profile",
    company: "Fullstack Debugging & Fixes",
    location: "Production App",
    period: "2026",
    desc: "Spotify data visualization app with audio DNA radar charts, genre analysis, and listening personality insights",
    featured: true,
    lang: "React.js + Chart.js + Styled-Components + Playwright",
    tech: "React.js + Chart.js + Styled-Components + Playwright",
    link: "https://spotify-profile-full.vercel.app/taste",
    github: "https://github.com/George-Daniel-01/spotify-profile",
    details: [
      "Diagnosed and resolved a cascade of production bugs caused by Spotify API deprecations — audio-features API now returns 403 for unverified apps.",
      "Built a genre-to-audio-features estimation engine as a drop-in replacement, restoring all chart rendering without changing the API contract.",
      "Discovered that Spotify's /me/top/artists endpoint omits genres, followers, and popularity fields — debugged via CDP-based browser automation (TMWebDriver) directly on the live production site.",
      "Fixed error boundary crashes exposed after the first fix revealed a hidden second bug (WrappedStats rendering on undefined followers.total).",
      "Achieved 13/13 Playwright integration tests passing with full canvas rendering, stat grid, personality card, and listening habits charts."
    ]
  },
  {
    name: "Pxxl Book",
    company: "SaaS Scheduling Platform",
    location: "Production App",
    period: "2026",
    desc: "Full-featured scheduling platform with Stripe payments, Google Calendar sync, Zoom integrations, and i18n support",
    lang: "Next.js + React + TypeScript + PostgreSQL",
    tech: "Next.js + React + TypeScript + PostgreSQL",
    link: "https://pxxl-book.vercel.app/",
    details: [
      "Built and deployed a complete open-source scheduling platform with Stripe payment processing and webhook handling.",
      "Integrated Google Calendar API with OAuth 2.0 for real-time calendar sync and availability management.",
      "Configured Zoom, Google Meet, and video conferencing integrations with automated meeting link generation.",
      "Implemented internationalization (i18n) with 50+ locale support, email verification, and password reset flows."
    ]
  },
  {
    name: "Daniel Board",
    company: "Collaborative Whiteboard",
    location: "Production App",
    period: "2026",
    desc: "Real-time collaborative whiteboard with hand-drawn style, PWA support, end-to-end encryption, and offline capabilities",
    lang: "React + TypeScript + Vite + PWA",
    tech: "React + TypeScript + Vite + Workbox",
    link: "https://daniel-board.vercel.app/",
    github: "https://github.com/George-Daniel-01/daniel-board",
    details: [
      "Built and deployed a full-featured collaborative whiteboard application with real-time editing and end-to-end encryption.",
      "Implemented PWA support with offline capabilities, service worker caching, and automatic updates via Workbox.",
      "Customized the UI with a distinctive brand identity including custom theme, logo, and polished welcome screen.",
      "Integrated real-time collaboration, export to PNG/SVG, shape libraries, and a wide range of drawing tools."
    ]
  }
];

export const experience = [
  {
    role: "Founder & Fullstack Developer",
    company: "Pxxl Space",
    period: "2023 - Present",
    location: "PH, Nigeria",
    details: [
      "Built and deployed Pxxl Book — a full-stack SaaS scheduling platform handling Stripe payments, Google Calendar OAuth 2.0 sync, Zoom/Meet integrations, and 50+ locale i18n.",
      "Designed PostgreSQL schema with optimized indexes serving 1,000+ booking transactions with sub-100ms query times.",
      "Engineered end-to-end booking flow: availability detection, stripe checkout, webhook verification, calendar creation, and confirmation email.",
      "Managed full development lifecycle across 3 client projects simultaneously — from schema design to production deployment on Vercel."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Steadfast International",
    period: "2025 - Present",
    location: "Lagos, Nigeria",
    details: [
      "Leading PWA e-commerce platform engineering — offline support via service worker caching, affiliate dashboard with real-time analytics.",
      "Optimized mobile-first React UI achieving <2s initial meaningful paint via lazy loading, code splitting, and image optimization.",
      "Built real-time inventory management dashboard reducing stock discrepancy resolution from hours to under 5 minutes.",
      "Implemented role-based dashboards for 3 user tiers (admin, affiliate, customer) with granular access control."
    ]
  },
  {
    role: "Fullstack Developer",
    company: "Indulgetix",
    period: "2024 - Present",
    location: "Lagos, Nigeria",
    details: [
      "Architected RESTful backend handling 10,000+ concurrent ticket bookings with <200ms API response times under load.",
      "Built payment pipeline integrating Paystack — processed 5,000+ transactions with automatic reconciliation and refund handling.",
      "Designed PostgreSQL database with 15+ relational tables supporting event scheduling, ticket inventory, and attendee management.",
      "Developed real-time admin dashboards showing live ticket sales, event capacity, and revenue analytics for event organizers."
    ]
  }
];

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61578554221207",
  twitter: "https://x.com/Georgedamiel_",
  instagram: "https://www.instagram.com/georgeabiamakadaniel2/",
  linkedin: "https://www.linkedin.com/in/george-daniel/",
  github: "https://github.com/George-Daniel-01",
};

export const contactInfo = {
  email: "georgeabiamakadaniel@gmail.com",
  phone: "+2347060512564",
  location: "Lagos, Nigeria",
};

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "TailwindCSS", "JavaScript", "TypeScript", "ReactJs", "NextJs", "Redux", "Framer Motion", "Chart.js", "Styled-Components", "Recharts"]
  },
  {
    name: "Backend & Database",
    skills: ["NodeJs/Express", "Python", "PostgreSQL", "SQL", "MongoDB", "Prisma", "REST APIs", "OAuth 2.0"]
  },
  {
    name: "Payments & Integrations",
    skills: ["Stripe API", "Google APIs", "Paystack", "Nodemailer", "Axios"]
  },
  {
    name: "DevOps & Design",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Postman", "Figma", "Playwright", "Cloudinary"]
  }
];