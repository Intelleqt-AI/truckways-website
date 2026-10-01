import { ArrowRight } from 'lucide-react';
import { TwoTone } from '../../components/ui';
import { Closing } from '../../components/Blocks';
import { pageMeta } from '../../components/pages/meta';
import { CATEGORIES, FEATURED_SLUG, POSTS_SORTED, coverOf, getPost, type Post } from '../../content/blog';
import { getImageProps } from 'next/image';
import { SITE_URL, jsonLd } from '../../lib/site';
import { graph, breadcrumbSchema, ids } from '../../lib/schema';
import { date } from '../../lib/format';
import s from './article.module.css';

const PATH = '/blog';
const NAME = 'The TruckWys blog';
export const metadata = pageMeta({
  path: PATH,
  title: 'Blog: pricing, costs and getting paid in trucking',
  description:
    'Articles for South African transporters on pricing loads, diesel and toll costs, invoicing on delivery and getting paid. Every figure sourced and dated.',
  og: 'blog',
  ogAlt: 'The TruckWys blog: pricing, costs and getting paid.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: PATH },
];

const anchor = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const blog = {
  '@type': 'Blog',
  '@id': `${SITE_URL}${PATH}#blog`,
  url: `${SITE_URL}${PATH}`,
  name: NAME,
  description: 'Pricing, costs and getting paid, for South African transporters.',
  inLanguage: 'en-ZA',
  isPartOf: { '@id': ids.website },
  publisher: { '@id': ids.org },
  // Inline BlogPosting items (not bare @id references), so the index stands on its own for parsers.
  blogPost: POSTS_SORTED.map((p) => ({
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${p.slug}#article`,
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.published,
    dateModified: p.reviewed,
  })),
};

/** A cover as a plain <img> from next/image (AVIF/WebP, srcset), decorative unless `alt` is given. */
function CoverImg({ slug, sizes, className, eager }: { slug: string; sizes: string; className: string; eager?: boolean }) {
  const c = coverOf(slug);
  if (!c) return null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { props: { style: _style, ...img } } = getImageProps({ src: c.src, alt: '', width: 1600, height: 900, quality: 62, sizes });
  return <img {...img} alt="" className={className} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding={eager ? 'sync' : 'async'} />;
}

function Row({ p }: { p: Post }) {
  return (
    <li className={s.item}>
      <a className={`${s.itemLink} ${s.itemLinkThumb}`} href={`/blog/${p.slug}`}>
        <CoverImg slug={p.slug} sizes="176px" className={s.thumb} />
        <span>
          <span className={s.itemTitle}>{p.title}</span>
          <span className={s.itemSummary} style={{ display: 'block' }}>
            {p.summary}
          </span>
          <span className={s.itemMeta} style={{ display: 'block' }}>
            Published <time dateTime={p.published}>{date(p.published)}</time> · {p.readingMinutes} min read
          </span>
        </span>
        <span className={s.itemArrow} aria-hidden="true">
          <ArrowRight strokeWidth={1.75} />
        </span>
      </a>
    </li>
  );
}

export default function BlogPage() {
  const featured = getPost(FEATURED_SLUG) ?? POSTS_SORTED[0];
  // The featured post is listed once, at the top, not again in its category (R7).
  const groups = CATEGORIES.map((c) => ({ c, posts: POSTS_SORTED.filter((p) => p.category === c && p.slug !== featured.slug) })).filter(
    (g) => g.posts.length,
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(blog, breadcrumbSchema(CRUMBS)))} />
      <section className={s.head}>
        <div className="wrap">
          <TwoTone as="h1" className="h1" a="Blog." b="The money side of trucking." />
          <p className={`lead ${s.lead}`}>
            Pricing loads, costs, invoicing and getting paid, for South African transporters. Every figure is sourced and dated.
          </p>
          <nav className={s.cats} aria-label="Blog categories">
            {groups.map((g) => (
              <a key={g.c} href={`#${anchor(g.c)}`} className={s.cat}>
                {g.c} <span>{g.posts.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="featured-h">
        <div className="wrap">
          <a className={`${s.featured} ${s.featuredCover}`} href={`/blog/${featured.slug}`}>
            <CoverImg slug={featured.slug} sizes="(max-width: 899px) calc(100vw - 32px), 560px" className={s.featuredImg} eager />
            <span className={s.featuredText}>
            <span className={s.featuredLabel} id="featured-h">
              Start here · {featured.category}
            </span>
            <span className={s.featuredTitle}>{featured.title}</span>
            <span className={s.featuredSummary}>{featured.summary}</span>
            <span className={s.featuredMeta}>
              <span>
                {featured.readingMinutes} min read · Published <time dateTime={featured.published}>{date(featured.published)}</time>
              </span>
              <span className={s.featuredGo}>
                Read the article <ArrowRight strokeWidth={1.75} aria-hidden="true" />
              </span>
            </span>
            </span>
          </a>

          {groups.map((g) => (
            <section key={g.c} className={s.group} aria-labelledby={`${anchor(g.c)}-h`} id={anchor(g.c)}>
              <h2 id={`${anchor(g.c)}-h`} className={s.groupTitle}>
                {g.c}
              </h2>
              <ul className={`${s.list} list-reset`}>
                {g.posts.map((p) => (
                  <Row key={p.slug} p={p} />
                ))}
              </ul>
            </section>
          ))}
          <p className={`small ${s.note}`}>
            How we write these: by the TruckWys team, for South African transporters. Every figure links to its source and is checked again
            when a post is updated; worked examples state their inputs. Articles explain how costs and rules work. They are not tax, legal or
            financial advice; check your own case with a tax practitioner or adviser.
          </p>
        </div>
      </section>
      <Closing page="blog" />
    </>
  );
}
