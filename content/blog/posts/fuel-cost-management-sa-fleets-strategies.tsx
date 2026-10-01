import { SRC } from '../sources';
import { A, type Post } from '../types';

const post: Post = {
  slug: 'fuel-cost-management-sa-fleets-strategies',
  h1: { a: 'Diesel costs for South African fleets.', b: 'What you pay for, and what you control.' },
  title: 'Diesel costs for South African fleets: what you pay for, and what you can control',
  seoTitle: 'Diesel costs for trucks in South Africa (2026)',
  description:
    "What is in the 2026 diesel price, how the monthly adjustment works, why road freight gets no refund, and how to pass rises on with a fuel clause.",
  summary: 'The levies in the price, the monthly adjustment, the diesel refund question and a simple fuel surcharge formula.',
  category: 'Costs',
  keyword: 'diesel cost trucks South Africa',
  published: '2026-02-07',
  reviewed: '2026-09-30',
  readingMinutes: 6,
  related: { href: '/product/quoting', label: "How TruckWys prices diesel into each quote" },
  faq: [
    {
      q: 'When does the diesel price change in South Africa?',
      a: 'The regulated price is adjusted once a month and takes effect on the first Wednesday. The Department of Mineral and Petroleum Resources announces the adjustment a few days before.',
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
      <p>
        Diesel is one line in the <a href="/blog/sa-fleet-operators-real-cost-per-kilometre">cost per kilometre</a>. To see how each
        month&apos;s price flows into a load price, read the <a href="/blog/how-to-quote-freight-rates-south-africa-ai">worked quote</a>.
      </p>
    </>
  ),
};

export default post;
