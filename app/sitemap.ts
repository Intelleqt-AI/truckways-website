import { MetadataRoute } from 'next';

const blogSlugs = [
  'fleet-profitability-south-africa-ai-powered-pricing',
  'true-cost-running-truck-fleet-south-africa-2026',
  'invoice-factoring-vs-ai-cash-advances-sa-transport',
  'hidden-profit-leaks-south-african-fleet-operators',
  'how-to-quote-freight-rates-south-africa-ai',
  'fleet-management-software-south-africa-2026',
  'fuel-cost-management-sa-fleets-strategies',
  'cross-border-trucking-southern-africa-multi-currency',
  'sa-fleet-operators-real-cost-per-kilometre',
  'future-of-freight-africa-ai-transforming-transport',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truckwys.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/get-started`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
