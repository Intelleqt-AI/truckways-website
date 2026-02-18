'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Don't show Navbar/Footer on dashboard or ai-analysis routes
  const isDashboard = pathname?.startsWith('/dashboard');
  const isAIAnalysis = pathname?.startsWith('/ai-analysis');

  if (isDashboard || isAIAnalysis) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
