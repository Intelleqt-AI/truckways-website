import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './lab.css';

/* Prototype routes: never indexed, never in the sitemap. */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function LabLayout({ children }: { children: ReactNode }) {
  return <div className="lab-page">{children}</div>;
}
