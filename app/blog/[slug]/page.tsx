import type { Metadata } from 'next';
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { TextLink } from '../../../components/ui';
import { Breadcrumbs, Closing } from '../../../components/Blocks';
import { POSTS, getPost, relatedPosts } from '../../../content/blog';
import { OG_BASE, SITE_URL, jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema, ids } from '../../../lib/schema';
import { date } from '../../../lib/format';
import s from '../article.module.css';

export const dynamicParams = false;

/** The post's own OG card (public/og/blog/<slug>.png) when it exists, else the blog's card. A new post works before its card is made. */
const ogImage = (slug: string) => (existsSync(join(process.cwd(), 'public', 'og', 'blog', `${slug}.png`)) ? `/og/blog/${slug}.png` : '/og/blog.png');

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const textOf = (n: ReactNode): string =>
  typeof n === 'string' || typeof n === 'number' ? String(n) : Array.isArray(n) ? n.map(textOf).join('') : isValidElement(n) ? textOf((n.props as { children?: ReactNode }).children) : '';

type El = ReactElement<{ children?: ReactNode; className?: string }>;
const kids = (e: El) => Children.toArray(e.props.children).filter(isValidElement) as El[];

/** Phones stack a `wide` table into blocks; label each cell with its column header so the values still read. */
function labelWideTable(t: El): El {
  const head = kids(t).find((k) => k.type === 'thead');
  const headers = head ? kids(kids(head)[0] ?? head).map((th) => textOf(th.props.children)) : [];
  return cloneElement(
    t,
    {},
    Children.map(t.props.children, (sec) =>
      isValidElement(sec) && (sec as El).type === 'tbody'
        ? cloneElement(
            sec as El,
            {},
            Children.map((sec as El).props.children, (tr) =>
              isValidElement(tr)
                ? cloneElement(
                    tr as El,
                    {},
                    Children.map((tr as El).props.children, (td, i) =>
                      isValidElement(td) && headers[i] ? cloneElement(td as ReactElement<{ 'data-label'?: string }>, { 'data-label': headers[i] }) : td,
                    ),
                  )
                : tr,
            ),
          )
        : sec,
    ),
  );
}

