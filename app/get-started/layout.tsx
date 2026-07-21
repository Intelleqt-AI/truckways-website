import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get started',
  description:
    'Start your free TruckWys trial. Quote loads with live diesel and toll prices, invoice on delivery and get paid in 48 hours. R4,500 per month, no setup fees.',
  alternates: {
    canonical: 'https://www.truckwys.com/get-started',
  },
  openGraph: {
    title: 'Get started with TruckWys',
    description:
      'Start your free TruckWys trial. R4,500 per month after your trial. No setup fees. Cancel any time.',
    url: 'https://www.truckwys.com/get-started',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
