import '../../components/pages/pages-b.css';
import { ButtonLink, StatusChip } from '../../components/ui';
import { Closing } from '../../components/Blocks';
import { FeatureHero, Split } from '../../components/pages/blocks';
import { pageMeta } from '../../components/pages/meta';
import { jsonLd } from '../../lib/site';
import { graph, breadcrumbSchema } from '../../lib/schema';

/*
 * Insurance: coming soon. The owner has not confirmed what it covers (Q12), so this page makes no
 * product claims: only what we commit to publish before launch. Never list Insurance in the
 * SoftwareApplication featureList or Offer (lib/schema.ts, scripts/check-copy.mjs).
 */
const PATH = '/insurance';
export const metadata = pageMeta({
  path: PATH,
  title: 'Insurance: coming soon',
  description:
    'Insurance from TruckWys is being built for South African transporters. What it covers and what it costs are published before it goes live.',
  og: 'product',
  ogAlt: 'TruckWys Insurance: coming soon.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Insurance', path: PATH },
];

const PUBLISH = [
  { t: 'What it covers', d: 'The cover, and what it does not cover, in plain words.' },
  { t: 'Who underwrites it', d: 'The insurer behind it, by name.' },
  { t: 'What it costs', d: 'The premium, and how it is worked out.' },
  { t: 'How claims work', d: 'Who you contact, what you send and what happens next.' },
];

export default function InsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="insurance"
        primary="none"
        eyebrow="Insurance"
        a="Insurance."
        b="Coming soon."
        lead="Being built for South African transporters. What it covers and what it costs are published before it goes live."
        actions={
          <>
            <ButtonLink href="/contact?topic=insurance" cta="notify" loc="hero">
              Get notified
            </ButtonLink>
            <StatusChip />
          </>
        }
      />

      <section className="sec sec--grey" aria-labelledby="publish-h">
        <div className="wrap">
          <Split id="publish-h" a="What we'll publish." b="Before it goes live." line="Nothing on this page is live. These four answers come first, in writing.">
            <ol className="b-publish list-reset">
              {PUBLISH.map((p) => (
                <li key={p.t} className="reveal">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
          </Split>
        </div>
      </section>

      <Closing page="insurance" />
    </>
  );
}
