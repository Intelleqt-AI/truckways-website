import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StructuredData from '../components/StructuredData';
import ConditionalLayout from '../components/ConditionalLayout';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://truckwys.com'),
  title: 'TruckWys | AI-Powered Fleet Profitability Platform for African Transport',
  description: 'AI-powered fleet management for African transport operators. 15% margin uplift, 10 days faster payments. Start your free trial.',
  keywords: 'fleet management software, transport software South Africa, AI pricing logistics, invoice automation, African transport technology, fleet profitability, truck fleet management, logistics software Africa, TMS software, transport management system',
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
    url: 'https://truckwys.com',
    siteName: 'TruckWys',
    title: 'TruckWys | AI-Powered Fleet Profitability Platform',
    description: 'Transform your fleet operations with AI-powered pricing, automated invoicing, and instant cash flow. Built for African fleets.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TruckWys - Fleet Profitability Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TruckWys | AI-Powered Fleet Profitability Platform',
    description: 'Transform your fleet with AI-powered pricing and instant payments. Built for African transport operators.',
    images: ['/og-image.png'],
    creator: '@truckwys',
  },
  alternates: {
    canonical: 'https://truckwys.com',
  },
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3C83F6" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans">
        <StructuredData />
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  );
}
