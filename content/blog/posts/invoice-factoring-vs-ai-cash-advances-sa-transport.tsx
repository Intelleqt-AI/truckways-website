import { SRC } from '../sources';
import { A, type Post, type Source } from '../types';

/** Sources only this post cites. Checked 1 Oct 2026. */
const S = {
  deRebusCession: {
    name: 'De Rebus, 25 Apr 2016: the cedent, the cessionary and the moratorium (cession of book debts as security)',
    url: 'https://www.derebus.org.za/cedent-cessionary-moratorium-quo-vadis/',
  },
  mjkCession: {
    name: 'MJK Inc: security cession (in securitatem debiti), notice to the debtor',
    url: 'https://mjkinc.co.za/agreements/security-cession',
  },
} as const satisfies Record<string, Source>;

const post: Post = {
  slug: 'invoice-factoring-vs-ai-cash-advances-sa-transport',
  h1: { a: 'Invoice factoring, explained.', b: 'And the other ways to get paid sooner.' },
  title: 'Invoice factoring and other ways to get paid sooner: a guide for South African transporters',
  seoTitle: 'Invoice factoring in South Africa for hauliers',
  description:
    'Invoice factoring, discounting, single-invoice and supply-chain finance for SA transporters: how fees work, how to compare the cost, and contract traps.',
  summary:
    'The ways a transport business can turn unpaid invoices into cash sooner, how the fees are built, how to work out the real cost, and what to check before you sign.',
  category: 'Getting paid',
  keyword: 'invoice factoring South Africa',
  published: '2026-01-20',
  reviewed: '2026-10-01',
  readingMinutes: 7,
  related: { href: '/product/debtors', label: 'How TruckWys shows who owes you' },
  sources: [S.deRebusCession, S.mjkCession, SRC.vat404],
  faq: [
    {
      q: 'What is the difference between invoice factoring and invoice discounting?',
      a: 'With factoring, the finance provider usually runs your debtors book and your customer is told to pay the provider. With discounting, you keep collecting from your customers yourself and they are normally not told about the facility.',
    },
    {
      q: 'What is recourse factoring?',
      a: 'With recourse, if your customer does not pay, you have to pay the advance back to the finance provider. Non-recourse moves some of that bad-debt risk to the provider, usually for a higher fee and only for customers the provider approves.',
    },
    {
      q: 'Can I factor my invoices if my bank has a cession of my debtors?',
      a: 'Possibly not without the bank agreeing. Many bank facilities take a cession of book debts as security, and the same invoices cannot simply be ceded to a second financier. Ask your bank and your attorney before you sign anything.',
    },
    {
      q: 'Does factoring change when I pay VAT on an invoice?',
      a: 'No. On the invoice basis, output VAT is due for the period in which you issue the invoice, whether the money comes from your customer, a finance provider or nobody yet. Check your own case with a tax practitioner.',
    },
  ],
  body: (
    <>
      <p>
        Your customer pays in 60 days. Your diesel, tolls and wages are paid this week. Invoice finance is one way to close that gap: a
        finance provider pays you most of an invoice now, and you pay for that in fees. It is not the only way, and it is not always the
        cheapest.
      </p>
      <p>
        This guide sets out the main options open to a South African transport business, how the fees are usually built, how to compare
        the real cost, and the contract terms worth reading twice. It is general information, not financial or legal advice: check your
        own case with your accountant and your attorney.
      </p>

      <h2>The options, in plain terms</h2>
      <h3>Invoice factoring (disclosed)</h3>
      <p>
        You sell or cede your invoices to a factor. The factor advances a percentage of each invoice soon after you raise it, collects the
        money from your customer, and pays you the balance less its fees when the customer pays. Your customer is told to pay the factor,
        so the factor effectively runs your debtors book.
      </p>
      <ul>
        <li>
          <strong>Recourse:</strong> if the customer does not pay, you repay the advance. This is the more common form and usually the
          cheaper one.
        </li>
        <li>
          <strong>Non-recourse:</strong> the factor carries some of the risk that an approved customer cannot pay. Read exactly what is
          covered: often it is insolvency of the customer, not a dispute about a damaged or short load.
        </li>
      </ul>

      <h3>Invoice discounting (confidential)</h3>
      <p>
        The same advance against your invoices, but you keep collecting from your customers and they are normally not told. Providers
        usually want to see a well-run debtors process and reliable records before they offer this, because they rely on you to collect.
      </p>

      <h3>Selective or single-invoice finance</h3>
      <p>
        You choose which invoices to fund, one at a time. Useful when one large customer pays slowly and the rest pay on time. Per-invoice
        fees are often higher, but you are not tied into funding your whole book.
      </p>

      <h3>Supply-chain finance (reverse factoring)</h3>
      <p>
        Here the customer sets it up. A large shipper arranges with its bank or a finance provider to pay its approved suppliers early, at
        a cost based on the shipper&apos;s credit rather than yours. If a big customer offers early payment, ask what it costs you per
        invoice and whether joining changes your payment terms.
      </p>

      <h3>Overdraft or revolving credit</h3>
      <p>
        A bank facility you draw on as needed and pay interest on the balance used. It is not tied to individual invoices, so the
        customer never knows. Banks often take security for it, and that can include your debtors (see the cession section below).
      </p>

      <h3>Asset-based facilities</h3>
      <p>
        A facility secured on a mix of assets, such as debtors and vehicles, that can be larger than a debtors-only facility. More
        security means more paperwork and more for the lender to take if things go wrong.
      </p>

      <h3>The levers that cost nothing</h3>
      <ul>
        <li>Shorter payment terms, agreed in writing before the first load.</li>
        <li>An early-payment discount, only if it is cheaper than the finance you would otherwise use.</li>
        <li>A deposit or part-payment up front for new or once-off customers.</li>
        <li>
          Invoicing on delivery, with the proof of delivery attached, so the payment clock starts the day the load lands. Our{' '}
          <a href="/blog/cash-flow-transport-business-south-africa">cash flow guide</a> works through these in order.
        </li>
      </ul>

      <h2>Cession of debtors: the legal piece underneath</h2>
      <p>
        In South Africa, invoice finance and many bank facilities rest on a cession: you transfer your right to collect a debt to someone
        else, outright or as security. Once book debts are ceded to a bank as security, the bank can collect them itself, and only the bank
        may do so until the facility is repaid (<A s={S.deRebusCession}>De Rebus</A>). Until your customer has notice of the cession, a
        payment made to you still settles the debt (<A s={S.mjkCession}>MJK Inc</A>), which is why disclosed factoring tells your customers
        where to pay.
      </p>
      <p>
        <strong>What this means in practice:</strong> if your bank already holds a cession of your book debts, you probably cannot cede the
        same invoices to a factor without the bank agreeing. Ask before you apply, and have your attorney read both agreements.
      </p>

      <h2>How the fees are usually built</h2>
      <p>Providers price differently, so ask for every fee in writing. The usual building blocks are:</p>
      <ul>
        <li>
          <strong>Advance percentage:</strong> the share of the invoice you get up front. The rest, less fees, comes when your customer
          pays.
        </li>
        <li>
          <strong>Discount fee:</strong> a charge for the time the money is out, often quoted per 30 days or as a margin over a reference
          rate, on the amount advanced.
        </li>
        <li>
          <strong>Service or administration fee:</strong> often a percentage of each invoice&apos;s value, for running the ledger and
          collecting.
        </li>
        <li>
          <strong>Other charges:</strong> set-up fees, credit-check fees per customer, minimum monthly fees, and fees for ending the
          contract.
        </li>
      </ul>

      <h2>Work out the real cost: a worked example</h2>
      <p>
        The figures below are example inputs to show the method, not market rates or quotes. Put in the numbers a provider actually
        offers you.
      </p>
      <table>
        <caption>Worked example: one invoice funded through factoring (example inputs)</caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice total incl. VAT</td>
            <td>R&nbsp;115&nbsp;000</td>
          </tr>
          <tr>
            <td>Advance at 80%</td>
            <td>R&nbsp;92&nbsp;000</td>
          </tr>
          <tr>
            <td>Discount fee: 1,5% per 30 days on the advance, customer pays on day 60</td>
            <td>R&nbsp;2&nbsp;760</td>
          </tr>
          <tr>
            <td>Service fee: 1% of the invoice total</td>
            <td>R&nbsp;1&nbsp;150</td>
          </tr>
          <tr>
            <td>Total cost</td>
            <td>R&nbsp;3&nbsp;910</td>
          </tr>
        </tbody>
      </table>
      <p>
        To compare this with an overdraft or a loan, turn it into a yearly rate on the money you actually used. The simple way:
      </p>
      <div className="b-calc">
        <p>R&nbsp;3&nbsp;910 ÷ R&nbsp;92&nbsp;000 = 4,25% for 60 days</p>
        <p>
          4,25% × 365 ÷ 60 = <strong>about 25,9% a year</strong>
        </p>
      </div>
      <p>
        Now compare like with like. On the same example, an overdraft at an example rate of 14% a year on R&nbsp;92&nbsp;000 for 60 days
        costs about R&nbsp;2&nbsp;117 in interest, before any facility fees. Factoring may still be the right choice if you cannot get the
        overdraft, or if the factor&apos;s collection work saves you time. The point is to know the price.
      </p>
      <p>Three things move the result a lot:</p>
      <ul>
        <li>
          <strong>Slow payers.</strong> If the customer pays on day 90, the discount fee in this example rises to R&nbsp;4&nbsp;140 and the
          total to R&nbsp;5&nbsp;290.
        </li>
        <li>
          <strong>Fees on invoices you did not need to fund.</strong> If the service fee applies to your whole book, add it across every
          invoice, not just the ones you drew on.
        </li>
        <li>
          <strong>Minimum fees.</strong> In a quiet month, a minimum monthly charge can make the yearly rate far higher than the headline.
        </li>
      </ul>

      <h2>What your customers will see</h2>
      <p>
        With disclosed factoring, your customers get a notice to pay the provider, and the provider&apos;s collections team may contact
        them. Some customers do not mind. Others read it as a sign of trouble, or have their own rules about paying third parties. Talk to
        your biggest customers first, and ask the provider how it chases: tone, frequency, and whether you can see and approve its
        letters.
      </p>

      <h2>Contract traps to read twice</h2>
      <ul>
        <li>
          <strong>Recourse period:</strong> how many days after the due date before an unpaid invoice comes back to you, and how quickly you
          must repay.
        </li>
        <li>
          <strong>All-debtor assignment:</strong> whether you must cede every invoice to every customer, or can choose.
        </li>
        <li>
          <strong>Minimum volumes and minimum fees:</strong> what you pay if you fund less than agreed.
        </li>
        <li>
          <strong>Concentration limits:</strong> many providers cap how much they will fund against one customer, which matters if one
          shipper is most of your work.
        </li>
        <li>
          <strong>Disputes:</strong> what happens when a customer short-pays for a damaged load or a missing POD. Usually the invoice is
          pulled out of the facility and you repay.
        </li>
        <li>
          <strong>Term and termination:</strong> the notice period, exit fees, and how long the cession stays in place after you leave.
        </li>
        <li>
          <strong>Personal suretyship:</strong> whether you, as owner, sign for the company&apos;s obligations.
        </li>
      </ul>

      <h2>Questions to ask any provider</h2>
      <ol>
        <li>What is the total cost, in rand, on one of my real invoices, paid on day 30, 60 and 90?</li>
        <li>Is it recourse or non-recourse, and what exactly does non-recourse cover?</li>
        <li>Will my customers be told, and how will you contact them?</li>
        <li>Do I have to fund all my invoices, and is there a minimum?</li>
        <li>How quickly is the advance paid after I submit an invoice with its POD?</li>
        <li>How do I leave, what does it cost, and when is the cession released?</li>
      </ol>

      <h2>VAT does not wait for the finance</h2>
      <p>
        A company that is a VAT vendor accounts for VAT on the invoice basis, where output VAT is due for the tax period in which the invoice is
        issued, paid or not (<A s={SRC.vat404}>SARS VAT 404</A>). Finance can help you cover that VAT, but it does not change when it is
        due. Check your own case with a tax practitioner.
      </p>

      <h2>Where TruckWys fits</h2>
      <p>
        Every option above works better with a clean debtors book: invoices raised on delivery, PODs attached, and a clear view of who
        owes what by age. That is what TruckWys{' '}
        <a href="/product/invoicing">invoicing</a> and <a href="/product/debtors">debtors</a> do today. Fast Pay, coming soon, will let you
        choose to get paid on an invoice before the customer pays, through an independent finance provider. It is opt-in, TruckWys is not
        a lender, and rates will be published when it launches. If you are still finding where the money goes before it reaches the bank,
        start with the <a href="/blog/hidden-profit-leaks-south-african-fleet-operators">six common profit leaks</a>.
      </p>
    </>
  ),
};

export default post;
