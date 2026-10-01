import type { Metadata } from 'next';
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { ButtonLink, TextLink } from '../../../components/ui';
import { Breadcrumbs } from '../../../components/Blocks';
import { GUIDES, GUIDES_SORTED, getGuide } from '../../../content/guides';
import { SITE_URL, demoUrl, signupUrl, jsonLd } from '../../../lib/site';
import { PRICE_AND_FEE } from '../../../lib/facts';
import { graph, breadcrumbSchema, ids } from '../../../lib/schema';
import { date } from '../../../lib/format';
import s from '../article.module.css';

export const dynamicParams = false;

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const textOf = (n: ReactNode): string =>
  typeof n === 'string' || typeof n === 'number' ? String(n) : Array.isArray(n) ? n.map(textOf).join('') : isValidElement(n) ? textOf((n.props as { children?: ReactNode }).children) : '';

/** Gives every H2 in a guide body an id, and returns the list for the "On this page" index. */
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
    return c;
  });
  return { out, toc };
}
export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  const url = `${SITE_URL}/guides/${g.slug}`;
  return {
    title: g.seoTitle,
    description: g.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${g.seoTitle} | TruckWys`,
      description: g.description,
      publishedTime: g.published,
      modifiedTime: g.reviewed,
      images: [{ url: '/og/guides.png', width: 1200, height: 630, alt: g.title }],
    },
    twitter: { card: 'summary_large_image', title: `${g.seoTitle} | TruckWys`, description: g.description, images: ['/og/guides.png'] },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();
  const url = `${SITE_URL}/guides/${g.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: g.title, path: `/guides/${g.slug}` },
  ];
  const article = {
    '@type': 'Article',
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
    image: `${SITE_URL}/og/guides.png`,
    citation: g.sources.map((x) => x.url),
  };
  const { out, toc } = withAnchors(g.body);
  const others = GUIDES_SORTED.filter((x) => x.slug !== g.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(article, breadcrumbSchema(crumbs)))} />
      <article className={s.article}>
        <div className={`wrap ${s.layout}`}>
          <div className={s.col}>
            <Breadcrumbs trail={crumbs} />
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
                guide is not tax or legal advice.
              </p>
            </section>

            <aside className={s.endcard} aria-labelledby="end-h">
              <h2 id="end-h">Do this for every load, without the spreadsheet</h2>
              <p>TruckWys prices loads from diesel and tolls, raises the invoice on delivery and shows who owes you. Look around the demo company first.</p>
              <div className="cta-pair">
                <ButtonLink href={signupUrl(`guide-${g.slug}`)} cta="get_started" loc="guide_end">
                  Get started
                </ButtonLink>
                <TextLink href={demoUrl(`guide-${g.slug}`)} cta="open_demo" loc="guide_end">
                  Open the demo
                </TextLink>
              </div>
              <p className="small" style={{ marginTop: 12 }}>
                {PRICE_AND_FEE}
              </p>
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
              <li>
                <a href="#sources-h">Sources</a>
              </li>
            </ol>
          </nav>

          <nav className={s.more} aria-label="More guides">
            <h2>More guides</h2>
            <ul className={`${s.list} list-reset`}>
              {others.map((o) => (
                <li key={o.slug} className={s.item}>
                  <a className={s.itemLink} href={`/guides/${o.slug}`}>
                    <span className={s.itemDate}>Reviewed {date(o.reviewed)}</span>
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
      <div style={{ height: 'var(--web-section-y)' }} />
    </>
  );
}
