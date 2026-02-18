import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baselinq | AI Contract Analysis',
  description: 'Intelligent compliance analysis powered by Baselinq.',
};

export default function AIAnalysisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
