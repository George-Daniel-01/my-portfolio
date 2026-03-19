import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});
 
export const metadata: Metadata = {
  title: 'George Daniel | Creative Software Engineer',
  description: 'Creative Software Engineer with 6+ years of experience, specializing in full-stack web development, backend architecture, and scalable digital products. Building high-performance experiences with React, Node.js, and PostgreSQL.',
  keywords: ['George Daniel', 'Software Engineer', 'Full Stack Developer', 'Web Development', 'Backend Developer', 'Node.js', 'PostgreSQL', 'React Developer'],
  authors: [{ name: 'George Daniel' }],
  creator: 'George Daniel',
  publisher: 'George Daniel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://georgedaniel.me', // Updated to reflect your name
    siteName: 'George Daniel Portfolio',
    title: 'George Daniel | Creative Software Engineer',
    description: 'Creative Software Engineer building scalable products with great user experiences.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'George Daniel - Creative Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Daniel | Creative Software Engineer',
    description: 'Creative Software Engineer building scalable products with great user experiences.',
    creator: '@Georgedamiel_', // Updated to your new X handle
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: '#6f1cd7',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'George Daniel',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}