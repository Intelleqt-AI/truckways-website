import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Profile Copy | TruckWys',
  description: 'LinkedIn profile content for TruckWys founder.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinkedInProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
