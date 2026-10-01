import { signupUrl, demoUrl, loginUrl } from '../lib/site';
import NavSheet from './NavSheet';
import NavLinks from './NavLinks';

/* Nav (brief §2.4). "For TMS partners" joins when its page ships.
   Fix round 7: "How it works" leads the Product menu; Fast Pay is a top-level link with a "Soon" chip (owner: critical).
   Fix round 8: Fast Pay is no longer repeated in the Product menu; Insurance stays there, marked Soon.
   Right side stays Sign in + Get started only. */
export const PRODUCT_MENU = [
  { href: '/product', label: 'How it works', line: 'From the first price to the last rand' },
  { href: '/product/quoting', label: 'Quoting', line: "Priced from this month's diesel and real tolls" },
  { href: '/product/invoicing', label: 'Invoicing', line: 'Raised when the load delivers' },
  { href: '/product/debtors', label: 'Debtors', line: 'Who owes you, and reminders per invoice' },
  { href: '/product/reports', label: 'Reports', line: 'Profit, VAT and margin by lane' },
  { href: '/product/ai', label: 'AI and Copilot', line: 'Ask your numbers; you approve every change' },
  { href: '/integrations', label: 'Integrations', line: 'Cartrack, CtrlFleet, API and CSV' },
  // Coming soon: after a divider, with a "Soon" marker (ProductMenu, NavSheet). Fast Pay is top level (fix round 8).
  { href: '/insurance', label: 'Insurance', line: 'For South African transporters', soon: true },
];
export const NAV_LINKS: { href: string; label: string; soon?: boolean }[] = [
  { href: '/product', label: 'Product' },
  { href: '/capital', label: 'Fast Pay', soon: true },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  return (
    <header className="nav" id="site-nav">
      <div className="wrap nav__inner">
        <a href="/" className="nav__logo" aria-label="TruckWys home">
          <img src="/brand/truckwys-logo.png" alt="TruckWys" width={113} height={22} />
        </a>
        <NavLinks links={NAV_LINKS.slice(1)} product={PRODUCT_MENU} />
        <div className="nav__right">
          <a href={loginUrl('nav')} className="nav__link" data-cta="sign_in" data-loc="nav">
            Sign in
          </a>
          <a href={signupUrl('nav')} className="btn btn--primary btn--sm" data-cta="get_started" data-loc="nav">
            Get started
          </a>
          <NavSheet links={NAV_LINKS} product={PRODUCT_MENU} signIn={loginUrl('menu')} demo={demoUrl('menu')} signup={signupUrl('menu')} />
        </div>
      </div>
    </header>
  );
}
