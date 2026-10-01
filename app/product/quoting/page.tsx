import '../../../components/pages/pages-b.css';
import { SectionHeader } from '../../../components/ui';
import { Closing } from '../../../components/Blocks';
import Faq, { type QA } from '../../../components/Faq';
import { CostBreakdown } from '../../../components/fragments/Quote';
import { FeatureHero, Stage, Answers, FeatureRow, Split, DL, NextCards, PhotoBand } from '../../../components/pages/blocks';
import { QuoteForm, FuelLine } from '../../../components/pages/frags';
import { SigTolls } from '../../../components/pages/signature';
import { QUOTE, PIPELINE } from '../../../content/demo-data';
import { rand } from '../../../lib/format';
import { pageMeta } from '../../../components/pages/meta';
import { FACTS } from '../../../lib/facts';
import { jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../../lib/schema';

const PATH = '/product/quoting';
export const metadata = pageMeta({
  path: PATH,
  title: 'Transport quote software for South Africa',
  description: `Price every load from this month's FIASA diesel, ${FACTS.tollPlazas} SANRAL toll plazas by class, border fees and your rates, and a Caution flag under a 12% margin.`,
  og: 'quoting',
  ogAlt: "TruckWys quoting: quote from real costs, not last year's rate.",
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: '/product' },
  { name: 'Quoting', path: PATH },
];

const FAQ: QA[] = [
  {
    id: 'quoting-diesel',
    q: 'Where does the diesel price come from?',
    a: "From FIASA's published diesel price, inland or coastal, checked every morning. The official price changes once a month, on the first Wednesday. You can type your own price on any quote.",
  },
  {
    id: 'quoting-etolls',
    q: 'Are Gauteng e-tolls included?',
    a: 'No. Road users stopped paying Gauteng e-tolls on 11 April 2024, so they are left out. Only SANRAL mainline plazas are priced.',
  },
  {
    id: 'quoting-override',
    q: 'Can I change a cost?',
    a: 'Yes. Set your own diesel price, driver allowance and rate per km on any quote. The cost breakdown shows every line, so you can see what changed.',
  },
];

export default function QuotingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS), faqSchema(FAQ)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="quoting"
        eyebrow="Quoting"
        a="Price what it costs,"
        b="not last year's rate."
        lead="Pick the customer, truck and route. TruckWys adds up diesel, tolls, allowance and your rate, and flags a quote under a 12% margin before you send it."
        frame={
          <Stage photo="n1-midrand" label="The TruckWys quote builder for a Johannesburg to Durban load: the typed description, the filled form and the cost breakdown with fuel, tolls, driver allowance and base rate adding up to the quote price.">
            <div className="cq">
              <div className="b-qb">
                <QuoteForm />
                <CostBreakdown />
              </div>
            </div>
          </Stage>
        }
      />

      <section className="sec" aria-labelledby="answers-h">
        <div className="wrap">
          <SectionHeader id="answers-h" a="What it answers." b="Before you send a price." />
          <Answers
            items={[
              { q: 'What does this load cost me?', fig: rand(QUOTE.costs), note: `${QUOTE.from} to ${QUOTE.to}, before your margin`, a: 'Diesel, tolls, cross-border fees and driver allowance, line by line, for the truck you pick.' },
              { q: 'Am I charging enough?', fig: `${QUOTE.marginPct}%`, note: 'margin at the suggested price', a: 'A "Caution" flag under a 12% margin and "At risk" under 5%, with the increase in rand that gets it back to 10%.' },
              { q: 'Will they accept?', fig: `${PIPELINE.winRate}%`, note: 'win rate on your quotes board', a: 'Your customer accepts or declines from a link, and the quote moves to Accepted or Declined on your board.' },
            ]}
          />
        </div>
      </section>

      <SigTolls />

      <section className="sec sec--grey" aria-labelledby="detail-h">
        <div className="wrap">
          <SectionHeader
            id="detail-h"
            a="South African costs."
            b="Traced line by line."
            line="Diesel from FIASA, tolls from the SANRAL tariffs and your own rates. Every line can be traced."
          />
          <div className="b-rows">
            <FeatureRow
              title="Diesel at this month's price"
              body="FIASA's inland or coastal diesel price, times the litres your truck uses over the distance. Checked every morning; the official price changes on the first Wednesday of the month."
              points={['Consumption per vehicle type, adjusted for the load weight', 'Your own price on any quote, if you buy in bulk', 'One way by default; a round trip doubles the distance costs, clearly labelled']}
            >
              <Stage label="The fuel line of a Johannesburg to Durban quote: 570 km at the superlink's consumption gives the litres, times the inland diesel price per litre.">
                <FuelLine />
              </Stage>
            </FeatureRow>
          </div>
        </div>
      </section>

      {/*
        R10: one sharp photo band. "A wide open road in the middle of nowhere" (lone road between fields, South Africa), by Tertia van
        Rensburg (https://unsplash.com/@tertia), https://unsplash.com/photos/a-wide-open-road-in-the-middle-of-nowhere-b87b0Ine748.
        No vehicles, signs, plates or people, so nothing is retouched. Unsplash Licence (https://unsplash.com/license), checked not
        Unsplash+ (premium=false, plus=false); free commercial use, no attribution required. Graded like the site's other bands
        (saturation ~0.62, slightly cooler), darkened only behind the text by the band's scrim. Master: public/bands/quoting-country-road.jpg.
      */}
      <PhotoBand
        id="band-h"
        src="/bands/quoting-country-road.jpg"
        position="50% 62%"
        positionPhone="64% 50%"
        a="Every load, priced."
        b="Before it leaves."
        line="Diesel, tolls, border fees and your rates, added up line by line for the truck you send."
        place="A country road, South Africa"
      />

      <section className="sec" aria-labelledby="spec-h">
        <div className="wrap">
          <Split id="spec-h" a="In the product today." line="Each line below is live now, on the one plan.">
            <DL
              rows={[
                ['Tolls', `${FACTS.tollPlazas} SANRAL mainline plazas on the N1, N2, N3, N4, N17 and R30, by class 1 to 4, at the tariffs effective 1 March 2026, named plaza by plaza. Excl. VAT. Gauteng e-tolls are left out: they ended in April 2024.`],
                ['Driver allowance', 'At your own rates, on its own line. No bargaining council tables are built in.'],
                ['Rate per km', 'A base rate per vehicle type, editable on every quote.'],
                ['Trip', 'One way by default. Switch to round and the distance costs double, labelled on the quote.'],
                ['Cross-border', 'Border, permit and foreign toll fees for Botswana, Namibia, Lesotho, Eswatini and Mozambique, on their own line. Switch cross-border work on in your company settings.'],
                ['Valid until', 'A validity date on every quote.'],
                ['Your customer', 'A link to accept or decline, shared by copy or WhatsApp, and a PDF with your logo and details.'],
                ['Typed quotes', 'Type or say the load in plain words and the form fills. A language model reads the words; the price comes from your costs.'],
                ['Win chance', 'After about 40 quote outcomes, with both wins and losses, a trained model estimates your chance of winning at the suggested price.'],
              ]}
            />
          </Split>
        </div>
      </section>

      <section className="sec b-faqsec" aria-label="Questions about quoting">
        <div className="wrap">
          <Faq a="Quoting" b="questions." items={FAQ} />
        </div>
      </section>

      <NextCards
        next={{ href: '/product/invoicing', title: 'Invoicing', line: 'The accepted quote becomes the load, and the load becomes the invoice.' }}
        read="how-to-quote-freight-rates-south-africa-ai"
      />

      <Closing page="quoting" />
    </>
  );
}
