/**
 * Site-wide URLs and constants. Product facts live in lib/facts.ts.
 */
import { FACTS, PRICE, FEE, FEE_LINE, CANCELLATION as CANCEL } from './facts';

export const SITE_URL = 'https://www.truckwys.com';

/**
 * Spread into every page-level `openGraph`: Next replaces the layout's openGraph object wholesale, so without
 * this og:type, og:locale and og:site_name go missing on pages that set their own.
 */
export const OG_BASE = { type: 'website', locale: 'en_ZA', siteName: 'TruckWys' } as const;
export const APP_URL = 'https://app.truckwys.com';

/** "Get started": the app's signup (account, email code, card, live). */
export const APP_SIGNUP_URL = `${APP_URL}/signup`;
/** "Sign in". */
export const APP_LOGIN_URL = `${APP_URL}/login`;
/**
 * Direct demo entry: the app route that signs straight into the public demo
 * company with no form (truckwyas-frontend PR #123 adds /demo).
 */
export const DEMO_URL = `${APP_URL}/demo?ref=website`;
/**
 * TODO: flip to true once truckwyas-frontend #123 is deployed.
 * Until then /demo would 404 in production, so "Open the demo" stays on the
 * login page, whose "View demo" button signs into the demo company with no form.
 */
export const DEMO_DEEP_LINK_LIVE = false;
/** What "Open the demo" does, said truthfully for where the button lands today. */
export const DEMO_LINE = DEMO_DEEP_LINK_LIVE
  ? 'The demo is open. No form, no sales call.'
  : 'The demo is open: press View demo on the sign-in page. No sign-up, no sales call.';
/** Where every "Open the demo" button points today. */
export const APP_DEMO_URL = DEMO_DEEP_LINK_LIVE ? DEMO_URL : APP_LOGIN_URL;

export const APP_STORE_URL = FACTS.appStore;
export const PLAY_STORE_URL = FACTS.android;

/** Where the "Talk to us" form is delivered (FormSubmit). Unchanged address. */
export const CONTACT_EMAIL = 'grant@truckwys.com';

/**
 * Outbound app links carry ?ref=site-{page}-{location} (no personal data).
 * NOTE: the app does not read `ref` yet (no code in Login.tsx or Signup.tsx on
 * 30 Sep 2026), so the tags are kept for when signup attribution is added.
 */
function withRef(url: string, ref?: string) {
  return ref ? `${url}?ref=site-${ref}` : url;
}
export const signupUrl = (ref?: string) => withRef(APP_SIGNUP_URL, ref);
/** "Open the demo": DEMO_URL (already tagged ?ref=website) once live, else login with a per-button ref. */
export const demoUrl = (ref?: string) => (DEMO_DEEP_LINK_LIVE ? DEMO_URL : withRef(APP_LOGIN_URL, ref));
export const loginUrl = (ref?: string) => withRef(APP_LOGIN_URL, ref);

/* Legacy names still used by the phase B pages (/product, /about, /blogs). */
export const PRICE_PER_MONTH = FACTS.price.monthly;
export const PRICE_LABEL = PRICE;
export const FEE_LABEL = FEE;
export const FEE_BASIS = FEE_LINE.replace(/^0,25% /, '');
export const CANCELLATION = CANCEL;

/** Renders a JSON-LD script tag body. Escapes < so content can never break out. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}

export { organizationSchema, softwareSchema } from './schema';
