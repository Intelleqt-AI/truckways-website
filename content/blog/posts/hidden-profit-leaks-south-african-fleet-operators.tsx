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
      q: 'Why is my transport business busy but short of cash?',
      a: 'Usually because money leaks out between the price and the payment: quotes that miss costs, diesel rises not passed on, invoices raised days after delivery, missing PODs, debtors nobody chases and VAT paid on invoices the customer has not paid yet.',
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

      <h2>2. Diesel went up, the rate did not</h2>
      <p>
        On 2 September 2026, 50 ppm diesel went up by 314,90 cents a litre (<A s={SRC.dmprSep}>DMPR</A>). For a truck using 46 litres per
        100 km, that is about R&nbsp;1,45 more on every kilometre, from one Wednesday to the next. A rate agreed in August no longer covers
        the same costs.
      </p>
      <p>
        <strong>Check:</strong> for each regular customer, when was the rate last changed, and what was diesel then?
      </p>

      <h2>3. The invoice is raised days after delivery</h2>
      <p>
        Payment terms usually start from the invoice date, not the delivery date. Every day the paperwork sits in the cab or on a desk
        is a day added to how long you wait for your money.
      </p>
      <p>
        <strong>Check:</strong> for last month&apos;s loads, compare the delivery date with the invoice date. The gap is time you are
        financing your customer for free. Our guide to <a href="/blog/proof-of-delivery-invoice-on-delivery">invoicing on delivery</a> sets
        out a same-day routine.
      </p>

      <h2>4. No proof of delivery, no payment</h2>
      <p>
        Many customers will not pay an invoice without the signed POD. If the POD is in a driver&apos;s cab or a WhatsApp chat, the invoice
        waits.
      </p>
      <p>
        <strong>Check:</strong> of your overdue invoices, how many have their POD filed with them?
      </p>

      <h2>5. Debtors nobody chased</h2>
      <p>
        An invoice nobody follows up tends to be paid last. Look at your debtors by age: current, 30, 60 and 90 days. Anything past
        60 days needs a call, not another statement. If your contracts allow interest on late payment, know the rate you can claim; where
        no rate is agreed, the prescribed rate of interest applies: the repo rate plus 3,5% a year (
        <A s={SRC.prescribedAct}>Prescribed Rate of Interest Act</A>). With the repo rate at 7,25% from 25 September 2026 (
        <A s={SRC.repoSep}>SARB</A>), that is 10,75% a year from 1 November 2026. The rate follows the repo rate, so check it when you
        send a final demand.
      </p>
      <p>
        <strong>Check:</strong> which customers are over 60 days, and when did someone last contact each one? See{' '}
        <a href="/product/debtors">how TruckWys shows debtors by age</a>.
      </p>

      <h2>6. VAT on money you have not received</h2>
      <p>
        On the invoice basis, which applies to companies, output VAT is due for the period in which you issue the invoice, whether or not
        the customer has paid (<A s={SRC.vat404}>SARS VAT 404</A>). A large unpaid invoice can mean paying SARS 15% of it before the
        customer pays you.
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
    </>
  ),
};

export default post;
