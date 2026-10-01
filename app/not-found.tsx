import type { Metadata } from 'next';
import { TwoTone } from '../components/ui';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: '/', label: 'Home', line: 'Price it right. Invoice on delivery. Get paid.' },
  { href: '/product', label: 'How it works', line: 'From the first price to the last rand.' },
  { href: '/pricing', label: 'Pricing', line: 'One plan, R 4 499 per month.' },
  { href: '/guides', label: 'Guides', line: 'Costs, quoting and getting paid in SA freight.' },
];

export default function NotFound() {
  return (
    <section className="phero status-page">
      <div className="wrap">
        <p className="label status__eyebrow">Error 404</p>
        <TwoTone as="h1" className="h1" a="This page moved." b="Or it never existed." />
        <p className="lead">The link may be old or mistyped. Try one of these instead.</p>
        <ul className="list-reset nf-cards">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a className="pcard nf-card" href={l.href}>
                <span className="pcard__name">
                  {l.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="pcard__line">{l.line}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="small nf-help">
          Still stuck? <a className="ulink" href="/contact">Talk to us</a>.
        </p>
      </div>
    </section>
  );
}
