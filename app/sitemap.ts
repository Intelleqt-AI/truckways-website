import type { MetadataRoute } from 'next';
import { GUIDES } from '../content/guides';
import { SITE_URL } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // Real content date, not the build timestamp — a fresh lastModified on every
  // deploy dilutes the freshness signal. Bump when page content actually changes.
  // Real content dates, not the build time. Bump a page's date when its copy changes.
  const v3 = new Date('2026-09-30'); // website v3 phase A: Home, Pricing, Talk to us, privacy
  const legal = new Date('2026-08-04');
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: v3, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/product`, lastModified: v3, changeFrequency: 'monthly', priority: 0.9 },
    // Phase B feature pages and integrations (30 Sep 2026)
    { url: `${SITE_URL}/product/quoting`, lastModified: v3, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/product/invoicing`, lastModified: v3, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/product/debtors`, lastModified: v3, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/product/reports`, lastModified: v3, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/integrations`, lastModified: v3, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/pricing`, lastModified: v3, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: v3, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: v3, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/guides`, lastModified: v3, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: v3, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: legal, changeFrequency: 'yearly', priority: 0.2 },
    // Play Console and App Store Review both require this to be reachable.
    { url: `${SITE_URL}/delete-account`, lastModified: legal, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/paia-manual`, lastModified: legal, changeFrequency: 'yearly', priority: 0.2 },
  ];

  // Published guides only; retired /blogs slugs redirect and are not listed.
  const guidePages: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.reviewed),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...guidePages];
}
