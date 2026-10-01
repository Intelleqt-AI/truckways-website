/**
 * The blog: one file per post in ./posts, registered here. To add a post, see ./README.md.
 * House rules: no hype, no em dashes, South African formats (R&nbsp;4&nbsp;499, decimal comma),
 * every figure sourced and dated or shown as a worked example with its inputs stated.
 */
import { CATEGORIES, textOf, type Category, type Post } from './types';

import costPerKm from './posts/sa-fleet-operators-real-cost-per-kilometre';
import quoting from './posts/how-to-quote-freight-rates-south-africa-ai';
import leaks from './posts/hidden-profit-leaks-south-african-fleet-operators';
import diesel from './posts/fuel-cost-management-sa-fleets-strategies';
import crossBorder from './posts/cross-border-trucking-southern-africa-multi-currency';
import pricing from './posts/fleet-profitability-south-africa-ai-powered-pricing';
import trueCost from './posts/true-cost-running-truck-fleet-south-africa-2026';
import invoiceFinance from './posts/invoice-factoring-vs-ai-cash-advances-sa-transport';
import software from './posts/fleet-management-software-south-africa-2026';
import future from './posts/future-of-freight-africa-ai-transforming-transport';
import cashFlow from './posts/cash-flow-transport-business-south-africa';
import pod from './posts/proof-of-delivery-invoice-on-delivery';

export type { Post, Category };
export { CATEGORIES };

const RAW: Post[] = [costPerKm, quoting, leaks, diesel, crossBorder, pricing, trueCost, invoiceFinance, software, future, cashFlow, pod];

/** Word count and reading time come from the body (220 words a minute), so they can never drift from the text. */
export const POSTS: (Post & { wordCount: number; readingMinutes: number })[] = RAW.map((p) => {
  const words = textOf(p.body).split(/\s+/).filter(Boolean).length;
  return { ...p, wordCount: words, readingMinutes: Math.max(1, Math.round(words / 220)) };
});

/** The post the index leads with. */
export const FEATURED_SLUG = 'how-to-quote-freight-rates-south-africa-ai';

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

/** Newest first, by first-published date. */
export const POSTS_SORTED = [...POSTS].sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0));

/** Posts to suggest after `post`: same category first, then the newest of the rest. */
export function relatedPosts(post: Post, n = 3) {
  const others = POSTS_SORTED.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, n);
}
