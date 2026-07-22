/**
 * Single source of truth for site-wide facts.
 * Used by page copy, structured data, and the llms.txt generators so the
 * numbers never drift between surfaces.
 */

export const SITE_URL = 'https://www.truckwys.com';

export const FACTS = {
  name: 'TruckWys',
  oneLiner:
    'TruckWys is fleet finance software for South African transporters: AI quoting with live diesel and toll prices, automatic invoicing on delivery, collections, and FastPay that settles invoices in 48 hours.',
  audience:
    'South African fleet owners and transport operators running 3 to 200 trucks, including cross-border work into Botswana, Namibia, Zimbabwe, Zambia and Mozambique.',
  pricePerMonth: 4500,
  bookingFeePct: 0.25,
  email: 'grant@truckwys.com',
  features: [
    'AI quote builder: price a load in about 60 seconds with live diesel prices, SANRAL toll plaza fees per route, cross-border and weighbridge charges, and your own vehicle running costs',
    'Route options on a live map with per-route distance, tolls and fuel burn',
    'Win probability and margin recommendations learned from your own quote history',
    'Automatic invoice creation the moment a load is delivered',
    'Collections agent that follows up overdue invoices',
    'FastPay: optional 48-hour invoice settlement',
    'Capital advances against outstanding invoices',
    'Fleet insights: cost per kilometre, margin per route, utilisation, driver and vehicle performance',
    'Integrations with Xero and Cartrack',
    'Mobile app for iOS and Android with the same account and data as the web app',
  ],
  faqs: [
    {
      q: 'What is TruckWys?',
      a: 'TruckWys is fleet finance software for South African transporters. It prices loads with live diesel and toll costs, creates invoices automatically on delivery, chases payment, and can settle invoices in 48 hours through FastPay.',
    },
    {
      q: 'How much does TruckWys cost?',
      a: 'R4,500 per month per fleet with unlimited users and quotes, plus 0.25% on confirmed bookings. There are no setup fees. FastPay early settlement is optional and priced separately.',
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
      q: 'What is FastPay?',
      a: 'FastPay settles an approved invoice into your account within 48 hours instead of waiting 30 to 60 days for the client to pay. It is optional: you choose it invoice by invoice, and pricing is agreed when you switch it on.',
    },
    {
      q: 'Is FastPay invoice factoring?',
      a: 'It works like invoice factoring or invoice discounting for transporters, without the paperwork. You choose an approved invoice, TruckWys settles it into your account within 48 hours, and the balance clears when your client pays. No lock-in contracts, no bridging finance rates.',
    },
    {
      q: 'Does TruckWys replace my transport management system?',
      a: 'No. TruckWys handles the money side: quoting, invoicing, collections and cash flow. It works alongside your TMS and tracking, and integrates with Xero and Cartrack.',
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
      a: 'Yes. Your data is encrypted in transit and at rest, hosted securely, and never shared with other fleets. You can export it at any time.',
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
    price: String(FACTS.pricePerMonth),
    priceCurrency: 'ZAR',
    description: 'R4,500 per month per fleet plus 0.25% per confirmed booking. No setup fees.',
  },
  featureList: [
    'AI quote builder with live diesel and SANRAL toll prices',
    'Automatic invoicing on delivery',
    'Collections follow-up',
    'FastPay 48-hour invoice settlement',
    'Capital advances against invoices',
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
