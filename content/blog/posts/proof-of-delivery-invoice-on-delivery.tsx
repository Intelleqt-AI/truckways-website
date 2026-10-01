import { SRC } from '../sources';
import { A, type Post, type Source } from '../types';

/** Sources only this post cites. Checked 1 Oct 2026. */
const S = {
  sarsInvoices: { name: 'SARS: tax invoices (full and abridged, 21 days)', url: 'https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/' },
  ectAct: {
    name: 'Electronic Communications and Transactions Act 25 of 2002, sections 11 to 15 (Government Gazette 23708)',
    url: 'https://www.gov.za/sites/default/files/gcis_document/201409/a25-02.pdf',
  },
} as const satisfies Record<string, Source>;

const post: Post = {
  slug: 'proof-of-delivery-invoice-on-delivery',
  h1: { a: 'Proof of delivery, invoice the same day.', b: 'Every day the paperwork waits, you wait.' },
  title: 'Proof of delivery and invoicing on delivery: a guide for South African transporters',
  seoTitle: 'Proof of delivery: invoice the day you deliver',
  description:
    'What a proof of delivery should show, what SARS requires on a tax invoice, paper vs electronic POD, short deliveries, and a same-day invoicing routine.',
  summary:
    'What a good POD shows, what a valid tax invoice must contain, how to handle shorts and disputes, and a routine that gets the invoice raised on the day the load delivers.',
  category: 'Getting paid',
  keyword: 'proof of delivery invoice on delivery',
  published: '2026-10-01',
  reviewed: '2026-10-01',
  readingMinutes: 7,
  related: { href: '/product/invoicing', label: 'How TruckWys raises the invoice on delivery' },
  sources: [SRC.vat404, S.sarsInvoices, S.ectAct],
  faq: [
    {
      q: 'Can I invoice before I have the signed proof of delivery?',
      a: 'You can, but many customers will not pay an invoice without the signed POD, so it usually sits unpaid. Get the POD to the office on the day of delivery and invoice with it attached.',
    },
    {
      q: 'Is an electronic proof of delivery legally valid in South Africa?',
      a: 'The Electronic Communications and Transactions Act says information is not without legal force merely because it is a data message, and that data messages may be admitted in evidence. Agree with each customer what form of POD they accept, and check your own case with your attorney.',
    },
    {
      q: 'Do I need a full tax invoice for a transport load?',
      a: 'SARS requires a full tax invoice when the price is more than R 5 000, which covers most loads. It must show your and the customer’s name, address and VAT number, a serial number and date, a description, quantity, and the value and VAT.',
    },
    {
      q: 'The customer says the delivery was short. Do I change the invoice?',
      a: 'No. Once a tax invoice is issued, you may not issue a second one for the same supply. If you agree to reduce your charge, issue a credit note that refers to the original invoice.',
    },
  ],
  body: (
    <>
      <p>
        In transport, the proof of delivery (POD) is what turns a finished load into money. Most customers will not pay without it, and
        most payment terms only start counting once you have invoiced. So the day the load delivers is the day the POD should reach the
        office and the invoice should be raised.
      </p>
      <p>
        Below: what a good POD shows, paper versus electronic, what a tax invoice must contain, how to handle shorts, and a same-day
        routine.
      </p>

      <h2>Why the day of delivery matters</h2>
      <p>
        Payment terms usually run from the invoice date (&quot;30 days from invoice&quot;) or from the statement date (&quot;30 days from
        statement&quot;, where the customer pays what was on the month-end statement). Either way, the clock starts when you invoice, not
        when you deliver. A POD that sits in the cab for a week is a week added to your wait.
      </p>
      <p>Here is a worked example. The inputs are examples, not benchmarks.</p>
      <table className="wide">
        <caption>Worked example: the same load, invoiced on the day or nine days later (example inputs)</caption>
        <thead>
          <tr>
            <th>Customer&apos;s terms</th>
            <th>Delivered</th>
            <th>Invoiced</th>
            <th>Payment due</th>
            <th>Days lost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30 days from invoice</td>
            <td>Wed 28 Oct</td>
            <td>Same day, 28 Oct</td>
            <td>27 Nov</td>
            <td>0</td>
          </tr>
          <tr>
            <td>30 days from invoice</td>
            <td>Wed 28 Oct</td>
            <td>Fri 6 Nov</td>
            <td>6 Dec</td>
            <td>9</td>
          </tr>
          <tr>
            <td>30 days from statement</td>
            <td>Wed 28 Oct</td>
            <td>Same day, on the October statement</td>
            <td>30 Nov</td>
            <td>0</td>
          </tr>
          <tr>
            <td>30 days from statement</td>
            <td>Wed 28 Oct</td>
            <td>Fri 6 Nov, on the November statement</td>
            <td>30 Dec</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
      <p>
        The last row is the expensive one. With statement terms, an invoice that slips past month end waits for the next statement, so a
        nine-day delay costs a whole month. For the bigger picture on terms and debtors, see our guide to{' '}
        <a href="/blog/cash-flow-transport-business-south-africa">cash flow for transport businesses</a>.
      </p>
      <p>
        There is a VAT side too. On the invoice basis, which applies to companies, the time of supply is generally the earlier of the
        invoice being issued or payment being received, and you account for the VAT in that period whether or not the customer has paid (
        <A s={SRC.vat404}>SARS VAT 404</A>).
      </p>

      <h2>What a good proof of delivery shows</h2>
      <p>
        A POD has one job: to show, beyond argument, that the right goods reached the right place in the agreed condition, and who
        accepted them. A good one shows:
      </p>
      <ul>
        <li>
          <strong>The consignee&apos;s name</strong> in print, not only a signature, and where possible the company stamp.
        </li>
        <li>
          <strong>A signature</strong> from the person receiving the goods.
        </li>
        <li>
          <strong>Date and time</strong> of delivery, which matters for time-sensitive loads and for any waiting time you charge.
        </li>
        <li>
          <strong>Quantities and condition</strong>: pallets, cartons or tonnes received, against what was loaded.
        </li>
        <li>
          <strong>Exceptions</strong>: shorts, overs and damages written on the POD at the time, not reported by phone a week later.
        </li>
        <li>
          <strong>Seal numbers</strong> for sealed loads, and whether the seal was intact on arrival.
        </li>
        <li>
          <strong>Vehicle registration</strong> of the truck (and trailer) that delivered.
        </li>
        <li>
          <strong>The customer&apos;s reference</strong>: the waybill, delivery note or order number, so the POD matches their records and
          your invoice.
        </li>
      </ul>
      <p>
        Photos of the load at delivery and a GPS position from your tracking system are useful supporting evidence. They do not replace a
        signed POD unless your customer has agreed that they will. Agree up front, per customer, what they accept as proof.
      </p>
      <p>
        A POD with exceptions written on it settles the facts on the day, which is far easier than arguing about them a month later.
      </p>

      <h2>Paper or electronic POD</h2>
      <p>
        Paper PODs travel slowly: in the cab, in a folder, in a photo on a driver&apos;s phone. Electronic PODs reach the office the day
        they are signed.
      </p>
      <p>
        South African law recognises electronic records. Under the{' '}
        <A s={S.ectAct}>Electronic Communications and Transactions Act 25 of 2002</A>:
      </p>
      <ul>
        <li>Section 11: information is not without legal force and effect merely because it is in the form of a data message.</li>
        <li>Section 12: a legal requirement that something be in writing is met by a data message that is accessible for later reference.</li>
        <li>
          Section 13: an electronic signature is not without legal force merely because it is electronic. Where the law itself requires a
          signature and does not say what type, an advanced electronic signature is needed. Where the parties require an electronic
          signature but have not agreed on the type, a method that identifies the person and shows their approval, and is reliable enough
          for the purpose, meets the requirement.
        </li>
        <li>
          Section 15: a data message may not be refused as evidence merely because it is a data message, and its weight depends on how
          reliably it was created, stored and kept unaltered, and how its originator was identified.
        </li>
      </ul>
      <p>
        In practice: a POD signature is usually a matter of agreement between you and your customer, not a signature the law requires. So
        agree in your contract or rate letter what form of POD the customer accepts, keep the electronic record unaltered with its date and
        time, and make sure you can show who signed. This is general information, not legal advice: check your own contracts with your
        attorney.
      </p>

      <h2>What a valid tax invoice must contain</h2>
      <p>
        Section 20 of the VAT Act sets out what a tax invoice must show. SARS requires a full tax invoice when the price is more than
        R&nbsp;5&nbsp;000, allows an abridged tax invoice when it is R&nbsp;5&nbsp;000 or less, and requires none when it is R&nbsp;50 or
        less (<A s={S.sarsInvoices}>SARS</A>). Most loads are well over R&nbsp;5&nbsp;000, so plan on a full tax invoice. These thresholds
        have changed before, so check the SARS page if you are reading this later.
      </p>
      <table className="wide">
        <caption>Tax invoice particulars (SARS VAT 404, chapter 13)</caption>
        <thead>
          <tr>
            <th>Particular</th>
            <th>Full (more than R&nbsp;5&nbsp;000)</th>
            <th>Abridged</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The words &quot;tax invoice&quot;, &quot;VAT invoice&quot; or &quot;invoice&quot;</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Your name, address and VAT registration number</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Customer&apos;s name, address and VAT number (if they are a vendor)</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Serial number and date of issue</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Full and proper description of the services</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Quantity or volume supplied</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Value, VAT charged and total (or total with a statement that it includes VAT at 15%)</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <p>
        You must issue the tax invoice within 21 days of making the supply (<A s={SRC.vat404}>SARS VAT 404</A>). Treat that as the legal
        outer limit, not the target. For a load, a good description names the route, the date and the customer&apos;s reference, for
        example &quot;Linehaul Johannesburg to Durban, 28 Oct, order 4471&quot;, so the customer&apos;s creditors clerk can match it to
        the POD without a phone call.
      </p>

      <h2>Short deliveries and disputes: credit notes, not edits</h2>
      <p>
        If the POD shows a short or damage before you invoice, deal with it then: invoice what was agreed and note the exception, or hold
        the line item until the claim is settled. Agree with the customer which applies.
      </p>
      <p>
        Once a tax invoice is issued, do not edit it and do not issue a second invoice for the same load. VAT 404 is clear that issuing more
        than one tax invoice per taxable supply is illegal. If you agree to reduce your charge, section 21 of the VAT Act requires a credit
        note (<A s={SRC.vat404}>SARS VAT 404</A>). It must show:
      </p>
      <ul>
        <li>The words &quot;credit note&quot;.</li>
        <li>Your name, address and VAT number, and the customer&apos;s name and address (unless the original was an abridged invoice).</li>
        <li>The date it is issued.</li>
        <li>The amount by which the value and the VAT have changed.</li>
        <li>A brief reason, for example &quot;3 pallets short on POD, rate reduced by agreement&quot;.</li>
        <li>A reference to the original invoice number and its date.</li>
      </ul>
      <p>
        A short delivery is not automatically a reduction in your freight charge. Often it is a separate goods-in-transit claim. Read your
        contract, and check the VAT treatment of any settlement with a tax practitioner. Unresolved disputes are one of the{' '}
        <a href="/blog/hidden-profit-leaks-south-african-fleet-operators">places transport businesses lose money</a>, because the whole
        invoice tends to wait while one line is argued.
      </p>

      <h2>A same-day invoicing routine</h2>
      <ol>
        <li>
          <strong>Before the load:</strong> the driver has the customer&apos;s order or waybill number, and knows what the customer
          accepts as POD.
        </li>
        <li>
          <strong>At delivery:</strong> the driver checks the POD has a printed name, signature, date and time, quantities, seal numbers
          and any exceptions, before leaving the site.
        </li>
        <li>
          <strong>Within the hour:</strong> the driver sends the signed POD to the office (a clear photo or scan, or the electronic POD).
          The paper original follows when the truck is back.
        </li>
        <li>
          <strong>Same day:</strong> the office marks the load delivered, attaches the POD, raises the tax invoice and sends both to the
          customer&apos;s accounts contact.
        </li>
        <li>
          <strong>Daily:</strong> check the list of delivered loads without an invoice. It should be empty by close of business.
        </li>
        <li>
          <strong>Weekly:</strong> look at debtors by age and follow up anything disputed or past terms.
        </li>
      </ol>
      <p>
        This is the flow TruckWys is built around. When a load is marked delivered, in TruckWys or from your TMS, the invoice is raised with
        15% VAT and your payment terms, with the POD kept on the load. It is ready to send: nothing is emailed until you send it. Unpaid
        invoices then show in your <a href="/product/debtors">debtors by age</a>. More on the{' '}
        <a href="/product/invoicing">invoicing page</a>.
      </p>

      <h2>Checklist</h2>
      <ul>
        <li>POD has a printed name, signature, date and time.</li>
        <li>Quantities and condition recorded; shorts, overs and damages written on the POD.</li>
        <li>Seal numbers and vehicle registration recorded.</li>
        <li>Customer&apos;s waybill or order reference on both the POD and the invoice.</li>
        <li>Each customer has agreed what POD they accept (paper, electronic, photos).</li>
        <li>Invoice says &quot;tax invoice&quot;, with both VAT numbers, a serial number, date, description, quantity, and VAT at 15%.</li>
        <li>Invoice raised and sent on the day of delivery, POD attached.</li>
        <li>Corrections made by credit note referring to the original invoice, never by editing it.</li>
        <li>No delivered load without an invoice at close of business.</li>
      </ul>
    </>
  ),
};

export default post;
