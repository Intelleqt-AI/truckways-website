import { ArrowRight } from 'lucide-react';
import { TwoTone } from '../../components/ui';
import { Breadcrumbs, Closing } from '../../components/Blocks';
import { pageMeta } from '../../components/pages/meta';
import { GUIDES_SORTED } from '../../content/guides';
import { SITE_URL, jsonLd } from '../../lib/site';
import { graph, breadcrumbSchema, ids } from '../../lib/schema';
import { date } from '../../lib/format';
import s from './article.module.css';

const PATH = '/guides';
export const metadata = pageMeta({
  path: PATH,
  title: 'Guides for South African transporters',
  description:
    'Practical guides on pricing loads, SANRAL tolls, diesel costs, cross-border charges and getting paid, written for South African trucking businesses.',
  og: 'guides',
  ogAlt: 'TruckWys guides: pricing, invoicing and getting paid.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: PATH },
];

const collection = {
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}${PATH}#page`,
  url: `${SITE_URL}${PATH}`,
  name: 'Guides for South African transporters',
  inLanguage: 'en-ZA',
  isPartOf: { '@id': ids.website },
  hasPart: GUIDES_SORTED.map((g) => ({ '@id': `${SITE_URL}/guides/${g.slug}#article` })),
};

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(collection, breadcrumbSchema(CRUMBS)))} />
      <section className={s.head}>
        <div className="wrap">
          <Breadcrumbs trail={CRUMBS} />
          <TwoTone as="h1" className="h1" a="Guides." b="For the money side of trucking." />
          <p className={`lead ${s.lead}`}>Pricing, invoicing and getting paid, for South African transporters. Every figure is sourced and dated.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }} aria-label="All guides">
        <div className="wrap">
          <ul className={`${s.list} list-reset`}>
            {GUIDES_SORTED.map((g) => (
              <li key={g.slug} className={s.item}>
                <a className={s.itemLink} href={`/guides/${g.slug}`}>
                  <span className={s.itemDate}>Reviewed {date(g.reviewed)}</span>
                  <span>
                    <span className={s.itemTitle}>{g.title}</span>
                    <span className={s.itemSummary} style={{ display: 'block' }}>
                      {g.summary}
                    </span>
                    <span className={s.itemMeta} style={{ display: 'block' }}>
                      TruckWys · {g.readingMinutes} min read
                    </span>
                  </span>
                  <span className={s.itemArrow} aria-hidden="true">
                    <ArrowRight strokeWidth={1.75} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className={`small ${s.note}`}>
            Guides explain how costs and rules work. They are not tax or legal advice; check your own case with a tax practitioner.
          </p>
        </div>
      </section>
      <Closing page="guides" />
    </>
  );
}
