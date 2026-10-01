/**
 * Guides: the rewritten kept posts from /blogs (brief §2.3). House rules: no
 * model hype, no em dashes, South African formats, every number sourced (see
 * ./sources.ts) or shown as a worked example with its inputs stated.
 * Author is "TruckWys" until a named author is provided (owner question Q7).
 *
 * Retired slugs and where they go live in app/blogs/[slug]/page.tsx.
 */
import type { ReactNode } from 'react';
import { SRC, type Source } from './sources';

export type Guide = {
  slug: string;
  title: string;
  /** The visible H1, two-tone like every page H1 (the title stays the Article headline). */
  h1: { a: string; b: string };
  /** The %s part of the <title>, keyword first, 60 characters or fewer with " | TruckWys". */
  seoTitle: string;
  description: string;
  summary: string;
  published: string;
  reviewed: string;
  readingMinutes: number;
  related: { href: string; label: string };
  sources: Source[];
  body: ReactNode;
};

const A = ({ s, children }: { s: Source; children: ReactNode }) => (
  <a href={s.url} rel="noopener" target="_blank">
    {children}
  </a>
);

const REVIEWED = '2026-09-30';

export const GUIDES: Guide[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: 'sa-fleet-operators-real-cost-per-kilometre',
    h1: { a: "Your truck's real cost per kilometre.", b: 'Worked out line by line.' },
    title: "How to work out your truck's real cost per kilometre",
    seoTitle: 'Truck cost per kilometre in South Africa (2026)',
    description:
      'What each kilometre really costs your truck: diesel, tolls, tyres, maintenance and fixed costs, worked out at the September 2026 diesel price.',
    summary: 'Diesel, tolls, tyres and fixed costs, turned into one rand figure per kilometre, with a worked example.',
    published: '2026-02-13',
    reviewed: REVIEWED,
    readingMinutes: 7,
    related: { href: '/product/quoting', label: 'How TruckWys prices a load from these costs' },
    sources: [SRC.dmprSep, SRC.citizenSep, SRC.sanralPoster, SRC.rfa, SRC.nbcrfli, SRC.dieselRefund],
    body: (
      <>
        <p>
          Your cost per kilometre is the one number every quote should start from. If you know it, you know the lowest rate you can
          take on a lane without losing money. If you guess it, the diesel price, a toll plaza or an empty return will decide your margin
          for you.
        </p>
        <p>This guide splits the cost into the parts that move with distance and the parts that do not, then puts them together.</p>

        <h2>1. Variable costs: the ones that grow with every kilometre</h2>
        <h3>Diesel</h3>
        <p>
          Diesel is the biggest variable cost for most long-distance trucks. The formula is simple: litres per kilometre times the price
          per litre.
        </p>
        <p>
          The official wholesale price changes on the first Wednesday of each month. On 2 September 2026 the Department of Mineral and
          Petroleum Resources raised 50 ppm diesel by 314,90 cents a litre (<A s={SRC.dmprSep}>DMPR</A>), which put inland 50 ppm diesel at
          R&nbsp;30,05 a litre, with the coast a little lower (<A s={SRC.citizenSep}>The Citizen</A>). Use the price for your own region, or
          what you actually pay at your depot.
        </p>
        <p>
          For consumption, use your own fuel records or your tracking system, per truck and per type of load. A loaded interlink uses more
          than the same truck running empty. In the example below we use 46 litres per 100 km for a loaded interlink, which is an
          assumption for illustration, not a benchmark. (The quote on our product pages is a different truck: a 28 t superlink on the same
          Johannesburg to Durban lane, at 37,3 litres per 100 km.)
        </p>
        <div className="b-calc">
          <p>0,46 L/km × R&nbsp;30,05/L = <strong>R&nbsp;13,82 per km</strong> for diesel</p>
        </div>
        <p>
          Road freight is not one of the activities that qualify for the diesel refund, which is limited to farming, forestry, mining,
          some marine uses, rail freight and large power plants (<A s={SRC.dieselRefund}>SARS</A>). So price the full pump price.
        </p>

        <h3>Tolls</h3>
        <p>
          Tolls depend on the lane, so work them out per route rather than as an average. SANRAL publishes its tariffs by vehicle class;
          class 4 covers vehicles with five or more axles, such as an interlink. From 1 March 2026 a class 4 truck pays R&nbsp;1&nbsp;274 at the
          five N3 mainline plazas between Johannesburg and Durban: De Hoek, Wilge, Tugela, Mooi and Mariannhill (
          <A s={SRC.sanralPoster}>SANRAL</A>).
        </p>
        <p>
          SANRAL tariffs include VAT. If you are a VAT vendor you claim that VAT back, so the cost to you is R&nbsp;1&nbsp;107,83 excl. VAT. Over
          the 570 km from City Deep to Prospecton that adds R&nbsp;1,94 per km on that lane.
        </p>

        <h3>Tyres and maintenance</h3>
        <p>
          Take these from your own workshop and tyre records over at least a year, divided by the kilometres the truck ran. The Road Freight
          Association publishes a Vehicle Cost Schedule you can use as a cross-check (<A s={SRC.rfa}>RFA</A>). In our example the inputs are
          R&nbsp;2,40 per km for tyres and R&nbsp;1,80 per km for maintenance.
        </p>

        <h2>2. Fixed costs: the ones you pay even when the truck stands</h2>
        <p>Add up everything the truck costs you in a month whether it moves or not:</p>
        <ul>
          <li>the finance instalment or, if you own it outright, a depreciation figure</li>
          <li>insurance, licences and permits</li>
          <li>
            the driver&apos;s wage and benefits (the minimums are set by the bargaining council&apos;s main agreement,{' '}
            <A s={SRC.nbcrfli}>NBCRFLI</A>)
          </li>
          <li>tracking subscription, and a fair share of your office and admin costs</li>
        </ul>
        <p>Then divide by the kilometres the truck really runs in a month.</p>
        <table>
          <caption>Worked example: fixed costs for one interlink (example inputs)</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Per month</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Finance instalment</td><td>R&nbsp;38&nbsp;000</td></tr>
            <tr><td>Driver wage and benefits</td><td>R&nbsp;24&nbsp;000</td></tr>
            <tr><td>Insurance</td><td>R&nbsp;9&nbsp;500</td></tr>
            <tr><td>Share of office and admin</td><td>R&nbsp;8&nbsp;000</td></tr>
            <tr><td>Licences and permits</td><td>R&nbsp;1&nbsp;500</td></tr>
            <tr><td>Tracking</td><td>R&nbsp;600</td></tr>
            <tr><th scope="row">Total</th><td><strong>R&nbsp;81&nbsp;600</strong></td></tr>
          </tbody>
        </table>
        <p>At 12&nbsp;000 km a month, that is R&nbsp;81&nbsp;600 ÷ 12&nbsp;000 = <strong>R&nbsp;6,80 per km</strong>.</p>

        <h2>3. Put it together</h2>
        <table>
          <caption>Cost per km, worked example</caption>
          <thead>
            <tr>
              <th scope="col">Cost</th>
              <th scope="col">Rand per km</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Diesel</td><td>R&nbsp;13,82</td></tr>
            <tr><td>Tyres</td><td>R&nbsp;2,40</td></tr>
            <tr><td>Maintenance</td><td>R&nbsp;1,80</td></tr>
            <tr><td>Fixed costs</td><td>R&nbsp;6,80</td></tr>
            <tr><th scope="row">Cost per km, before tolls</th><td><strong>R&nbsp;24,82</strong></td></tr>
            <tr><td>N3 tolls, Johannesburg to Durban, excl. VAT</td><td>R&nbsp;1,94</td></tr>
            <tr><th scope="row">Cost per km on that lane</th><td><strong>R&nbsp;26,76</strong></td></tr>
          </tbody>
        </table>

        <h2>4. The kilometres you are not paid for</h2>
        <p>
          The figure above is per kilometre driven. Customers pay for loaded kilometres. If one kilometre in five is empty, your cost per
          paid kilometre is R&nbsp;24,82 ÷ 0,8 = <strong>R&nbsp;31,03</strong> before tolls. This is the number that decides whether a lane
          works, and it is the one most often left out.
        </p>

        <h2>5. Keep it current</h2>
        <ul>
          <li>Update the diesel price on the first Wednesday of every month.</li>
          <li>Update tolls every March, when SANRAL&apos;s new tariffs take effect.</li>
          <li>Recalculate fixed costs when a finance deal, insurance premium or wage agreement changes.</li>
          <li>Work out consumption per truck, not per fleet: one thirsty truck hides in an average.</li>
        </ul>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: 'how-to-quote-freight-rates-south-africa-ai',
    h1: { a: 'How to quote a transport load.', b: 'Line by line, from diesel to VAT.' },
    title: 'How to quote a transport load in South Africa, line by line',
    seoTitle: 'How to quote a transport load in South Africa',
    description:
      'Build a load quote from diesel, SANRAL tolls, allowance, fixed costs and the empty return, then margin and VAT. Worked N3 example to Pietermaritzburg.',
    summary: 'Diesel, tolls, allowance, fixed costs and the return leg, then margin and VAT. A worked Johannesburg to Pietermaritzburg quote.',
    published: '2026-02-03',
    reviewed: REVIEWED,
    readingMinutes: 7,
    related: { href: '/product/quoting', label: 'See how TruckWys builds the same quote' },
    sources: [SRC.citizenSep, SRC.sanralPoster, SRC.sanralBooklet, SRC.etolls, SRC.vat404, SRC.sarsVat, SRC.nbcrfli],
    body: (
      <>
        <p>
          A quote that shows its working is easier to defend, easier to check and harder to get wrong. This guide builds one from the
          ground up, using a 490 km load from Johannesburg to Pietermaritzburg on the N3 with an interlink. Swap in your own figures as you go.
          (It is deliberately a different load from the superlink quote to Durban on our product pages.)
        </p>
        <p>
          The running costs used below come from our{' '}
          <a href="/guides/sa-fleet-operators-real-cost-per-kilometre">cost per kilometre guide</a>. They are example inputs, not
          benchmarks.
        </p>

        <h2>Step 1: diesel for the loaded leg</h2>
        <p>
          Distance times consumption gives litres: 490 km × 46 L per 100 km = 225,40 L. At the September 2026 inland price of R&nbsp;30,05 a
          litre for 50 ppm diesel (<A s={SRC.citizenSep}>The Citizen</A>), that is <strong>R&nbsp;6&nbsp;773,27</strong>.
        </p>

        <h2>Step 2: every toll plaza on the route</h2>
        <p>
          Name each plaza rather than using a lump sum, so you can check it. Your vehicle class sets the tariff: class 4 is five or more
          axles (<A s={SRC.sanralBooklet}>SANRAL</A>). On the N3 from Johannesburg to Pietermaritzburg a class 4 truck passes De Hoek
          (R&nbsp;230), Wilge (R&nbsp;304), Tugela (R&nbsp;359) and Mooi (R&nbsp;324), a total of R&nbsp;1&nbsp;217 at the tariffs effective
          1 March 2026 (<A s={SRC.sanralPoster}>SANRAL</A>). Mariannhill comes after Pietermaritzburg, so it is not on this trip.
        </p>
        <p>
          Tariffs include VAT. A VAT vendor claims that input tax back (<A s={SRC.vat404}>SARS VAT 404</A>), so put tolls into the quote excl.
          VAT: <strong>R&nbsp;1&nbsp;058,26</strong>. Gauteng e-tolls no longer apply; road users stopped paying them on 11 April 2024 (
          <A s={SRC.etolls}>Department of Transport</A>).
        </p>

        <h2>Step 3: the driver</h2>
        <p>
          Add the trip allowance you pay, at your own rates and at least the minimums in the bargaining council&apos;s main agreement (
          <A s={SRC.nbcrfli}>NBCRFLI</A>). Our example uses <strong>R&nbsp;850</strong> for the round trip.
        </p>

        <h2>Step 4: the costs that do not show up on a fuel slip</h2>
        <p>
          Tyres, maintenance and fixed costs are real on every kilometre. Using the example figures of R&nbsp;4,20 per km for tyres and
          maintenance and R&nbsp;6,80 per km for fixed costs, the loaded leg carries <strong>R&nbsp;2&nbsp;058,00</strong> and{' '}
          <strong>R&nbsp;3&nbsp;332,00</strong>.
        </p>

        <h2>Step 5: the way home</h2>
        <p>
          If there is no backload, the customer&apos;s load has to pay for the empty return. Empty, the truck burns less, say 38 L per 100 km (186,20 L),
          but the tolls, tyres and fixed costs are the same.
        </p>
        <table>
          <caption>Worked example: cost of the round trip</caption>
          <thead>
            <tr>
              <th scope="col">Cost</th>
              <th scope="col">Loaded leg</th>
              <th scope="col">Empty return</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Diesel</td><td>R&nbsp;6&nbsp;773,27</td><td>R&nbsp;5&nbsp;595,31</td></tr>
            <tr><td>Tolls, excl. VAT</td><td>R&nbsp;1&nbsp;058,26</td><td>R&nbsp;1&nbsp;058,26</td></tr>
            <tr><td>Driver allowance</td><td>R&nbsp;850,00</td><td>R&nbsp;0,00</td></tr>
            <tr><td>Tyres and maintenance</td><td>R&nbsp;2&nbsp;058,00</td><td>R&nbsp;2&nbsp;058,00</td></tr>
            <tr><td>Fixed costs</td><td>R&nbsp;3&nbsp;332,00</td><td>R&nbsp;3&nbsp;332,00</td></tr>
            <tr><th scope="row">Subtotal</th><td>R&nbsp;14&nbsp;071,53</td><td>R&nbsp;12&nbsp;043,57</td></tr>
            <tr><th scope="row">Round trip cost</th><td colSpan={2}><strong>R&nbsp;26&nbsp;115,10</strong></td></tr>
          </tbody>
        </table>
        <p>
          If you do have a backload, the return leg&apos;s costs go on that load instead, and this quote only carries the loaded leg.
        </p>

        <h2>Step 6: margin, then VAT</h2>
        <p>
          Now add your margin. A price of <strong>R&nbsp;29&nbsp;700 excl. VAT</strong> leaves R&nbsp;3&nbsp;584,90 over the round trip cost,
          a margin of 12,1%. Then VAT at 15% (<A s={SRC.sarsVat}>SARS</A>): R&nbsp;4&nbsp;455, for an invoice total of R&nbsp;34&nbsp;155.
        </p>

        <h2>Step 7: put a date on it</h2>
        <p>
          Diesel changes on the first Wednesday of every month, so give every quote a validity date, and consider a fuel clause for
          contracts that run longer than a month. Our <a href="/guides/fuel-cost-management-sa-fleets-strategies">diesel guide</a> shows a
          simple way to work out a fuel surcharge.
        </p>

        <h2>A checklist before you send</h2>
        <ul>
          <li>Is the diesel price this month&apos;s, for the right region?</li>
          <li>Is every toll plaza named, at the right class, excl. VAT?</li>
          <li>Who pays for the way home?</li>
          <li>Are tyres, maintenance and fixed costs in, not just fuel?</li>
          <li>Is the margin what you meant it to be, after all of the above?</li>
          <li>Does the quote say how long the price is valid?</li>
        </ul>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: 'hidden-profit-leaks-south-african-fleet-operators',
    h1: { a: 'Six places the money leaks.', b: 'Between the load and the bank.' },
    title: 'Six places transport businesses lose money between the load and the bank',
    seoTitle: 'Where transport businesses lose money: six leaks',
    description:
      'Quotes that miss a cost, late invoices, missing PODs, unchased debtors, VAT on unpaid invoices and diesel rises not passed on. How to spot each.',
    summary: 'Missed costs, late invoices, missing PODs, unchased debtors, VAT on unpaid invoices and diesel increases not passed on.',
    published: '2026-01-27',
    reviewed: REVIEWED,
    readingMinutes: 6,
    related: { href: '/product/debtors', label: 'How TruckWys shows who owes you' },
    sources: [SRC.dmprSep, SRC.vat404, SRC.prescribedRate, SRC.sanralPoster],
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
          <a href="/guides/how-to-quote-freight-rates-south-africa-ai">quoting guide</a> has the build-up.
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
          financing your customer for free.
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
          no rate is agreed, the prescribed rate of interest applies, which was 10,25% a year from 1 March 2026 (
          <A s={SRC.prescribedRate}>Government Gazette 54520</A>). It moves with the repo rate, so check the current figure.
        </p>
        <p>
          <strong>Check:</strong> which customers are over 60 days, and when did someone last contact each one?
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
          debtors over 60 days. Both come from records you already have.
        </p>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: 'fuel-cost-management-sa-fleets-strategies',
    h1: { a: 'Diesel costs for South African fleets.', b: 'What you pay for, and what you control.' },
    title: 'Diesel costs for South African fleets: what you pay for, and what you can control',
    seoTitle: 'Diesel costs for trucks in South Africa (2026)',
    description:
      "What is in the 2026 diesel price, how the monthly adjustment works, why road freight gets no refund, and how to pass rises on with a fuel clause.",
    summary: 'The levies in the price, the monthly adjustment, the diesel refund question and a simple fuel surcharge formula.',
    published: '2026-02-07',
    reviewed: REVIEWED,
    readingMinutes: 6,
    related: { href: '/product/quoting', label: "How TruckWys prices diesel into each quote" },
    sources: [SRC.dmprSep, SRC.dmprPrices, SRC.citizenSep, SRC.sarsBudget, SRC.rafLevy, SRC.levyRelief, SRC.dieselRefund],
    body: (
      <>
        <p>
          You cannot set the diesel price. You can know exactly what it is, price it into every load, and make sure increases reach your
          customers rather than your margin.
        </p>

        <h2>How the price is set</h2>
        <p>
          South Africa&apos;s wholesale diesel price is regulated and adjusted once a month, taking effect on the first Wednesday. The
          Department of Mineral and Petroleum Resources publishes the adjustment a few days before (<A s={SRC.dmprPrices}>DMPR</A>).
        </p>
        <p>
          From 2 September 2026, 50 ppm diesel went up by 314,90 cents a litre and 500 ppm by 293,90 cents (<A s={SRC.dmprSep}>DMPR</A>).
          That took 50 ppm diesel to R&nbsp;30,05 a litre inland, with the coastal price a little lower (<A s={SRC.citizenSep}>The Citizen</A>).
        </p>

        <h2>What is in a litre</h2>
        <p>Part of every litre is tax and levies, set in the national budget:</p>
        <ul>
          <li>
            the general fuel levy on diesel, R&nbsp;3,93 a litre from 1 April 2026 (<A s={SRC.sarsBudget}>SARS</A>)
          </li>
          <li>the Road Accident Fund levy, 225 cents a litre from 1 April 2026 (<A s={SRC.rafLevy}>Freight News</A>)</li>
          <li>the carbon fuel levy, 23 cents a litre on diesel (<A s={SRC.sarsBudget}>SARS</A>)</li>
        </ul>
        <p>
          In 2026 the government cut the general fuel levy for a few months to soften a sharp rise in fuel prices, then brought it back in
          full from July (<A s={SRC.levyRelief}>National Treasury</A>). Temporary relief like this is another reason to check the price every
          month rather than assume it.
        </p>

        <h2>No diesel refund for road freight</h2>
        <p>
          The diesel refund is limited to certain primary and marine activities, rail freight and large power plants. Road freight is not on
          the list (<A s={SRC.dieselRefund}>SARS</A>), so a haulier pays the levies in full and should price them in.
        </p>

        <h2>Inland or coastal</h2>
        <p>
          Inland diesel costs more because of the cost of moving fuel from the coast, usually by a rand or so a litre. If you refuel at both ends of a long route, price each leg at the price you will actually pay.
        </p>

        <h2>Pass increases on with a fuel clause</h2>
        <p>
          For contracts that run longer than a month, agree a base diesel price and a fuel share of the rate up front. Then adjust the rate
          when diesel moves:
        </p>
        <div className="b-calc">
          <p>Surcharge = (this month&apos;s price − base price) ÷ base price × fuel share of the rate</p>
        </div>
        <p>
          Example: if the agreed base was R&nbsp;26,90 a litre and fuel is 40% of the rate, then at R&nbsp;30,05 the surcharge is (30,05 − 26,90)
          ÷ 26,90 × 40% = 4,7%. The inputs are illustrative; use the base price and fuel share you agree with your customer, and put the
          formula in writing.
        </p>

        <h2>What you can control</h2>
        <ul>
          <li>Measure consumption per truck from fuel slips or tracking, and look at the worst truck first.</li>
          <li>Price the empty kilometres. A return leg with no load still burns diesel.</li>
          <li>Give every quote a validity date that ends before the next adjustment, or include the fuel clause.</li>
          <li>Keep fuel receipts per truck and per trip, so your cost per kilometre comes from facts.</li>
        </ul>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 5 */
  {
    slug: 'cross-border-trucking-southern-africa-multi-currency',
    h1: { a: 'Cross-border trucking costs.', b: 'Permits, road charges and tolls.' },
    title: 'Cross-border trucking costs in southern Africa: permits, road charges and tolls',
    seoTitle: 'Cross-border trucking costs from South Africa',
    description:
      'Cross-border load costs from South Africa: C-BRTA permits, road charges in Namibia, Eswatini and Lesotho, N4 tolls to Mozambique, zero-rated VAT.',
    summary: 'C-BRTA permits, foreign road charges and tolls, and how VAT works on a load that leaves the country.',
    published: '2026-02-10',
    reviewed: REVIEWED,
    readingMinutes: 6,
    related: { href: '/product/quoting', label: 'How TruckWys adds cross-border fees to a quote' },
    sources: [SRC.cbrta, SRC.botswana, SRC.namibia, SRC.trac, SRC.eswatini, SRC.lesotho, SRC.vat404],
    body: (
      <>
        <p>
          A cross-border load carries costs a local load never sees: permits, foreign road charges, tolls in another currency and more
          waiting. Leave one out and the premium you charged for crossing the border disappears. This guide lists what to price, with the
          official source for each.
        </p>
        <p>
          Charges change. The figures below were checked on 30 September 2026; confirm them with the authority before you quote.
        </p>

        <h2>Your South African permit</h2>
        <p>
          Goods vehicles crossing into neighbouring countries need a cross-border permit from the Cross-Border Road Transport Agency. You can
          apply online through the agency&apos;s Cross-Easy portal or in person in Centurion; the fees are published on its permits page (
          <A s={SRC.cbrta}>C-BRTA</A>). Spread the permit cost over the trips it covers.
        </p>

        <h2>Charges country by country</h2>
        <table className="wide">
          <caption>Road charges for a heavy truck, as published (checked 30 Sep 2026)</caption>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Charge</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Namibia</td>
              <td>
                Cross-border charge, from 1 Aug 2026: N$&nbsp;3&nbsp;058 for a truck tractor with four or more axles, plus N$&nbsp;2&nbsp;621 for a
                trailer with five or more axles. Mass distance charges also apply.
              </td>
              <td><A s={SRC.namibia}>Road Fund Administration</A></td>
            </tr>
            <tr>
              <td>Mozambique (N4)</td>
              <td>
                Class 4 tolls from 1 Mar 2026: Moamba MZN&nbsp;1&nbsp;800 and Maputo MZN&nbsp;550. On the South African side of the same route,
                Machado R&nbsp;729 and Nkomazi R&nbsp;405.
              </td>
              <td><A s={SRC.trac}>TRAC N4</A></td>
            </tr>
            <tr>
              <td>Eswatini</td>
              <td>Road toll for foreign heavy vehicles, from 1 Oct 2025: E&nbsp;400 for three axles and E&nbsp;450 for four axles, the heaviest class listed. Trucks entering through Mhlumeni or Lomahasha pay the equivalent of US$&nbsp;100 per truck.</td>
              <td><A s={SRC.eswatini}>Eswatini Tourism Authority</A></td>
            </tr>
            <tr>
              <td>Lesotho</td>
              <td>Toll gate fee for foreign class 4 vehicles (four or more axles): M&nbsp;450, effective 1 Apr 2022.</td>
              <td><A s={SRC.lesotho}>Road Fund (Lesotho)</A></td>
            </tr>
            <tr>
              <td>Botswana</td>
              <td>A single transit permit from the Department of Road Transport and Safety, also issued at the border. Fees per the gazetted schedule.</td>
              <td><A s={SRC.botswana}>Government of Botswana</A></td>
            </tr>
          </tbody>
        </table>

        <h2>Time is a cost too</h2>
        <p>
          Border queues and clearing add hours, and sometimes days, to a trip. Those hours carry the truck&apos;s fixed costs and the
          driver&apos;s allowance. Work out your own average crossing time per border post from past trips, and price it in as time, not
          distance.
        </p>

        <h2>VAT on a cross-border load</h2>
        <p>
          International transport of goods, into or out of South Africa, is zero-rated for VAT. A local leg can also be zero-rated when the
          same transporter is contracted to the same customer for the whole journey (<A s={SRC.vat404}>SARS VAT 404</A>, section 6.3.8). Keep
          the documents that prove the goods crossed the border, and check your own case with a tax practitioner.
        </p>

        <h2>Currencies</h2>
        <p>
          Foreign charges are paid in the local currency. Record each charge in the currency you paid it in, convert at the rate on the day
          you paid, and quote the customer in the currency your contract uses. If the contract is in another currency, agree who carries the
          exchange risk before the truck leaves.
        </p>

        <h2>Checklist for a cross-border quote</h2>
        <ul>
          <li>C-BRTA permit, spread over the trips it covers</li>
          <li>Foreign road charges and tolls for every country on the route, both ways</li>
          <li>South African tolls to and from the border</li>
          <li>Crossing time, priced as fixed cost and allowance</li>
          <li>The empty return, unless there is a backload</li>
          <li>VAT treatment agreed and documented</li>
        </ul>
      </>
    ),
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const GUIDES_SORTED = [...GUIDES].sort((a, b) => (a.published < b.published ? 1 : -1));
