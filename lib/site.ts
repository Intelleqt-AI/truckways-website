/**
 * Site-wide URLs and constants. Product facts live in lib/facts.ts.
 */
import { FACTS, PRICE, FEE, FEE_LINE, CANCELLATION as CANCEL } from './facts';

export const SITE_URL = 'https://www.truckwys.com';
export const APP_URL = 'https://app.truckwys.com';

/** "Get started": the app's signup (account, email code, card, live). */
export const APP_SIGNUP_URL = `${APP_URL}/signup`;
/** "Sign in". */
export const APP_LOGIN_URL = `${APP_URL}/login`;
/**
 * "Open the demo". The app has no demo deep link yet (owner question Q10), so
 * this is the login page, whose "View demo" button signs straight into the
 * shared demo company with no form. Change here once /demo exists in the app.
 */
export const APP_DEMO_URL = `${APP_URL}/login`;

export const APP_STORE_URL = FACTS.appStore;

/** Where the "Talk to us" form is delivered (FormSubmit). Unchanged address. */
export const CONTACT_EMAIL = 'grant@truckwys.com';

/**
 * Outbound app links carry ?ref=site-{page}-{location} (no personal data) so
 * signups and demo sessions can be attributed in the app.
 */
function withRef(url: string, ref?: string) {
  return ref ? `${url}?ref=site-${ref}` : url;
}
export const signupUrl = (ref?: string) => withRef(APP_SIGNUP_URL, ref);
export const demoUrl = (ref?: string) => withRef(APP_DEMO_URL, ref);
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
