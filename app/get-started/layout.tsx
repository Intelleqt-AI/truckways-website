import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started with TruckWys | Free 30-Day Trial',
  description: 'Start your free 30-day trial of TruckWys. No credit card required. See your fleet\'s profit potential with AI-powered pricing, automated invoicing, and instant capital access.',
  keywords: 'TruckWys trial, fleet management demo, transport software free trial, AI pricing trial, fleet profitability platform, TMS free trial South Africa',
  openGraph: {
    title: 'Get Started with TruckWys | Free 30-Day Trial',
    description: 'Start your free trial today. No credit card required. See 15% average margin improvement and 10 days faster payments.',
    url: 'https://truckwys.com/get-started',
    siteName: 'TruckWys',
    type: 'website',
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
    title: 'Get Started with TruckWys | Free 30-Day Trial',
    description: 'Start your free trial today. No credit card required. See your fleet\'s profit potential.',
    images: ['/og-image.png'],
    creator: '@truckwys',
    site: '@truckwys',
  },
  alternates: {
    canonical: 'https://truckwys.com/get-started',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
