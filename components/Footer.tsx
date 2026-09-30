import { FACTS } from '../lib/facts';
import { APP_STORE_URL, loginUrl } from '../lib/site';

/* Phase A footer: only pages that exist today. Quoting, Invoicing, Debtors,
   Reports, Integrations, For TMS partners and the calculators join in B and C. */
const COLS = [
  {
    title: 'Product',
    links: [
      { href: '/product', label: 'How it works' },
      { href: '/pricing', label: 'Pricing' },
      { href: APP_STORE_URL, label: 'iPhone app', app: true },
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
    links: [{ href: '/blogs', label: 'Guides' }],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms' },
      { href: '/paia-manual', label: 'PAIA manual' },
      { href: '/delete-account', label: 'Delete your account' },
    ],
  },
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
              {/* TODO(owner): swap for Apple's official "Download on the App Store"
                  badge artwork (Apple marketing guidelines); a text button until then. */}
              <a href={APP_STORE_URL} className="btn btn--secondary btn--sm" data-appstore="footer">
                iPhone app on the App Store
              </a>
              <span className="small">Android coming soon</span>
            </div>
          </div>
          <div className="footer__cols">
            {COLS.map((c) => (
              <nav key={c.title} className="footer__col" aria-label={c.title}>
                <h2>{c.title}</h2>
                <ul className="list-reset">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} {...('app' in l ? { 'data-appstore': 'footer_link' } : {})}>
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
          <p className="small">
            {FACTS.company.name} · Reg. {FACTS.company.reg} · {FACTS.company.address}
          </p>
          <p className="small">© 2026 TruckWys</p>
        </div>
      </div>
    </footer>
  );
}
