import { SRC } from '../sources';
import { A, type Post } from '../types';

const post: Post = {
  slug: 'hidden-profit-leaks-south-african-fleet-operators',
  h1: { a: 'Six places the money leaks.', b: 'Between the load and the bank.' },
  title: 'Six places transport businesses lose money between the load and the bank',
  seoTitle: 'Where transport businesses lose money: six leaks',
  description:
    'Quotes that miss a cost, late invoices, missing PODs, unchased debtors, VAT on unpaid invoices and diesel rises not passed on. How to spot each.',
  summary: 'Missed costs, late invoices, missing PODs, unchased debtors, VAT on unpaid invoices and diesel increases not passed on.',
  category: 'Getting paid',
  keyword: 'transport business losing money',
  published: '2026-01-27',
  reviewed: '2026-10-01',
  readingMinutes: 6,
  related: { href: '/product/debtors', label: 'How TruckWys shows who owes you' },
  faq: [
    {
      q: 'Which money leak should I fix first?',
      a: 'Start with the one you can measure from records you already have: the days between delivery and invoice, and the list of debtors over 60 days.',
    },
    {
      q: 'Do I pay VAT on invoices my customer has not paid?',
      a: 'On the invoice basis, which applies to companies, output VAT is due for the period in which you issue the invoice, whether or not the customer has paid. Check your own case with a tax practitioner.',
    },
    {
      q: 'Can I charge interest on late payment?',
      a: 'If your contract allows it, yes, at the agreed rate. Where no rate is agreed, the prescribed rate of interest applies. It is the repo rate plus 3,5% a year, so it changes when the repo rate does.',
    },
  ],
  sources: [SRC.sanralPoster, SRC.dmprSep, SRC.prescribedAct, SRC.repoSep, SRC.vat404],
  body: (
    <>
      <p>
        Most transport businesses that struggle for cash are not short of work. The money leaks out between the price and the payment.
        Here are six places to look, and how to check each one in your own numbers.
      </p>

      <h2>1. A quote that misses a cost</h2>
      <p>
        A forgotten toll plaza, a return leg nobody priced, a driver allowance left off. Each one comes straight out of the margin. On
        the N3 alone, a class 4 truck passes five mainline plazas between Johannesburg and Durban, R&nbsp;1&nbsp;274 in tolls at the 2026
        tariffs (<A s={SRC.sanralPoster}>SANRAL</A>).
      </p>
      <p>
        <strong>Check:</strong> take your last ten quotes and rebuild them line by line. Our{' '}
        <a href="/blog/how-to-quote-freight-rates-south-africa-ai">quoting guide</a> has the build-up.
      </p>
      <p>
        <strong>Worked check:</strong> the most expensive miss is usually the way home. In the quoting guide&apos;s example, an interlink
        from Johannesburg to Pietermaritzburg costs R&nbsp;14&nbsp;071,53 for the loaded leg and R&nbsp;26&nbsp;115,10 for the round
        trip. Quote R&nbsp;16&nbsp;000 as if there were a backload when there is none, and the load loses R&nbsp;10&nbsp;115,10 instead of
        making R&nbsp;1&nbsp;928,47. Those are example inputs, not benchmarks, but the shape holds for any lane.
      </p>

      <h2>2. Diesel went up, the rate did not</h2>
      <p>
        On 2 September 2026, 50 ppm diesel went up by 314,90 cents a litre (<A s={SRC.dmprSep}>DMPR</A>). For a truck using 46 litres per
        100 km, that is about R&nbsp;1,45 more on every kilometre, from one Wednesday to the next. A rate agreed in August no longer covers
        the same costs.
      </p>
      <p>
        <strong>Check:</strong> for each regular customer, when was the rate last changed, and what was diesel then?
      </p>
      <p>
        <strong>Worked check:</strong> over a month it adds up quickly. With example inputs of one truck running 12&nbsp;000 km in
        September at 46 litres per 100 km, the September increase alone costs:
      </p>
      <div className="b-calc">
        <p>12&nbsp;000 km × 0,46 L/km × R&nbsp;3,149/L = <strong>R&nbsp;17&nbsp;382,48 for the month</strong></p>
      </div>
      <p>
        That comes out of margin on every load priced at the August rate. A fuel clause that moves the diesel portion of the rate with the
        monthly price closes this leak; our <a href="/blog/fuel-cost-management-sa-fleets-strategies">diesel guide</a> shows how to work
        one out.
      </p>

      <h2>3. The invoice is raised days after delivery</h2>
      <p>
        Payment terms usually start from the invoice date, not the delivery date. Every day the paperwork sits in the cab or on a desk
        is a day added to how long you wait for your money.
      </p>
      <p>
        <strong>Check:</strong> for last month&apos;s loads, compare the delivery date with the invoice date. The gap is time you are
        financing your customer for free.
      </p>
      <table>
        <caption>Worked check: delivery-to-invoice gap (example inputs)</caption>
        <thead>
          <tr>
            <th scope="col">Load</th>
            <th scope="col">Delivered</th>
            <th scope="col">Invoiced</th>
            <th scope="col">Gap, days</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Load 1</td><td>1 Sep</td><td>1 Sep</td><td>0</td></tr>
          <tr><td>Load 2</td><td>3 Sep</td><td>8 Sep</td><td>5</td></tr>
          <tr><td>Load 3</td><td>9 Sep</td><td>16 Sep</td><td>7</td></tr>
          <tr><td>Load 4</td><td>17 Sep</td><td>21 Sep</td><td>4</td></tr>
          <tr><td>Load 5</td><td>25 Sep</td><td>7 Oct</td><td>12</td></tr>
          <tr><th scope="row">Average gap</th><td></td><td></td><td>5,6</td></tr>
        </tbody>
      </table>
      <p>
        If you invoice about R&nbsp;600&nbsp;000 a month (example input), an average gap of 5,6 days means roughly R&nbsp;112&nbsp;000 of
        work is always waiting to be invoiced (R&nbsp;600&nbsp;000 × 5,6 ÷ 30). Load 5 is the dangerous one: it missed the September
        statement. Our guide to <a href="/blog/proof-of-delivery-invoice-on-delivery">invoicing on delivery</a> shows what that costs on
        statement terms, and a same-day routine to close the gap.
      </p>

      <h2>4. No proof of delivery, no payment</h2>
      <p>
        Many customers will not pay an invoice without the signed POD. If the POD is in a driver&apos;s cab or a WhatsApp chat, the invoice
        waits.
      </p>
      <p>
        <strong>Check:</strong> of your overdue invoices, how many have their POD filed with them? For each one without, ask: is the POD
        missing, unsigned, or showing a short nobody has resolved? A disputed line can hold up the whole invoice, so settle it with a
        credit note rather than leaving the full amount unpaid.
      </p>

      <h2>5. Debtors nobody chased</h2>
      <p>
        An invoice nobody follows up tends to be paid last. Look at your debtors by age: current, 30, 60 and 90 days. Anything past
        60 days needs a call, not another statement. If your contracts allow interest on late payment, know the rate you can claim; where
        no rate is agreed, the prescribed rate of interest applies: the repo rate plus 3,5% a year (
        <A s={SRC.prescribedAct}>Prescribed Rate of Interest Act</A>). With the repo rate at 7,25% from 25 September 2026 (
        <A s={SRC.repoSep}>SARB</A>), that is 10,75% a year from 1 November 2026. The rate that applies to a debt is the one in force
        when interest starts to run, usually the due date, so note the rate on that date.
      </p>
      <p>
        <strong>Worked check:</strong> on example inputs of R&nbsp;50&nbsp;000 paid 60 days late, interest at 10,75% a year is
        R&nbsp;50&nbsp;000 × 10,75% × 60 ÷ 365 = R&nbsp;883,56. Small next to the R&nbsp;50&nbsp;000 itself: the real cost of an unchased
        debtor is the risk that it is never paid.
      </p>
      <p>
        <strong>Check:</strong> which customers are over 60 days, and when did someone last contact each one? See{' '}
        <a href="/product/debtors">how TruckWys shows debtors by age</a>.
      </p>

      <h2>6. VAT on money you have not received</h2>
      <p>
        On the invoice basis, which applies to companies, output VAT is due for the period in which you issue the invoice, whether or not
        the customer has paid (<A s={SRC.vat404}>SARS VAT 404</A>). Sole proprietors, and partnerships made up only of natural persons,
        whose taxable supplies have not exceeded R&nbsp;2,5 million in the previous 12 months (and are not likely to in the next 12) can
        apply to SARS to account on the payments basis instead, and then pay VAT only as customers pay (
        <A s={SRC.vat404}>SARS VAT 404</A>, chapter 4). Check the current limit and your own case with a tax practitioner.
      </p>
      <p>
        <strong>Worked check:</strong> an invoice of R&nbsp;115&nbsp;000 including VAT (example input) carries R&nbsp;15&nbsp;000 of
        output VAT (R&nbsp;115&nbsp;000 × 15 ÷ 115). If it is issued in the period and still unpaid when the return is due, a company pays
        that R&nbsp;15&nbsp;000 to SARS from its own cash.
      </p>
      <p>
        <strong>Check:</strong> before each VAT return, look at how much of the output VAT relates to invoices still unpaid, and plan for
        it.
      </p>

      <h2>Where to start</h2>
      <p>
        Start with the leak you can measure quickest. For most businesses that is the gap between delivery and invoice, and the list of
        debtors over 60 days. Both come from records you already have. For the wider picture, read{' '}
        <a href="/blog/cash-flow-transport-business-south-africa">cash flow for transport businesses</a>.
      </p>
      <ol>
        <li>This week: list last month&apos;s loads with their delivery and invoice dates, and work out your average gap.</li>
        <li>Next week: pull your debtors by age and call every customer over 60 days.</li>
        <li>This month: rebuild your three biggest customers&apos; rates from this month&apos;s diesel and tolls, and see which ones still cover their costs.</li>
        <li>Before the next VAT return: total the output VAT on invoices that are still unpaid, so the payment to SARS is not a surprise.</li>
      </ol>
      <p>
        None of this needs new software. It needs an hour, your invoice list and your bank statement. Once you can see the leaks, it
        becomes clear which one is worth fixing first.
      </p>
    </>
  ),
};

export default post;
