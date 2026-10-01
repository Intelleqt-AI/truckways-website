/**
 * The shape of a blog post, plus the small helpers every post uses.
 * How to add a post: see ./README.md.
 */
import { isValidElement, type ReactNode } from 'react';
import type { Source } from './sources';

export type { Source };

/** Blog categories, in the order the index shows them. Keep the list short. */
export const CATEGORIES = ['Pricing', 'Costs', 'Getting paid', 'Running the business'] as const;
export type Category = (typeof CATEGORIES)[number];

export type Post = {
  /** URL: /blog/<slug>. Never change a published slug; if you must, add a 308 in next.config.mjs. */
  slug: string;
  /** Article headline (JSON-LD headline, index and "More from the blog" lists). */
  title: string;
  /** The visible H1, two-tone like every page H1: `a` dark, `b` grey. */
  h1: { a: string; b: string };
  /** The %s of <title>: keyword first, 48 characters or fewer (the layout adds " | TruckWys"). */
  seoTitle: string;
  /** Meta description, 155 characters or fewer. */
  description: string;
  /** One or two sentences under the H1 and on the index. */
  summary: string;
  category: Category;
  /** The main search term this post targets (internal: keeps posts from competing with each other). */
  keyword: string;
  /** ISO dates. `reviewed` is when the figures were last checked against the sources. */
  published: string;
  reviewed: string;
  /** Optional hint only: content/blog/index.ts recomputes it from the body at 220 words a minute. */
  readingMinutes?: number;
  /** Set by content/blog/index.ts from the body. */
  wordCount?: number;
  /** The product page this post supports, shown in the end card. */
  related: { href: string; label: string };
  /** Every source cited in the body, in the order first cited. */
  sources: Source[];
  /** Questions people really ask about the topic. Rendered after the body and as FAQPage JSON-LD. Plain text answers. */
  faq?: { q: string; a: string }[];
  body: ReactNode;
};

/** An inline citation link to a source. */
export const A = ({ s, children }: { s: Source; children: ReactNode }) => (
  <a href={s.url} rel="noopener" target="_blank">
    {children}
  </a>
);

/** Plain text of a React node tree (for word counts and heading ids). */
export const textOf = (n: ReactNode): string =>
  typeof n === 'string' || typeof n === 'number'
    ? String(n)
    : Array.isArray(n)
      ? n.map(textOf).join(' ')
      : isValidElement(n)
        ? textOf((n.props as { children?: ReactNode }).children)
        : '';
