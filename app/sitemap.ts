import type { MetadataRoute } from 'next';
import { blogPosts } from '../lib/blog-data';
import { SITE_URL } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // Real content date, not the build timestamp — a fresh lastModified on every
  // deploy dilutes the freshness signal. Bump when page content actually changes.
  const contentDate = new Date('2026-07-21');
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: contentDate, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/product`, lastModified: contentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/ai`, lastModified: contentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: contentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: contentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/get-started`, lastModified: contentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: contentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blogs`, lastModified: contentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: contentDate, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: contentDate, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(
    (post: { slug: string; publishedAt?: string }) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }),
  );

  return [...staticPages, ...blogPages];
}
