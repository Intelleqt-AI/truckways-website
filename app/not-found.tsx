import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blogs', label: 'Guides' },
];

export default function NotFound() {
  return (
    <section className="phero" style={{ minHeight: '60vh' }}>
      <div className="wrap">
        <p className="label" style={{ marginBottom: 16 }}>404</p>
        <h1 className="h1" style={{ maxWidth: '16ch' }}>
          This page moved or never existed
        </h1>
        <p className="lead">Try one of these instead.</p>
        <ul className="list-reset nf-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a className="tlink tlink--quiet" href={l.href}>
                {l.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
