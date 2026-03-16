import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Contract Analysis | TruckWys',
  description: 'AI-powered contract analysis for variation orders and compliance checking.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AIAnalysisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
