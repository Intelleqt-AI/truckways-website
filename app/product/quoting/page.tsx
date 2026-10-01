import '../../../components/pages/pages-b.css';
import { SectionHeader } from '../../../components/ui';
import { Closing } from '../../../components/Blocks';
import Faq, { type QA } from '../../../components/Faq';
import { CostBreakdown, N3Tolls } from '../../../components/fragments/Quote';
import { FeatureHero, Stage, Answers, FeatureRow, Split, DL, NextStep } from '../../../components/pages/blocks';
import { QuoteForm, FuelLine } from '../../../components/pages/frags';
import { pageMeta } from '../../../components/pages/meta';
import { FACTS } from '../../../lib/facts';
import { jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../../lib/schema';

const PATH = '/product/quoting';
export const metadata = pageMeta({
  path: PATH,
  title: 'Transport quote software for South Africa',
  description: `Price every load from this month's FIASA diesel, ${FACTS.tollPlazas} SANRAL toll plazas by class, border fees and your rates, with a warning when the margin is too thin.`,
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
        a="Quote from real costs,"
        b="not last year's rate."
        lead="Pick the customer, truck and route. TruckWys adds up diesel, tolls, allowance and your rate, and warns you when the margin on a quote is too thin to send."
        frame={
          <Stage label="The TruckWys quote builder for a Johannesburg to Durban load: the typed description, the filled form and the cost breakdown with fuel, tolls, driver allowance and base rate adding up to the quote price.">
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
          <SectionHeader id="answers-h" a="What it answers." b="Before the customer sees a number." />
          <Answers
            items={[
              { q: 'What does this load cost me?', a: 'Diesel, tolls, cross-border fees and driver allowance, line by line, for the truck you pick.' },
              { q: 'Am I charging enough?', a: 'An "At risk" or "Caution" flag when the margin is thin, with the increase that gets it to 10% where it can work one out.' },
              { q: 'Will they accept?', a: 'Your customer accepts or declines from a link, and the quote moves to Accepted or Declined on your board.' },
            ]}
          />
        </div>
      </section>

      <section className="sec sec--grey" aria-labelledby="detail-h">
        <div className="wrap">
          <SectionHeader
            id="detail-h"
            a="Built from South African costs."
            b="Traceable, line by line."
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
            <FeatureRow
              flip
              title="Every toll plaza on the route"
              body={`${FACTS.tollPlazas} SANRAL mainline plazas on the N1, N2, N3, N4, N17 and R30, at the tariffs effective 1 March 2026, by class 1 to 4. Tolls go in excl. VAT, because you claim the VAT back.`}
              points={['Plaza by plaza, named on the quote', 'Class from your vehicle type, so a superlink pays class 4', 'Gauteng e-tolls left out: they ended in April 2024']}
            >
              <Stage label="Toll plazas on the N3 from Johannesburg to Durban for a class 4 vehicle: De Hoek, Wilge, Tugela, Mooi and Mariannhill, with each tariff and the total excluding VAT.">
                <N3Tolls />
              </Stage>
            </FeatureRow>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="spec-h">
        <div className="wrap">
          <Split id="spec-h" a="The specifics." b="Exactly what a quote does." line="Everything on this list is in the product today.">
            <DL
              rows={[
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

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Questions about quoting">
        <div className="wrap">
          <Faq a="Questions" b="about quoting." items={FAQ} />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Next step">
        <div className="wrap">
          <NextStep href="/product/invoicing" title="Invoicing" line="The accepted quote becomes the load, and the load becomes the invoice." />
        </div>
      </section>

      <Closing page="quoting" />
    </>
  );
}
