import '../../../components/pages/pages-b.css';
import { SectionHeader } from '../../../components/ui';
import { Closing } from '../../../components/Blocks';
import Faq, { type QA } from '../../../components/Faq';
import { FeatureHero, Stage, Answers, FeatureRow, Split, DL, NextStep } from '../../../components/pages/blocks';
import { ReportsIndex, ProfitLoss, LanesScatter, Expenses, VatReport } from '../../../components/pages/frags';
import { SigPnl } from '../../../components/pages/signature';
import { LANES, REVENUE_VS_COSTS } from '../../../content/demo-data';
import { VAT_ROWS } from '../../../components/pages/sample';
import { rand, num } from '../../../lib/format';
import { pageMeta } from '../../../components/pages/meta';
import { FACTS } from '../../../lib/facts';
import { jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../../lib/schema';

const SEP = REVENUE_VS_COSTS[REVENUE_VS_COSTS.length - 1];
const SEP_MARGIN = ((SEP.revenue - SEP.costs) / SEP.revenue) * 100; // 18,4%

const PATH = '/product/reports';
export const metadata = pageMeta({
  path: PATH,
  title: 'Transport VAT reports, P&L and margin by lane',
  description:
    'Nine reports reconciled to your invoices, payments and expenses: profit and loss, debtors age, revenue per km by lane and output VAT. CSV export and print.',
  og: 'reports',
  ogAlt: 'TruckWys reports: know what every lane really makes.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: '/product' },
  { name: 'Reports', path: PATH },
];

const FAQ: QA[] = [
  {
    id: 'reports-accounting',
    q: 'Does this replace my accounting software?',
    a: 'No. TruckWys covers what happens before the books: the quote, the invoice, the payment and the margin. Your accountant keeps the books, and every report exports to CSV for them.',
  },
  {
    id: 'reports-export',
    q: 'Can I export the reports?',
    a: 'Yes. Every report has Export CSV and Print.',
  },
  {
    id: 'reports-truck',
    q: 'Is margin per truck shown?',
    a: 'Revenue per truck, yes. Margin per truck depends on costs being captured against the vehicle, so it is only as complete as your expenses.',
  },
];

export default function ReportsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS), faqSchema(FAQ)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="reports"
        eyebrow="Reports and insights"
        a="Know what every lane"
        b="really makes."
        lead="Profit, margin and cash from your own invoices, payments and approved expenses, so every report agrees with the others."
        frame={
          <Stage label="The reports library: nine reports, each with the question it answers, a 12-month figure and the latest entry.">
            <ReportsIndex />
          </Stage>
        }
      />

      <section className="sec" aria-labelledby="answers-h">
        <div className="wrap">
          <SectionHeader id="answers-h" a="What it answers." b="Without waiting for year end." />
          <Answers
            items={[
              { q: 'Did we make money this month?', fig: `${num(SEP_MARGIN, 1)}%`, note: 'net margin, September 2026', a: 'Profit and loss by month, with gross and net margin, on a cash basis.' },
              { q: 'Which lanes pay?', fig: `${rand(LANES[0].perKm, { cents: true })}/km`, note: `${LANES[0].lane}, the best lane`, a: 'Revenue per kilometre by lane against your fleet average, with how many trips each lane has.' },
              { q: 'How much VAT did we charge?', fig: rand(VAT_ROWS[2].vat), note: `output VAT, ${VAT_ROWS[2].m}`, a: 'Output VAT by month, on the invoice or payments basis, for your VAT return.' },
            ]}
          />
        </div>
      </section>

      <SigPnl />

      <section className="sec sec--grey" aria-labelledby="detail-h">
        <div className="wrap">
          <SectionHeader
            id="detail-h"
            a={`${FACTS.reports} reports.`}
            b="One set of numbers."
            line="Every report is built from the same invoices, payments and approved expenses, and names its basis and period."
          />
          <div className="b-rows">
            <FeatureRow
              title="Profit and loss, month by month"
              body="Revenue, direct costs, gross profit, overheads and net profit, for this month, a quarter, a year or any dates you choose."
              points={['Cash basis, excl. VAT', 'Only approved expenses count as costs', 'Export CSV or print']}
            >
              <Stage label="Profit and loss for three months: sales, direct costs, gross profit and margin, overheads, net profit and net margin, with a total column.">
                <ProfitLoss />
              </Stage>
            </FeatureRow>
            <FeatureRow
              flip
              title="Insights that answer a question"
              body="Profit this period, net margin by month, invoice to cash, who pays late, revenue by truck and revenue per km by lane. Findings are ranked by the rand value at stake."
              points={['Lanes with fewer than three trips are marked, not ranked', 'Show any chart as a table', 'Rules and sums, not a model']}
            >
              <Stage label="Insights, lanes tab: revenue per kilometre against kilometres per trip for each lane, with the fleet average line.">
                <LanesScatter />
              </Stage>
            </FeatureRow>
            <FeatureRow
              textOnPhone
              title="Expenses in the same place"
              body="Add an expense, attach it to a truck, approve it, and it flows into profit and loss and the expense report. Pending and rejected expenses stay out of profit."
              points={['Fuel, tolls, maintenance, driver cost, insurance, overhead and other', 'Pending, Approved and Rejected', 'Spend by category and by month']}
            >
              <Stage label="Expenses: spent in September, expenses to approve, spend by category, and expense lines with category, vehicle, status and amount.">
                <Expenses />
              </Stage>
            </FeatureRow>
            <FeatureRow
              flip
              textOnPhone
              title="A VAT report that checks itself"
              body="Output VAT by month, on the invoice or payments basis. It checks that excl. VAT plus output VAT equals the total incl. VAT. Input VAT is not captured on expenses yet, so it shows what you charged, not what you owe."
              points={['Invoice basis or payments basis', 'Invoice count per month', 'Export CSV for your VAT return']}
            >
              <Stage label="VAT report on the invoice basis for three months: invoices, amount excluding VAT, output VAT and amount including VAT, with a check line.">
                <VatReport />
              </Stage>
            </FeatureRow>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="spec-h">
        <div className="wrap">
          <Split id="spec-h" a="The specifics." b="Exactly what the reports do." line="Everything on this list is in the product today.">
            <DL
              rows={[
                ['Reports', FACTS.reportNames.join(', ')],
                ['Periods', 'This month, last month, 3, 6 or 12 months, year to date or custom dates.'],
                ['Basis', 'Every report names its basis and period. P&L on a cash basis; VAT on the invoice or payments basis.'],
                ['Export', 'CSV and print on every report.'],
                ['Insights', 'Profit this period, net margin by month, invoice to cash, who pays late, revenue by truck and revenue per km by lane.'],
              ]}
            />
          </Split>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Questions about reports">
        <div className="wrap">
          <Faq a="Questions" b="about reports." items={FAQ} />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Next step">
        <div className="wrap">
          <NextStep href="/integrations" title="Integrations" line="Connect your tracking, import your lists and let your TMS send deliveries." />
        </div>
      </section>

      <Closing page="reports" />
    </>
  );
}
