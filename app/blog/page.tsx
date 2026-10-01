import { ArrowRight } from 'lucide-react';
import { TwoTone } from '../../components/ui';
import { Closing } from '../../components/Blocks';
import { pageMeta } from '../../components/pages/meta';
import { CATEGORIES, FEATURED_SLUG, POSTS_SORTED, getPost, type Post } from '../../content/blog';
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
  blogPost: POSTS_SORTED.map((p) => ({ '@id': `${SITE_URL}/blog/${p.slug}#article` })),
};

function Row({ p }: { p: Post }) {
  return (
    <li className={s.item}>
      <a className={s.itemLink} href={`/blog/${p.slug}`}>
        <span className={s.itemDate}>{date(p.published)}</span>
        <span>
          <span className={s.itemTitle}>{p.title}</span>
          <span className={s.itemSummary} style={{ display: 'block' }}>
            {p.summary}
          </span>
          <span className={s.itemMeta} style={{ display: 'block' }}>
            {p.readingMinutes} min read · Reviewed {date(p.reviewed)}
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
  const groups = CATEGORIES.map((c) => ({ c, posts: POSTS_SORTED.filter((p) => p.category === c) })).filter((g) => g.posts.length);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(blog, breadcrumbSchema(CRUMBS)))} />
      <section className={s.head}>
        <div className="wrap">
          <TwoTone as="h1" className="h1" a="Blog." b="For the money side of trucking." />
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
          <a className={s.featured} href={`/blog/${featured.slug}`}>
            <span className={s.featuredLabel} id="featured-h">
              Start here · {featured.category}
            </span>
            <span className={s.featuredTitle}>{featured.title}</span>
            <span className={s.featuredSummary}>{featured.summary}</span>
            <span className={s.featuredMeta}>
              {featured.readingMinutes} min read · Reviewed {date(featured.reviewed)}
              <span className={s.featuredGo}>
                Read the article <ArrowRight strokeWidth={1.75} aria-hidden="true" />
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
            Articles explain how costs and rules work. They are not tax, legal or financial advice; check your own case with a tax
            practitioner or adviser.
          </p>
        </div>
      </section>
      <Closing page="blog" />
    </>
  );
}
