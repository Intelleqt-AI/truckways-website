import { SRC } from '../sources';
import { A, type Post } from '../types';

const post: Post = {
  slug: 'cash-flow-transport-business-south-africa',
  h1: { a: 'Cash flow for transport businesses.', b: 'How to get paid faster.' },
  title: 'Cash flow for South African transport businesses: how to get paid faster',
  seoTitle: 'Cash flow for transport companies in SA',
  description:
    'Why cash runs short in trucking, a worked cash-gap example, and the steps that get transport companies in South Africa paid faster, from terms to debtors.',
  summary:
    'Why a busy transport business can still run out of cash, how to measure the gap, and the steps that shorten it, in the order you control them.',
  category: 'Getting paid',
  keyword: 'cash flow for transport companies South Africa',
  published: '2026-10-01',
  reviewed: '2026-10-01',
  readingMinutes: 5,
  related: { href: '/product/invoicing', label: 'How TruckWys raises the invoice on delivery' },
  sources: [SRC.vat404, SRC.prescribedAct, SRC.repoMay, SRC.repoSep],
  faq: [
    {
      q: 'Why do profitable transport companies run out of cash?',
      a: 'Because the costs of a load, mainly diesel, tolls and wages, are paid before or on the day of the trip, while customers pay weeks later. The busier you get, the more cash is tied up in that gap.',
    },
    {
      q: 'What interest can I charge a customer who pays late?',
      a: 'Whatever rate your signed terms set. Where no rate was agreed, the Prescribed Rate of Interest Act applies the repo rate plus 3,5 percentage points. Check your own case with your attorney.',
    },
    {
      q: 'Do I pay VAT on invoices my customer has not paid yet?',
      a: 'If you account on the invoice basis, which applies to companies, yes: output VAT is due for the period in which you issue the invoice, paid or not. Check your own case with a tax practitioner.',
    },
    {
      q: 'How often should I chase debtors?',
      a: 'Look at your debtors by age every week, send a reminder on each invoice as it falls due, and phone anyone over 60 days rather than sending another statement.',
    },
  ],
  body: (
    <>
      <p>
        A transport business can be fully booked, profitable on paper, and still short of cash at month end. The reason is timing: the
        money for a load goes out before the load leaves, and comes back weeks after it lands.
      </p>
      <p>
        This guide shows how to measure that gap in your own business and the steps that shorten it, starting with the ones you control
        completely and ending with finance. It is general information, not tax, legal or financial advice.
      </p>

      <h2>Why trucking cash flow is tight</h2>
      <p>
        Most of a load&apos;s cost is paid up front or on the day: diesel at the pump or on a fuel card, tolls at the plaza or on the
        e-tag account, driver allowances during the trip, and wages and vehicle instalments on fixed dates. The customer, meanwhile, often
        pays on 30, 60 or more days, sometimes counted from the end of the month or from when the invoice and POD reach their accounts
        team.
      </p>
      <p>
        So the more work you take on, the more cash you need to carry it. Growth eats cash before it makes any.
      </p>

      <h2>Measure your cash gap</h2>
      <p>
        A simple way to see the size of the problem is to multiply what you spend per day by the number of days between paying the costs
        and getting paid. The figures below are example inputs, not benchmarks.
      </p>
      <table>
        <caption>Worked example: cash tied up in the gap (example inputs)</caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Before</th>
            <th scope="col">After</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Running costs per day (diesel, tolls, wages, instalments)</td>
            <td>R&nbsp;8&nbsp;000</td>
            <td>R&nbsp;8&nbsp;000</td>
          </tr>
          <tr>
            <td>Days from delivery to invoice</td>
            <td>3</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Payment terms, days from invoice</td>
            <td>60</td>
            <td>45</td>
          </tr>
          <tr>
            <td>Days in the gap</td>
            <td>63</td>
            <td>45</td>
          </tr>
          <tr>
            <td>Cash tied up</td>
            <td>R&nbsp;504&nbsp;000</td>
            <td>R&nbsp;360&nbsp;000</td>
          </tr>
        </tbody>
      </table>
      <div className="b-calc">
        <p>R&nbsp;8&nbsp;000 × 63 days = R&nbsp;504&nbsp;000</p>
        <p>
          R&nbsp;8&nbsp;000 × 45 days = R&nbsp;360&nbsp;000, so <strong>R&nbsp;144&nbsp;000 less</strong> to carry
        </p>
      </div>
      <p>
        In this example, invoicing on the day of delivery and agreeing 45-day terms frees up R&nbsp;144&nbsp;000 without borrowing a
        cent. Run it with your own numbers: your daily costs from last month&apos;s bank statement, and your real average days to payment
        from your debtors records, not the terms on paper.
      </p>

      <h2>The levers, in order of control</h2>
      <h3>1. Price with a fuel clause</h3>
      <p>
        Diesel changes every month. If your rate does not move with it, a price rise comes straight out of your cash. Agree a fuel clause
        that adjusts the rate when diesel moves past an agreed level. Our{' '}
        <a href="/blog/fuel-cost-management-sa-fleets-strategies">diesel price guide</a> explains how.
      </p>

      <h3>2. Agree payment terms in writing</h3>
      <p>
        Before the first load, put the terms on a signed credit application or rate agreement: days to pay, counted from when, what you
        need on the invoice, and the interest rate on late payment. Terms you can show in writing are terms you can enforce.
      </p>

      <h3>3. Invoice on delivery, with the POD attached</h3>
      <p>
        The payment clock usually starts from the invoice, not the delivery. Raise the invoice the day the load is delivered and attach
        the signed POD, so the customer has no reason to send it back. Our{' '}
        <a href="/blog/proof-of-delivery-invoice-on-delivery">proof of delivery guide</a> covers what the POD should show.
      </p>

      <h3>4. Get the tax invoice right first time</h3>
      <p>
        A rejected invoice restarts the clock. If you are a VAT vendor, an invoice over R&nbsp;5&nbsp;000 including VAT must be a full tax
        invoice: among other things, your and the customer&apos;s name, address and VAT number, a serial number and date, and a proper
        description of the service (<A s={SRC.vat404}>SARS VAT 404</A>). Add the customer&apos;s order or load reference, which their
        accounts team will look for.
      </p>

      <h3>5. Run a weekly debtors routine by age</h3>
      <p>Once a week, list every unpaid invoice by age and act on each group:</p>
      <ul>
        <li>
          <strong>Current:</strong> check each invoice has its POD and has reached the right person.
        </li>
        <li>
          <strong>30 days:</strong> a polite reminder on each invoice as it falls due.
        </li>
        <li>
          <strong>60 days:</strong> a firm reminder and a phone call. Ask when it will be paid and write the answer down.
        </li>
        <li>
          <strong>90 days:</strong> a final notice, hold new loads for that customer, and talk to your attorney about recovery.
        </li>
      </ul>

      <h3>6. Remind per invoice, then send statements</h3>
      <p>
        A reminder that names one invoice, its amount, its POD and its due date is easier to act on than a general request to pay. Let
        the tone step up: gentle, then firm, then final. Send a statement at month end so the customer&apos;s records match yours.
      </p>

      <h3>7. Check new customers and set a limit</h3>
      <p>
        Before you give a new customer credit, ask for a signed credit application, trade references and a credit bureau check. Set a
        credit limit and stick to it. A deposit or payment before delivery is fair for once-off customers.
      </p>

      <h3>8. Charge interest on late payment</h3>
      <p>
        Put an interest rate in your terms. Where a debt bears interest and no rate is agreed, the Prescribed Rate of Interest Act sets it
        at the repo rate plus 3,5% a year, and a new rate applies from the first day of the second month after the repo rate changes (
        <A s={SRC.prescribedAct}>Prescribed Rate of Interest Act, as amended</A>). The Reserve Bank raised the repo rate to 7% from 29 May 2026 (
        <A s={SRC.repoMay}>SAnews</A>), which gives 10,5% a year from 1 July 2026. It raised the repo rate again to 7,25% from 25 September (
        <A s={SRC.repoSep}>SARB</A>), which by the same formula gives 10,75% from 1 November 2026.
      </p>
      <div className="b-calc">
        <p>
          Example: R&nbsp;115&nbsp;000 × 10,5% × 30 ÷ 365 = <strong>about R&nbsp;992</strong> for an invoice paid 30 days late
        </p>
      </div>
      <p>
        You may choose not to claim it from a good customer. But saying in writing that you can, changes how quickly some customers pay.
        Check your own terms with your attorney.
      </p>

      <h3>9. Plan for VAT on unpaid invoices</h3>
      <p>
        On the invoice basis, which applies to companies, you account for output VAT in the tax period in which the invoice is issued,
        even if the customer has not paid (<A s={SRC.vat404}>SARS VAT 404</A>). The standard tax period is two months, with the
        return and payment normally due by the 25th of the following month, or the last business day for eFiling. In the example
        above, R&nbsp;300&nbsp;000 of invoices excluding VAT in a month carries R&nbsp;45&nbsp;000 of output VAT, less your input VAT on
        diesel and other costs. Before each return, check how much of it relates to invoices that are still unpaid, and keep the cash
        aside. Check your own case with a tax practitioner.
      </p>

      <h3>10. Finance, last</h3>
      <p>
        If the gap is still too wide, finance can bridge it: an overdraft, invoice discounting, factoring or a customer&apos;s early
        payment scheme. Each has a cost and contract terms worth reading closely. Our{' '}
        <a href="/blog/invoice-factoring-vs-ai-cash-advances-sa-transport">guide to invoice factoring and other options</a> shows how to
        compare the real cost.
      </p>

      <h2>Where TruckWys helps</h2>
      <p>
        TruckWys raises the invoice on delivery with 15% VAT, ready to send with the POD, through{' '}
        <a href="/product/invoicing">invoicing</a>, and shows your debtors by age with a reminder per invoice that you preview and send
        yourself, through <a href="/product/debtors">debtors</a>. Fast Pay is coming soon: an opt-in way to get paid on an invoice before
        the customer pays, through an independent finance provider. TruckWys is not a lender, and rates will be published at launch.
      </p>
    </>
  ),
};

export default post;
