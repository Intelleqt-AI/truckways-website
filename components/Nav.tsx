import { signupUrl, demoUrl, loginUrl } from '../lib/site';
import { PRICE_AND_FEE } from '../lib/facts';
import NavSheet from './NavSheet';

/*
 * Phase A nav. The Product menu (Quoting, Invoicing, Debtors, Reports,
 * Integrations) and "For TMS partners" arrive with their pages in phase B;
 * until then Product links to the current /product page and Guides to /blogs.
 */
export const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blogs', label: 'Guides' },
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
          {NAV_LINKS.map((l) => (
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
          <NavSheet links={NAV_LINKS} signIn={loginUrl('menu')} demo={demoUrl('menu')} signup={signupUrl('menu')} price={PRICE_AND_FEE} />
        </div>
      </div>
    </header>
  );
}
