/**
 * Single source of truth for site-wide facts.
 * Used by page copy, structured data, and the llms.txt generators so the
 * numbers never drift between surfaces.
 */

export const SITE_URL = 'https://www.truckwys.com';

/**
 * The product app. Every "Get started" and "See the demo" CTA points here:
 * there is no free trial, so visitors sign in and look around with the demo
 * account rather than filling in a form and waiting for a call.
 */
export const APP_LOGIN_URL = 'https://app.truckwys.com/login';

/** The live iOS listing. The app is South Africa only, so the storefront-less
 * URL 404s outside ZA; the /za/ storefront URL works everywhere. */
export const APP_STORE_URL = 'https://apps.apple.com/za/app/truckwys/id6796449044';

/**
 * The Android app is not on the Play Store yet. When it is, set this and
 * uncomment the Google Play badge in app/page.tsx.
 */
// export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=';

/**
 * Price and fee, matching the app (Signup, Paystack MONTHLY_FEE = 4499) and
 * terms clauses 5.1, 5.2 and 6.
 * TODO(owner): confirm whether R 4 499 is excl. or incl. VAT before stating
 * either on the site. Terms 5.5 say fees exclude VAT; signup does not say.
 */
export const PRICE_PER_MONTH = 4499;
export const PRICE_LABEL = 'R 4 499';
export const FEE_LABEL = '0,25%';
export const FEE_BASIS = "of each delivered load's invoice value";
export const CANCELLATION = "Month to month. Cancel on 30 days' notice.";

export const FACTS = {
  name: 'TruckWys',
  oneLiner:
    'TruckWys is fleet finance software for South African transporters: quoting with live diesel and toll prices, automatic invoicing on delivery, debtors and one-click payment reminders, and reports. Fast Pay is coming soon.',
  audience:
    'South African fleet owners and transport operators running 3 to 200 trucks, including cross-border work into Botswana, Namibia, Zimbabwe, Zambia and Mozambique.',
  pricePerMonth: PRICE_PER_MONTH,
  deliveredLoadFeePct: 0.25,
  email: 'grant@truckwys.com',
  features: [
    'Quote builder: price a load with live diesel prices, SANRAL toll plaza fees per route, cross-border and weighbridge charges, and your own vehicle running costs',
    'Route options on a live map with per-route distance, tolls and fuel burn',
    'Win probability and margin recommendations learned from your own quote history',
    'Automatic invoice creation the moment a load is delivered',
    'Debtors ageing and one-click payment reminders that get firmer as invoices age',
    'Fleet insights: margin per route, revenue by truck, who pays late',
    'Integrations with Xero and Cartrack',
    'iPhone app with the same account and data as the web app (Android coming soon)',
    'Coming soon, not live yet: Fast Pay (getting paid on an invoice before your client pays)',
  ],
  faqs: [
    {
      q: 'What is TruckWys?',
      a: 'TruckWys is fleet finance software for South African transporters. It prices loads with live diesel and toll costs, creates invoices automatically on delivery, shows who owes you and lets you send payment reminders in one click.',
    },
    {
      q: 'How much does TruckWys cost?',
      a: `${PRICE_LABEL} per month per fleet with unlimited users and quotes, plus ${FEE_LABEL} ${FEE_BASIS}. There are no setup fees. ${CANCELLATION}`,
    },
    {
      q: 'How does the AI quote builder work?',
      a: 'You pick the client, vehicle type, collection and delivery points. TruckWys draws the route, prices fuel from the live diesel price, adds the actual SANRAL toll plazas on that route, and applies your own per-kilometre rates. It then recommends a price based on what has won you work before.',
    },
    {
      q: 'Does TruckWys handle cross-border loads?',
      a: 'Yes. Quotes into Botswana, Namibia, Zimbabwe, Zambia and Mozambique include border fees, weighbridge charges and non-SA toll costs automatically.',
    },
    {
      q: 'What is Fast Pay?',
      a: 'Fast Pay is coming soon and is not live yet. It is planned as a way to get paid on an invoice before your client pays. There are no rates or limits yet; we will publish them when it launches.',
    },
    {
      q: 'Does TruckWys replace my transport management system?',
      a: 'No. TruckWys handles the money side: quoting, invoicing, debtors and cash flow. It works alongside your TMS and tracking, and integrates with Xero and Cartrack.',
    },
    {
      q: 'Is TruckWys fleet management software?',
      a: 'TruckWys is fleet management software for the money side of a South African trucking business: load pricing, truck quoting, invoicing, collections and cash flow. It does not do dispatch or routing, so it fits alongside the fleet management system you already run.',
    },
    {
      q: 'How long does setup take?',
      a: 'Most fleets are quoting on day one. Add your vehicles and rates, import your clients, and the system is ready. Xero and Cartrack connections take a few minutes each.',
    },
    {
      q: 'Is my data safe?',
      a: 'Your data is encrypted in transit, and your prices and client details are never shown to another fleet. To estimate win probability when your own history is still short, TruckWys can use anonymised quote outcomes pooled across fleets, and lane benchmarks only appear once at least five won quotes from at least two operators exist for that lane. You can export your data at any time.',
    },
  ],
};

/** Renders a JSON-LD script tag. Server component friendly.
 * Escapes < so content can never break out of the script tag. */
export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TruckWys',
  url: SITE_URL,
  logo: `${SITE_URL}/images/truckwys-logo-transparent.png`,
  description: FACTS.oneLiner,
  email: FACTS.email,
  foundingDate: '2024',
  areaServed: { '@type': 'Country', name: 'South Africa' },
  sameAs: [
    'https://www.linkedin.com/in/truckwys-a8519239a',
    'https://twitter.com/truckwys',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TruckWys',
  url: SITE_URL,
};

export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TruckWys',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: FACTS.oneLiner,
  offers: {
    '@type': 'Offer',
    price: String(PRICE_PER_MONTH),
    priceCurrency: 'ZAR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(PRICE_PER_MONTH),
      priceCurrency: 'ZAR',
      billingDuration: 'P1M',
      unitCode: 'MON',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
    },
    description: `${PRICE_LABEL} per month per fleet plus ${FEE_LABEL} ${FEE_BASIS}. No setup fees. ${CANCELLATION}`,
  },
  featureList: [
    'Quote builder with live diesel and SANRAL toll prices',
    'Automatic invoicing on delivery',
    'Debtors ageing and one-click payment reminders',
    'Fleet profitability insights',
    'Xero and Cartrack integrations',
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FACTS.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
