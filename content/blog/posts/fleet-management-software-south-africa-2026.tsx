import { SRC } from '../sources';
import { A, type Post, type Source } from '../types';

/** Sources only this post cites. Checked 1 Oct 2026. */
const S = {
  popia: {
    name: 'Protection of Personal Information Act 4 of 2013 (Information Regulator copy)',
    url: 'https://inforegulator.org.za/wp-content/uploads/2025/08/PROTECTION-OF-PERSONAL-INFORMATION-ACT-4-OF-2013.pdf',
  },
  awsRegions: { name: 'AWS documentation: AWS Regions (af-south-1, Africa (Cape Town))', url: 'https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html' },
} as const satisfies Record<string, Source>;

const post: Post = {
  slug: 'fleet-management-software-south-africa-2026',
  h1: { a: 'Fleet management software in South Africa.', b: 'What each kind does, and how to choose.' },
  title: 'Fleet management software in South Africa: the four kinds, what each does, and how to choose',
  seoTitle: 'Fleet management software South Africa (2026)',
  description:
    'Tracking, TMS, accounting and load-to-cash software for SA transport businesses: what each does and does not do, and the questions to ask before you sign.',
  summary:
    'The four kinds of software a South African transport business runs, what each one is for, how they fit together, and a checklist for choosing.',
  category: 'Running the business',
  keyword: 'fleet management software South Africa',
  published: '2026-02-05',
  reviewed: '2026-10-01',
  readingMinutes: 5,
  related: { href: '/integrations', label: 'What TruckWys connects to' },
  sources: [S.popia, S.awsRegions, SRC.sanralPoster, SRC.sarsVat, SRC.nbcrfli],
  faq: [
    {
      q: 'What is the difference between fleet management software and a TMS?',
      a: 'Fleet management or telematics software looks after the vehicles: where they are, how they are driven, fuel and servicing. A TMS looks after the work: orders, planning, dispatch and proof of delivery.',
    },
    {
      q: 'Does POPIA apply to vehicle tracking data?',
      a: 'Tracking data linked to a driver is personal information, so POPIA applies. Your supplier is an operator under the Act and you need a written contract that requires it to keep the data secure. Check your own case with your attorney.',
    },
    {
      q: 'Can fleet data be stored outside South Africa?',
      a: 'POPIA allows transfers abroad only under conditions, such as the recipient being bound by law or an agreement that gives adequate protection. Ask every supplier where the data is hosted.',
    },
    {
      q: 'Is TruckWys a fleet management system?',
      a: 'No. TruckWys is a load-to-cash finance layer: it prices loads from your costs, raises invoices on delivery and tracks debtors. It connects to tracking systems such as Cartrack and CtrlFleet rather than replacing them.',
    },
  ],
  body: (
    <>
      <p>
        &quot;Fleet management software&quot; covers very different products. Some tell you where your trucks are. Some plan and dispatch the
        loads. Some keep your books. Some turn delivered loads into invoices and cash. Most transport businesses end up running two or three
        of these, and the trouble usually starts in the gaps between them.
      </p>
      <p>
        This guide explains the four kinds of software a South African transport business is likely to use, what each does and does not
        do, how they fit together, and the questions to ask before you sign anything.
      </p>

      <h2>1. Telematics and fleet management</h2>
      <p>
        This is what most people mean by fleet management: a tracking unit in each truck and software that reports what the vehicle is
        doing.
      </p>
      <ul>
        <li>vehicle location, trip history and geofences</li>
        <li>driver behaviour: speeding, harsh braking, idling, hours behind the wheel</li>
        <li>fuel: consumption per truck, and fuel card or tank reconciliation on some systems</li>
        <li>maintenance: service schedules, licence and roadworthy due dates</li>
        <li>theft recovery, panic buttons and cameras, depending on the provider</li>
      </ul>
      <p>
        <strong>What it does not do:</strong> it does not know what the load was worth, which customer it was for, or whether the invoice
        has been paid. A truck can have an excellent driver score on a lane that loses money.
      </p>

      <h2>2. A transport management system (TMS)</h2>
      <p>A TMS manages the work rather than the vehicle.</p>
      <ul>
        <li>customer orders and load bookings</li>
        <li>planning: which truck and driver take which load, and when</li>
        <li>dispatch, load status and driver instructions</li>
        <li>proof of delivery (POD) capture, often on the driver&apos;s phone</li>
      </ul>
      <p>
        <strong>What it does not always do:</strong> many TMS products are strong on operations and lighter on money. Check whether it
        prices a load from your own costs, raises a VAT-compliant tax invoice, and follows up unpaid invoices, or whether it hands that over
        to something else.
      </p>

      <h2>3. Accounting software</h2>
      <p>
        Your accounting system is the official record: the general ledger, VAT returns, payroll, bank reconciliation and the financial
        statements your accountant signs off.
      </p>
      <p>
        <strong>What it does not do:</strong> it knows a customer paid, but not which truck ran the load, how many kilometres it was or
        what the tolls cost. Profit by lane, by truck or by customer usually needs data from outside the ledger.
      </p>

      <h2>4. A load-to-cash finance layer</h2>
      <p>
        This is the newest category, and the one TruckWys is in. It sits between operations and the books and follows each load from quote
        to cash:
      </p>
      <ul>
        <li>pricing a load from your real costs: diesel, tolls by vehicle class, driver allowance and your rate per kilometre</li>
        <li>raising the invoice as soon as the load is delivered</li>
        <li>debtors by age, and reminders you choose to send</li>
        <li>profit and revenue by lane and by customer</li>
      </ul>
      <p>
        <strong>What it does not do:</strong> TruckWys does not track vehicles, plan routes or replace your accountant. It connects to
        tracking systems such as Cartrack and CtrlFleet, and a TMS can send it delivered loads with their PODs by API (
        <a href="/integrations">integrations</a>).
      </p>

      <h2>How they fit together</h2>
      <p>Think of it as one load moving through four systems:</p>
      <ol>
        <li>The TMS, or your spreadsheet, takes the order and plans the load.</li>
        <li>The tracking system follows the truck and records the trip.</li>
        <li>On delivery, the load-to-cash layer raises the invoice from the agreed price and follows it until it is paid.</li>
        <li>The accounting system records the invoice and the payment, and produces the VAT return and financial statements.</li>
      </ol>
      <p>
        A small operator might run tracking plus spreadsheets plus accounting. A larger one might have all four. The question is not how
        many systems you have but whether a delivered load becomes an invoice the same day without anyone retyping it. If you want to see
        where loads leak money between these steps, read{' '}
        <a href="/blog/hidden-profit-leaks-south-african-fleet-operators">the hidden profit leaks in a transport business</a>.
      </p>

      <h2>Questions to ask before you choose</h2>
      <h3>Where is my data, and who can see it?</h3>
      <p>
        Location and driver behaviour data linked to a person is personal information. Under the Protection of Personal Information Act,
        when a supplier processes it for you, you must have a written contract that requires the supplier to keep it secure, and the
        supplier must tell you immediately if it is breached (<A s={S.popia}>POPIA, section 21</A>). Personal information may only be
        transferred to a third party in another country under conditions, such as the recipient being bound by law, binding corporate rules
        or an agreement that gives adequate protection (<A s={S.popia}>POPIA, section 72</A>).
      </p>
      <p>
        So ask every supplier where the data is hosted, who their sub-processors are, and how you get your data out if you leave. For
        reference, TruckWys runs on Amazon Web Services in the Cape Town region, af-south-1 (<A s={S.awsRegions}>AWS</A>). This is not legal
        advice: check your own obligations with your attorney.
      </p>

      <h3>Does it connect to what I already run?</h3>
      <p>
        Ask for a documented API, imports and exports in CSV or Excel, and a list of live integrations rather than planned ones. Every
        manual re-entry between systems is a place where a load can be missed or invoiced wrongly.
      </p>

      <h3>How is it priced?</h3>
      <ul>
        <li>per vehicle per month (common for tracking, often with hardware and installation on top)</li>
        <li>per user per month (common for accounting and some TMS products)</li>
        <li>a flat fee, a usage-based fee, or both</li>
      </ul>
      <p>
        Work out the cost at your size today and at twice your size. For comparison, TruckWys is R&nbsp;4&nbsp;499 per month plus 0,25% of each
        delivered load&apos;s invoice total, with no VAT on our fees (<a href="/pricing">pricing</a>).
      </p>

      <h3>How long is the contract?</h3>
      <p>
        Tracking contracts in particular can run for years, sometimes tied to the hardware. Read the term, the notice period and what
        happens to the units when you leave. TruckWys is month to month, with 30 days&apos; written notice.
      </p>

      <h3>Does it understand South Africa?</h3>
      <ul>
        <li>
          <strong>Tolls:</strong> does it price SANRAL tolls by vehicle class? The tariffs that apply from 1 March 2026 are set per class (
          <A s={SRC.sanralPoster}>SANRAL</A>).
        </li>
        <li>
          <strong>Rand and VAT:</strong> does it work in rand and produce tax invoices with VAT at the standard rate of 15% (
          <A s={SRC.sarsVat}>SARS</A>)?
        </li>
        <li>
          <strong>Driver costs:</strong> can it carry the wage and allowance structure of the bargaining council&apos;s main agreement (
          <A s={SRC.nbcrfli}>NBCRFLI</A>) into your costs, or do you add them by hand?
        </li>
        <li>
          <strong>Support:</strong> is there local support during South African working hours?
        </li>
      </ul>

      <h2>A checklist</h2>
      <ul>
        <li>Write down what you need answered every week: where are the trucks, what is planned, what has been invoiced, who has not paid.</li>
        <li>Match each question to one system, and see which questions nobody answers today.</li>
        <li>Ask every supplier where data is hosted and get the POPIA operator terms in writing.</li>
        <li>Ask for a live demo of the integration you need, not a slide.</li>
        <li>Price it at your size today and at twice the size.</li>
        <li>Read the contract term, notice period and exit terms before you sign.</li>
        <li>Check how tolls, VAT and driver costs are handled.</li>
        <li>Ask how you export all of your data if you leave.</li>
      </ul>
      <p>
        The right set of tools depends on your size and how you work. If your trucks are tracked and your loads are planned, but invoicing
        and debtors still live in spreadsheets, that is the gap a load-to-cash layer fills. See <a href="/product">how TruckWys works</a>, or
        start with <a href="/blog/how-to-quote-freight-rates-south-africa-ai">how to quote a transport load</a>.
      </p>
    </>
  ),
};

export default post;
