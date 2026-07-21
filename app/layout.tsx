import type React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

// Set in Vercel project env. GA4 and Search Console activate automatically
// once the values exist; nothing renders without them.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const SITE = 'https://www.truckwys.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'TruckWys | Fleet finance software for South African transporters',
    template: '%s | TruckWys',
  },
  description:
    'Quote loads with live diesel and toll prices, invoice on delivery, and get paid in 48 hours with FastPay. Built for South African fleets. R4,500 per month.',
  authors: [{ name: 'TruckWys' }],
  creator: 'TruckWys',
  publisher: 'TruckWys',
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
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE,
    siteName: 'TruckWys',
    title: 'TruckWys | Fleet finance software for South African transporters',
    description:
      'Quote loads with live diesel and toll prices, invoice on delivery, and get paid in 48 hours with FastPay. Built for South African fleets.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The TruckWys quote builder pricing a Johannesburg to Cape Town load',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TruckWys | Fleet finance software for South African transporters',
    description:
      'Quote loads with live diesel and toll prices, invoice on delivery, and get paid in 48 hours with FastPay.',
    images: ['/og-image.png'],
    creator: '@truckwys',
    site: '@truckwys',
  },
  alternates: {
    canonical: SITE,
  },
  category: 'technology',
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${plexMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
