import '../../../components/pages/pages-b.css';
import { SectionHeader } from '../../../components/ui';
import { Closing } from '../../../components/Blocks';
import Faq, { type QA } from '../../../components/Faq';
import { NeedsYouCard } from '../../../components/fragments/Money';
import { FeatureHero, Stage, Answers, FeatureRow, Split, DL, NextStep } from '../../../components/pages/blocks';
import { DebtorsAge, Statement } from '../../../components/pages/frags';
import { SigAgeing } from '../../../components/pages/signature';
import { KPIS, OVERDUE, OVERDUE_COUNT } from '../../../content/demo-data';
import { rand } from '../../../lib/format';
import { pageMeta } from '../../../components/pages/meta';
import { jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../../lib/schema';

const PATH = '/product/debtors';
export const metadata = pageMeta({
  path: PATH,
  title: 'Debtors management for transport companies',
  description:
    'See who owes you by age, send reminders that get firmer as the days pass, and check how each customer really pays. Built for South African transporters.',
  og: 'debtors',
  ogAlt: 'TruckWys debtors: see who owes you, and chase them from the invoice.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: '/product' },
  { name: 'Debtors', path: PATH },
];

const FAQ: QA[] = [
  {
    id: 'debtors-auto',
    q: 'Do reminders go out automatically?',
    a: 'No. You send each one from the invoice, after a preview. Nothing goes to a customer on its own.',
  },
  {
    id: 'debtors-wording',
    q: 'Can I change the wording?',
    a: 'Not yet. Reminders use fixed templates in three tones, gentle, firm and final, and you see the message before it goes.',
  },
  {
    id: 'debtors-ai',
    q: 'Is the payment risk profile worked out by a model?',
    a: 'No. It is a formula: how often a customer pays late, how late, and how much they owe you now. The same history always gives the same result.',
  },
];

export default function DebtorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS), faqSchema(FAQ)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="debtors"
        eyebrow="Debtors"
        a="See who owes you."
        b="Chase them from the invoice."
        lead="Debtors by age, a statement per customer, and reminders that get firmer as the days pass."
        frame={
          <Stage label="Debtors age analysis by customer for a demo company: the overdue share, the share over 60 days, the average days late and the largest debtor, then each customer's balance split into current, 1 to 30, 31 to 60, 61 to 90 and over 90 days.">
            <DebtorsAge />
          </Stage>
        }
      />

      <section className="sec" aria-labelledby="answers-h">
        <div className="wrap">
          <SectionHeader id="answers-h" a="What it answers." b="Before it is 90 days." />
          <Answers
            items={[
              { q: 'Who owes me, and how late?', fig: rand(KPIS.owed), note: `owed to you, ${rand(KPIS.pastDue)} past due`, a: 'Current, 1 to 30, 31 to 60, 61 to 90 and over 90 days, by customer or by invoice, aged by due date.' },
              { q: 'Who should I chase first?', fig: rand(OVERDUE[0].amount), note: `${OVERDUE[0].number}, ${OVERDUE[0].daysLate} days late`, a: 'Overdue invoices, largest first, with how many days late each one is.' },
              { q: 'Who pays late every time?', fig: String(OVERDUE_COUNT), note: 'invoices past due, across customers', a: "A payment risk profile per customer, worked out from how they have paid you." },
            ]}
          />
        </div>
      </section>

      <SigAgeing />

      <section className="sec sec--grey" aria-labelledby="detail-h">
        <div className="wrap">
          <SectionHeader
            id="detail-h"
            a="Chase without the awkward call."
            b="And without forgetting anyone."
            line="The reminder, the statement and the history sit next to the invoice they are about."
          />
          <div className="b-rows">
            <FeatureRow
              title="Reminders that get firmer"
              body="Send a reminder from any overdue invoice. You see a preview first. The tone moves from gentle to firm to final as the days pass and reminders repeat. Nothing is sent on its own."
              points={['Gentle before the due date', 'Firm once it is overdue, or after one reminder', 'Final after 30 days overdue, or after three reminders']}
            >
              <Stage label="Needs you: overdue invoices, largest first, each with the customer, amount, days late and a Chase button, above the debtors age strip.">
                <NeedsYouCard />
              </Stage>
            </FeatureRow>
            <FeatureRow
              flip
              title="A statement per customer"
              body="Every invoice, payment and running balance for one customer, as at any date. Print it, or export it to CSV and send it."
              points={['Invoices and payments in date order', 'The balance owing at the bottom', 'The same figures as the debtors age report']}
            >
              <Stage label="Customer statement for one customer: invoices and a payment in date order with a running balance, and the balance owing.">
                <Statement />
              </Stage>
            </FeatureRow>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="spec-h">
        <div className="wrap">
          <Split id="spec-h" a="The specifics." b="Exactly what debtors does." line="Everything on this list is in the product today.">
            <DL
              rows={[
                ['Debtors age', 'Current, 1 to 30, 31 to 60, 61 to 90 and over 90 days. Incl. VAT, aged by due date, as at any date.'],
                ['Reminders', 'Sent by you from the invoice, after a preview. Three tones: gentle, firm and final.'],
                ['Statements', 'One customer, every invoice and payment, with a running balance. Print or CSV.'],
                ['Payments', 'Recorded against the invoice, including part payments.'],
                ['Payment risk profile', 'Per customer, from a formula: how often they pay late, how late and how much is outstanding. Not a model.'],
                ['On Home', 'Overdue invoices listed under Needs you, largest first.'],
              ]}
            />
          </Split>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Questions about debtors">
        <div className="wrap">
          <Faq a="Questions" b="about debtors." items={FAQ} />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Next step">
        <div className="wrap">
          <NextStep href="/product/reports" title="Reports" line="Profit, margin by lane and VAT from the same invoices and payments." />
        </div>
      </section>

      <Closing page="debtors" />
    </>
  );
}
