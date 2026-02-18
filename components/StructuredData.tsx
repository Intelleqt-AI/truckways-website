export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TruckWys',
    url: 'https://truckwys.com',
    logo: 'https://truckwys.com/images/truckwys-logo-transparent.png',
    description: 'AI-powered fleet profitability platform for African transport operators',
    foundingDate: '2024',
    industry: 'Transportation Technology',
    areaServed: {
      '@type': 'Place',
      name: 'Africa',
    },
    sameAs: [
      'https://www.linkedin.com/in/truckwys-a8519239a',
      'https://twitter.com/truckwys',
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TruckWys',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered fleet management and profitability platform. Features include smart quoting, automated invoicing, fleet performance analytics, and instant capital access.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ZAR',
      description: 'Contact for pricing',
    },
    // Note: aggregateRating removed - only add when real reviews exist (e.g., from G2, Capterra)
    featureList: [
      'AI-Powered Quote Pricing',
      'Fleet Performance Analytics',
      'Automated Invoice Generation',
      'Instant Capital Access',
      'Real-time Cash Flow Visibility',
      'Accounting Software Integration',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is TruckWys?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TruckWys is an AI-powered fleet profitability platform that helps African transport operators quote smarter, protect margins, and get paid faster through intelligent automation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does TruckWys improve fleet profitability?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TruckWys uses AI to analyse your operational data, recommend profitable pricing, automate invoicing, and provide instant access to capital. Customers typically see 15% average margin uplift and 10 days faster payments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TruckWys integrate with existing systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, TruckWys connects to your existing telematics, accounting software (Xero, Sage, QuickBooks), and TMS systems to provide a unified view of your fleet operations.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
