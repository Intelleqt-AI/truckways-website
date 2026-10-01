/**
 * JSON-LD with stable @ids. Each page renders one @graph.
 * scripts/check-copy.mjs parses every page's JSON-LD after the build and
 * fails on a wrong price or on Fast Pay / Insurance in featureList or Offer.
 */
import { FACTS } from './facts';

const SITE = 'https://www.truckwys.com';

export const ids = {
  org: `${SITE}/#org`,
  website: `${SITE}/#website`,
  software: `${SITE}/#software`,
  offer: `${SITE}/#offer`,
};

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ids.org,
  name: 'TruckWys',
  legalName: FACTS.company.name,
  url: SITE,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE}/images/truckwys-logo-transparent.png`,
    width: 3707,
    height: 725,
  },
  // TODO(owner) Q15: add the published contact email once confirmed.
  address: {
    '@type': 'PostalAddress',
    streetAddress: FACTS.company.street,
    addressLocality: `${FACTS.company.locality}, ${FACTS.company.city}`,
    postalCode: FACTS.company.postcode,
    addressCountry: 'ZA',
  },
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'CIPC registration number',
    value: FACTS.company.reg,
  },
  areaServed: { '@type': 'Country', name: 'ZA' },
  // LinkedIn company page only once it exists (owner question Q13).
  sameAs: [FACTS.appStore, FACTS.android],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': ids.website,
  url: SITE,
  name: 'TruckWys',
  inLanguage: 'en-ZA',
  publisher: { '@id': ids.org },
};

export const offerSchema = {
  '@type': 'Offer',
  '@id': ids.offer,
  url: `${SITE}/pricing`,
  price: FACTS.price.monthly,
  priceCurrency: 'ZAR',
  priceSpecification: {
    '@type': 'UnitPriceSpecification',
    price: FACTS.price.monthly,
    priceCurrency: 'ZAR',
    unitCode: 'MON',
    billingDuration: 'P1M',
    // No valueAddedTaxIncluded: TruckWys is not VAT registered, so there is no VAT
    // to be included or excluded. true would claim VAT is inside the price and false
    // would claim VAT is added on top; both are wrong. The price is the full amount.
  },
  description: "Per month, plus 0,25% of each delivered load's invoice total. No VAT on our fees.",
  eligibleRegion: { '@type': 'Country', name: 'ZA' },
  availability: 'https://schema.org/InStock',
};

export const softwareSchema = {
  '@type': 'SoftwareApplication',
  '@id': ids.software,
  name: 'TruckWys',
  url: SITE,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Load-to-cash software for road freight',
  operatingSystem: 'Web, iOS, Android',
  description:
    'Load-to-cash software for South African transporters: quotes priced from diesel and SANRAL tolls, invoices raised on delivery, debtors and reminders, and reports.',
  publisher: { '@id': ids.org },
  offers: { '@id': ids.offer },
  // Live features only. Never Fast Pay or Insurance.
  featureList: [
    'Quoting from diesel and SANRAL tolls',
    'Invoice on delivery',
    'Debtors and reminders',
    'Reports including VAT',
    'Insights',
    'Copilot',
    'Integrations and API',
    'iPhone and Android apps',
  ],
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
