import { FACTS } from '../lib/facts';
import { loginUrl } from '../lib/site';
import StoreBadges from './StoreBadges';

/* Footer (brief §2.4): only pages that exist. For TMS partners and the
   calculators join when their pages ship. */
const COLS = [
  {
    title: 'Product',
    links: [
      { href: '/product', label: 'How it works' },
      { href: '/product/quoting', label: 'Quoting' },
      { href: '/product/invoicing', label: 'Invoicing' },
      { href: '/product/debtors', label: 'Debtors' },
      { href: '/product/reports', label: 'Reports' },
      { href: '/product/ai', label: 'AI and Copilot' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/capital', label: 'Capital and Fast Pay' },
      { href: '/insurance', label: 'Insurance' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Talk to us' },
      { href: loginUrl('footer'), label: 'Sign in' },
    ],
  },
  {
    title: 'Resources',
    links: [{ href: '/blog', label: 'Blog' }],
  },
];

const LEGAL = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/paia-manual', label: 'PAIA manual' },
  { href: '/delete-account', label: 'Delete your account' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <img className="footer__logo" src="/brand/truckwys-logo.png" alt="TruckWys" width={113} height={22} loading="lazy" />
            <p>Load-to-cash software for South African transporters.</p>
            <div className="footer__app">
              <StoreBadges loc="footer" size="sm" />
            </div>
          </div>
          <div className="footer__cols">
            {COLS.map((c) => (
              <nav key={c.title} className="footer__col" aria-label={c.title}>
                <h2>{c.title}</h2>
                <ul className="list-reset">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="footer__legal">
          <p className="small footer__co">
            © 2026 {FACTS.company.name} · Reg.&nbsp;{FACTS.company.reg}
          </p>
          <nav aria-label="Legal" className="footer__legal-links">
            {LEGAL.map((l) => (
              <a key={l.href} href={l.href} className="small">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
