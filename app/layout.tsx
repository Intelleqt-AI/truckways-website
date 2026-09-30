import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SiteScripts from '../components/SiteScripts';
import { SITE_URL, jsonLd } from '../lib/site';
import { graph, organizationSchema, websiteSchema } from '../lib/schema';

// One variable Inter file, latin subset, self-hosted by next/font at build.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: true,
});

const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TruckWys: quoting, invoicing and debtors for SA transporters',
    template: '%s | TruckWys',
  },
  description:
    "Load-to-cash software for South African transporters. Price loads from FIASA diesel and SANRAL tolls, invoice on delivery and chase what's owed.",
  applicationName: 'TruckWys',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: { type: 'website', locale: 'en_ZA', siteName: 'TruckWys' },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA" data-theme="light" className={inter.variable}>
      <head>
        {/* Marks JS as available before first paint so below-fold reveals never flash.
            Without JS nothing is hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(organizationSchema, websiteSchema))} />
        <SiteScripts />
        {/* Vercel Web Analytics: cookieless and aggregate. No GA4, so no consent banner. */}
        <Analytics />
      </body>
    </html>
  );
}
