import '../../components/pages/pages-b.css';
import { ButtonLink, SectionHeader, StatusChip } from '../../components/ui';
import { Closing } from '../../components/Blocks';
import { PhotoHero } from '../../components/pages/blocks';
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
  og: 'insurance',
  ogAlt: 'TruckWys Insurance: coming soon.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Insurance', path: PATH },
];

/** R8: general, no statistics and no cover claims. */
const HARD = [
  { t: 'Comparing quotes', d: 'Every insurer words its cover differently, so two quotes for the same fleet rarely line up side by side.' },
  { t: 'Paperwork per truck', d: 'Each truck and trailer goes on the schedule with its own details, and the schedule changes whenever your fleet does.' },
  { t: 'Claims and cash flow', d: 'While a claim is open, the repair and the loads you could not carry can still come out of your own pocket.' },
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

      <PhotoHero
        // "A truck in Cape Town" (Franschhoek Pass), by Aaron Jones (https://unsplash.com/@ajonesyyyyy),
        // https://unsplash.com/photos/a-car-driving-down-a-road-with-mountains-in-the-background-bMUV5oK_rP8, Unsplash Licence.
        // R9 regrade: the same crop (the valley, the town and the tanker on the pass), levels stretched, midtones lifted about
        // +0.4 EV and a gentle S-curve, saturation 0.76, slightly cooler. The text sits top left so the tanker stays clear.
        src="/covers/pages/insurance-franschhoek-pass.jpg"
        position="50% 70%"
        align="top"
        eyebrow={<StatusChip>Insurance · coming soon</StatusChip>}
        a="Insurance."
        b="Coming soon."
        lead="Truck cover is hard to compare: long policies, and the exclusions are where it matters. We are building insurance for South African transporters, and what it covers and costs is published, in plain words, before it goes live."
        actions={
          <ButtonLink href="/contact?topic=insurance" cta="notify" loc="hero">
            Get notified
          </ButtonLink>
        }
        place="Franschhoek Pass, Western Cape"
      />

      <section className="sec sec--grey" aria-labelledby="hard-h">
        <div className="wrap">
          <SectionHeader
            id="hard-h"
            a="Why it's hard today."
            b="Three problems."
            line="We're building insurance for South African transporters with these three in mind. What it covers is published before launch."
          />
          <ul className="b-rules list-reset">
            {HARD.map((h) => (
              <li key={h.t} className="reveal">
                <h3>{h.t}</h3>
                <p>{h.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="publish-h">
        <div className="wrap">
          <SectionHeader
            id="publish-h"
            a="What we'll publish."
            b="Before it goes live."
            line="Nothing on this page is live. These four answers come first, in writing, so you can compare them with the cover you have."
          />
          <ol className="b-publish b-publish--grid list-reset">
            {PUBLISH.map((p) => (
              <li key={p.t} className="reveal">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Closing
        page="insurance"
        photo="franschhoek-valley"
        variant="notify"
        notifyHref="/contact?topic=insurance"
        a="Be first to know."
        b="When it opens."
        line="Leave your details and we will tell you when what it covers and costs is published. Quoting, invoicing and debtors are live today."
      />
    </>
  );
}
