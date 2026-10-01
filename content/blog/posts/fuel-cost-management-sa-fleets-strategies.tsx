import { SRC } from '../sources';
import { A, type Post, type Source } from '../types';

/** Sources only this post cites. Checked 1 Oct 2026. */
const S = {
  structure: { name: 'DMPR: fuel price structure', url: 'https://www.dmpr.gov.za/Services/Petroleum-Resources/Fuel-Price-Structure' },
  bfp: {
    name: 'SAnews, 1 Apr 2026: how the basic fuel price is calculated',
    url: 'https://www.sanews.gov.za/features-south-africa/how-basic-fuel-price-calculated-breakdown',
  },
} as const satisfies Record<string, Source>;

const post: Post = {
  slug: 'fuel-cost-management-sa-fleets-strategies',
  h1: { a: 'Diesel costs for South African fleets.', b: 'What you can control.' },
  title: 'Diesel costs for South African fleets: what you pay for, and what you can control',
  seoTitle: 'Diesel price for trucks in South Africa (2026)',
  description:
    "What is in the 2026 diesel price, how the monthly adjustment works, why road freight gets no refund, and how to pass rises on with a fuel clause.",
  summary: 'The levies in the price, the monthly adjustment, the diesel refund question and a simple fuel surcharge formula.',
  category: 'Costs',
  keyword: 'diesel price trucks South Africa',
  published: '2026-02-07',
  reviewed: '2026-10-01',
  readingMinutes: 6,
  related: { href: '/product/quoting', label: "How TruckWys prices diesel into each quote" },
  faq: [
    {
      q: 'When does the diesel price change in South Africa?',
      a: 'The regulated wholesale price is adjusted once a month and takes effect on the first Wednesday. The Department of Mineral and Petroleum Resources announces the adjustment a few days before.',
    },
    {
      q: 'Can a road freight business claim the diesel refund?',
      a: 'No. The diesel refund is limited to certain primary and marine activities, rail freight and large power plants. Road freight is not on the list, so price the full pump price.',
    },
    {
      q: 'How do I work out a fuel surcharge?',
      a: "Agree a base diesel price and the fuel share of the rate. The surcharge is this month's price minus the base price, divided by the base price, times the fuel share. Put the formula in the contract.",
    },
  ],
  sources: [SRC.dmprSep, SRC.dmprPrices, SRC.citizenSep, SRC.sarsBudget, SRC.rafLevy, SRC.levyRelief, SRC.dieselRefund, S.structure, S.bfp],
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
      <div className="b-calc">
        <p>393 c + 225 c + 23 c = 641 c a litre</p>
      </div>
      <p>
        Together that is R&nbsp;6,41 a litre, about 21% of the R&nbsp;30,05 inland price for 50 ppm diesel in September 2026. That part of
        the price only changes when the budget changes it, so most of the month-to-month movement comes from the rest: the international
        product price and the exchange rate.
      </p>
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
        Inland diesel costs more because of the cost of moving fuel from the coast. In September 2026, 50 ppm diesel was R&nbsp;28,79 a
        litre at the coast against R&nbsp;30,05 inland, a gap of R&nbsp;1,26. For 500 ppm the prices were R&nbsp;28,24 and R&nbsp;29,11, a gap
        of 87 cents (<A s={SRC.citizenSep}>The Citizen</A>). If you refuel at both ends of a long route, price each leg at the price you will
        actually pay.
      </p>

      <h2>What a rand a litre does to one truck</h2>
      <p>
        Small changes per litre add up quickly over a month. Take one truck running 12&nbsp;000 km a month at an average of 46 litres per
        100 km. These are example inputs, not benchmarks; use your own.
      </p>
      <div className="b-calc">
        <p>12&nbsp;000 km × 0,46 L/km = 5&nbsp;520 L a month</p>
        <p>
          A R&nbsp;1 a litre move = <strong>R&nbsp;5&nbsp;520 a month</strong> for that truck
        </p>
        <p>September 2026 rise of 314,90 c: 5&nbsp;520 L × R&nbsp;3,149 = <strong>R&nbsp;17&nbsp;382,48 a month</strong></p>
      </div>
      <p>
        Multiply by the number of trucks you run. If your rates did not move in September, that is roughly what came off your margin, per
        truck, every month until they do.
      </p>

      <h2>How to read the monthly announcement</h2>
      <p>
        The department adjusts fuel prices on the first Wednesday of the month (<A s={S.structure}>DMPR</A>) and publishes a media statement a
        few days before. The September 2026 statement, for example, was issued on Monday 31 August for prices effective 2 September (
        <A s={SRC.dmprSep}>DMPR</A>).
      </p>
      <p>
        The adjustment is worked out from the gap between the international cost of fuel and the cost built into the current price. The
        Central Energy Fund calculates it daily for the department. When the international basic fuel price is higher than the one in the
        price structure, there is an under-recovery: buyers are paying too little that day. When it is lower, there is an over-recovery. The
        daily figures are averaged over the review period to give the next month&apos;s adjustment (<A s={S.bfp}>SAnews</A>), so the price
        you pay reflects roughly the previous month&apos;s oil prices and exchange rate (<A s={S.structure}>DMPR</A>). A slate levy balances
        the accumulated over- and under-recoveries over time; in September 2026 it added 83,28 cents a litre (<A s={SRC.dmprSep}>DMPR</A>).
      </p>
      <p>Three things to read in each statement:</p>
      <ul>
        <li>
          <strong>The right grade.</strong> Diesel is listed as 0,05% sulphur (500 ppm) and 0,005% sulphur (50 ppm), and they move by different
          amounts. Use the grade your trucks actually run on.
        </li>
        <li>
          <strong>The cents per litre change.</strong> Multiply it by your monthly litres to see the effect before it hits.
        </li>
        <li>
          <strong>The reasons.</strong> Oil prices, the exchange rate and any levy changes tell you whether a move is likely to reverse or last.
        </li>
      </ul>
      <p>
        Mid-month estimates in the press are based on the daily figures and can change until the department announces the official
        adjustment. Plan with them, but reprice on the official number.
      </p>

      <h2>Pass increases on with a fuel clause</h2>
      <p>
        For contracts that run longer than a month, agree how the rate follows diesel before the first load. A workable clause names five
        things:
      </p>
      <ul>
        <li>
          <strong>Base price.</strong> The diesel price the rate was built on, for example the 50 ppm price in the month the contract was
          signed.
        </li>
        <li>
          <strong>Reference price.</strong> A public source both sides can check: the DMPR price for 50 ppm diesel, inland or coastal, whichever
          matches where you fill up (<A s={SRC.dmprPrices}>DMPR</A>).
        </li>
        <li>
          <strong>Fuel share.</strong> The part of the rate that is diesel, from your own cost per kilometre.
        </li>
        <li>
          <strong>Review date and threshold.</strong> When the adjustment is applied (each month after the DMPR change, for example) and how
          big a move triggers it, so small changes do not mean a new rate every month.
        </li>
        <li>
          <strong>Both directions.</strong> The rate goes down when diesel falls past the threshold, too. Customers accept a clause more easily
          when it is fair both ways.
        </li>
      </ul>
      <p>Then adjust the rate when diesel moves:</p>
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
      <p>
        Diesel is one line in the <a href="/blog/sa-fleet-operators-real-cost-per-kilometre">cost per kilometre</a>. To see how each
        month&apos;s price flows into a load price, read the <a href="/blog/how-to-quote-freight-rates-south-africa-ai">worked quote</a>.
      </p>
    </>
  ),
};

export default post;
