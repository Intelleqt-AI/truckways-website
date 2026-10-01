import '../../../components/pages/pages-b.css';
import { SectionHeader } from '../../../components/ui';
import { Closing } from '../../../components/Blocks';
import Faq, { type QA } from '../../../components/Faq';
import { CopilotPanel } from '../../../components/fragments/Money';
import { CostBreakdown } from '../../../components/fragments/Quote';
import { FeatureHero, Stage, FeatureRow, NextCards } from '../../../components/pages/blocks';
import { QuoteForm } from '../../../components/pages/frags';
import { pageMeta } from '../../../components/pages/meta';
import { FACTS } from '../../../lib/facts';
import { jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../../lib/schema';

const PATH = '/product/ai';
export const metadata = pageMeta({
  path: PATH,
  title: 'AI and Copilot: typed loads and win chance',
  description:
    'Where we use a model and where we don’t. Copilot answers from your own data and drafts records you confirm. Prices, tolls, diesel and VAT are rules.',
  og: 'product',
  ogAlt: 'TruckWys: a model where it helps, rules where the money is.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: '/product' },
  { name: 'AI in TruckWys', path: PATH },
];

/** Where TruckWys does not use a model: each one is a rule or a formula (same input, same answer). */
const RULES = [
  { t: 'Tolls', d: `The SANRAL tariff for each of the ${FACTS.tollPlazas} mainline plazas on the route, at the truck's class, excl. VAT.` },
  { t: 'Diesel', d: "This month's FIASA price, inland or coastal, for the litres the trip needs." },
  { t: 'VAT', d: '15% on the invoice, worked out from the charges. Never estimated.' },
  { t: 'The margin warning', d: 'A "Caution" flag under a 12% margin and "At risk" under 5%, with the increase in rand that gets it back to 10%.' },
  { t: 'Reminders', d: 'Fixed templates in three tones, gentle, firm and final. You send each one after a preview.' },
  { t: 'Payment risk profile', d: 'A formula: how often a customer pays late, how late, and how much they owe you now.' },
];

const FAQ: QA[] = [
  {
    id: 'ai-price',
    q: 'Does a model set my price?',
    a: 'No. The price comes from your costs: diesel, tolls, driver allowance and your rate. A model can read the load you type and estimate your win chance. It does not set the price.',
  },
  {
    id: 'ai-send',
    q: 'Can Copilot send something to a customer?',
    a: 'No. Copilot drafts quotes and customers for you to confirm. Nothing is sent on its own.',
  },
  {
    id: 'ai-data',
    q: 'Is my data used to train the models?',
    a: 'No. The language models come from Anthropic and OpenAI. Under our agreements with them, your data is not used to train their models, and only the data a request needs is sent.',
    rich: (
      <>
        No. The language models come from Anthropic and OpenAI. Under our agreements with them, your data is not used to train their
        models, and only the data a request needs is sent. Section 6 of our{' '}
        <a className="ulink" href="/privacy">
          Privacy Policy
        </a>{' '}
        has the detail.
      </>
    ),
  },
  {
    id: 'ai-win',
    q: 'Why does win chance say it needs more outcomes?',
    a: 'It is trained on your own quotes. Until about 40 of them are marked won or lost, with both wins and losses, it shows how many outcomes it still needs instead of guessing.',
  },
];

export default function AiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS), faqSchema(FAQ)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="ai"
        eyebrow="AI in TruckWys"
        a="Ask your numbers."
        b="You sign off."
        lead="TruckWys uses a model in three places: Copilot, a load you type in plain words, and your win chance. The price, the tolls and the VAT never come from a model."
        frame={
          <Stage photo="n1-midrand" label="Copilot answering who owes the most right now from the company's invoices, with the source and buttons to view the invoice or draft a reminder.">
            <div className="b-aistage">
              <CopilotPanel />
            </div>
          </Stage>
        }
      />

      <section className="sec" aria-labelledby="uses-h">
        <div className="wrap">
          <SectionHeader
            id="uses-h"
            a="Where we use a model."
            b="Three narrow jobs."
            line="Each one saves typing or answers a question. You see its work, and you confirm before anything changes."
          />
          {/* R7: Copilot is the hero's screen; here it is one line, and two rows for the other two jobs. */}
          <div className="b-modelnote b-modelnote--top" id="copilot">
            <p>
              <b>Copilot.</b> Ask about cash, quotes or your fleet in plain words. It answers from your own company&apos;s data, shows where
              the answer came from, and drafts quotes and customers for you to confirm. Nothing is sent on its own.
            </p>
          </div>
          <div className="b-rows">
            <FeatureRow
              id="type-it"
              title="Type a load the way you'd say it"
              body={
                <>
                  &ldquo;28 t palletised floor tiles, City Deep to Prospecton, superlink&rdquo; fills the quote form: customer, weight,
                  collection, delivery, date and vehicle. A language model reads the words. The price still comes from your costs.
                </>
              }
              points={['You check every field before you price', 'Type it, or say it into the microphone']}
            >
              <Stage label="A typed load description, the Fill button, and the fields it filled: customer, collection and delivery.">
                <QuoteForm compact />
              </Stage>
            </FeatureRow>
            <FeatureRow
              flip
              id="win-chance"
              title="Win chance"
              body="After about 40 quote outcomes, with both wins and losses, a trained model estimates your chance of winning at the suggested price. Until then, it shows how many outcomes it still needs."
              points={['Trained on your own won and lost quotes', 'Shown under the price, not in it']}
            >
              <Stage label="A quote's cost breakdown: fuel, tolls, driver allowance, base rate and markup, the quote price, then costs, margin and the win chance at that price.">
                <CostBreakdown />
              </Stage>
            </FeatureRow>
          </div>
        </div>
      </section>

      <section className="sec sec--grey" id="rules" aria-labelledby="rules-h">
        <div className="wrap">
          <SectionHeader
            id="rules-h"
            a="Where it's a rule."
            b="One answer, every time."
            line="Anything that sets a price, a tax or the tone of a reminder is a rule or a formula. You can check each one by hand."
          />
          <ul className="b-rules b-rules--tiles list-reset">
            {RULES.map((r) => (
              <li key={r.t} className="reveal">
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-label="Questions about models in TruckWys">
        <div className="wrap">
          <Faq a="Model" b="questions." items={FAQ} />
        </div>
      </section>

      <NextCards
        next={{ href: '/product/quoting', title: 'Quoting', line: 'How the price is built: diesel, tolls, allowance and your rate, line by line.' }}
        read="how-to-quote-freight-rates-south-africa-ai"
      />

      <Closing page="ai" />
    </>
  );
}
