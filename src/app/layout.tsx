import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://georgedaniel.dev"), // 
  title: 'George Daniel | Creative Software Engineer',
  description: 'Creative Software Engineer specializing in web, app, and cloud development.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://georgedaniel.dev',
    siteName: 'George Daniel Portfolio',
    title: 'George Daniel | Creative Software Engineer',
    description: 'Creative Software Engineer specializing in web, app, and cloud development.',
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
    description: 'Creative Software Engineer building scalable products with great UX.',
    creator: '@your_twitter_handle', 
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};


export const viewport: Viewport = {
  themeColor: '#6f1cd7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
