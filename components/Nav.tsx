import { signupUrl, demoUrl, loginUrl } from '../lib/site';
import { PRICE_SHORT } from '../lib/facts';
import NavSheet from './NavSheet';
import ProductMenu from './ProductMenu';

/* Nav (brief §2.4). "For TMS partners" joins when its page ships. */
export const PRODUCT_MENU = [
  { href: '/product/quoting', label: 'Quoting', line: "Priced from this month's diesel and real tolls" },
  { href: '/product/invoicing', label: 'Invoicing', line: 'Raised when the load delivers' },
  { href: '/product/debtors', label: 'Debtors', line: 'Who owes you, and reminders per invoice' },
  { href: '/product/reports', label: 'Reports', line: 'Profit, VAT and margin by lane' },
  { href: '/integrations', label: 'Integrations', line: 'Cartrack, CtrlFleet, API and CSV' },
  { href: '/product', label: 'How it works', line: 'From the first price to the last rand' },
];
export const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
];

export default function Nav({ current }: { current?: string }) {
  return (
    <header className="nav" id="site-nav">
      <div className="wrap nav__inner">
        <a href="/" className="nav__logo" aria-label="TruckWys home">
          <img src="/brand/truckwys-logo.png" alt="TruckWys" width={113} height={22} />
        </a>
        <nav aria-label="Main" className="nav__links">
          <ProductMenu items={PRODUCT_MENU} current={current?.startsWith('/product')} />
          {NAV_LINKS.slice(1).map((l) => (
            <a key={l.href} href={l.href} className="nav__link" aria-current={current === l.href ? 'page' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__right">
          <a href={loginUrl('nav')} className="nav__link" data-cta="sign_in" data-loc="nav">
            Sign in
          </a>
          <a href={demoUrl('nav')} className="nav__link" data-cta="open_demo" data-loc="nav">
            Open the demo
          </a>
          <a href={signupUrl('nav')} className="btn btn--primary btn--sm" data-cta="get_started" data-loc="nav">
            Get started
          </a>
          <NavSheet links={NAV_LINKS} product={PRODUCT_MENU} signIn={loginUrl('menu')} demo={demoUrl('menu')} signup={signupUrl('menu')} price={PRICE_SHORT} />
        </div>
      </div>
    </header>
  );
}