/** Gives every H2 in a post body an id, and returns the list for the "On this page" index. */
function withAnchors(body: ReactNode) {
  const toc: { id: string; text: string }[] = [];
  const root = isValidElement(body) ? (body.props as { children?: ReactNode }).children : body;
  const out = Children.map(root, (c) => {
    if (isValidElement(c) && c.type === 'h2') {
      const text = textOf((c as ReactElement<{ children?: ReactNode }>).props.children);
      const id = slugify(text);
      toc.push({ id, text });
      return cloneElement(c as ReactElement<{ id?: string }>, { id });
    }
    if (isValidElement(c) && c.type === 'table' && (c as El).props.className?.split(' ').includes('wide')) return labelWideTable(c as El);
    return c;
  });
  return { out, toc };
}
export function generateStaticParams() {
  return POSTS.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getPost(params.slug);
  if (!g) return {};
  const url = `${SITE_URL}/blog/${g.slug}`;
  return {
    title: g.seoTitle,
    description: g.description,
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      type: 'article',
      url,
      title: `${g.seoTitle} | TruckWys`,
      description: g.description,
      publishedTime: g.published,
      modifiedTime: g.reviewed,
      section: g.category,
      authors: ['TruckWys'],
      // Per-post card (public/og/blog/<slug>.png, made like the other OG cards: title + "TruckWys Blog").
      images: [{ url: ogImage(g.slug), width: 1200, height: 630, alt: g.title }],
    },
    twitter: { card: 'summary_large_image', title: `${g.seoTitle} | TruckWys`, description: g.description, images: [ogImage(g.slug)] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const g = getPost(params.slug);
  if (!g) notFound();
  const url = `${SITE_URL}/blog/${g.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: g.title, path: `/blog/${g.slug}` },
  ];
  const article = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: g.title,
    description: g.description,
    url,
    mainEntityOfPage: url,
    inLanguage: 'en-ZA',
    datePublished: g.published,
    dateModified: g.reviewed,
    // Q7: no named author yet, so the organisation is the author.
    author: { '@id': ids.org },
    publisher: { '@id': ids.org },
    image: `${SITE_URL}${ogImage(g.slug)}`,
    articleSection: g.category,
    keywords: g.keyword,
    wordCount: g.wordCount,
    isPartOf: { '@id': `${SITE_URL}/blog#blog` },
    citation: g.sources.map((x) => x.url),
  };
  const { out, toc } = withAnchors(g.body);
  const others = relatedPosts(g);
  const faq = g.faq?.length ? faqSchema(g.faq) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faq ? graph(article, breadcrumbSchema(crumbs), faq) : graph(article, breadcrumbSchema(crumbs)))} />
      <article className={s.article}>
        <div className={`wrap ${s.layout}`}>
          <div className={s.col}>
            <Breadcrumbs trail={crumbs} />
            <p className={s.eyebrow}>
              <a href={`/blog#${g.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{g.category}</a>
            </p>
            <h1 className={`h1 ${s.title}`}>
              {g.h1.a} <span className="tone-2">{g.h1.b}</span>
            </h1>
            <p className={s.dek}>{g.summary}</p>
            <p className={s.byline}>
              <span>
                By <b>TruckWys</b>
              </span>
              <span>
                Last reviewed <time dateTime={g.reviewed}>{date(g.reviewed)}</time>
              </span>
              <span>
                First published <time dateTime={g.published}>{date(g.published)}</time>
              </span>
              <span>{g.readingMinutes} min read</span>
            </p>

            <div className={s.body}>{out}</div>

            {g.faq?.length ? (
              <section className={s.faq} aria-labelledby="faq-h">
                <h2 id="faq-h">Questions people ask</h2>
                {g.faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </section>
            ) : null}

            <section className={s.sources} aria-labelledby="sources-h">
              <h2 id="sources-h">Sources</h2>
              <ol>
                {g.sources.map((x) => (
                  <li key={x.url}>
                    <a href={x.url} rel="noopener" target="_blank">
                      {x.name}
                    </a>
                  </li>
                ))}
              </ol>
              <p className={s.disclaimer}>
                Figures checked on {date(g.reviewed)}. Prices, tariffs and rates change; check the source before you rely on a figure. This
                article is not tax, legal or financial advice.
              </p>
            </section>

            <aside className={s.endcard} aria-labelledby="end-h">
              <h2 id="end-h">Do this for every load, without the spreadsheet</h2>
              <p>TruckWys prices loads from diesel and tolls, raises the invoice on delivery and shows who owes you.</p>
              <TextLink href={g.related.href}>{g.related.label}</TextLink>
            </aside>
          </div>

          <nav className={s.toc} aria-label="On this page">
            <p>On this page</p>
            <ol className="list-reset">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.text}</a>
                </li>
              ))}
              {g.faq?.length ? (
                <li>
                  <a href="#faq-h">Questions people ask</a>
                </li>
              ) : null}
              <li>
                <a href="#sources-h">Sources</a>
              </li>
            </ol>
          </nav>
        </div>
        {/* R7: outside the grid, so the sticky "On this page" index stops at the article's end. */}
        <div className="wrap">
          <nav className={s.more} aria-label="More from the blog">
            <h2>More from the blog</h2>
            <ul className={`${s.list} list-reset`}>
              {others.map((o) => (
                <li key={o.slug} className={s.item}>
                  <a className={s.itemLink} href={`/blog/${o.slug}`}>
                    <span className={s.itemDate}>{o.category}</span>
                    <span>
                      <span className={s.itemTitle}>{o.title}</span>
                    </span>
                    <span />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
      <Closing page={`blog-${g.slug}`} />
    </>
  );
}
