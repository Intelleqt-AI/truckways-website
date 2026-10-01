import { SRC } from '../sources';
import { A, type Post, type Source } from '../types';

/** Sources only this post cites. Checked 1 Oct 2026. */
const S = {
  sarbSep: {
    name: 'SARB: Statement of the Monetary Policy Committee, September 2026',
    url: 'https://www.resbank.co.za/en/home/publications/publication-detail-pages/statements/monetary-policy-statements/2026/september',
  },
  moneywebPrime: {
    name: 'Moneyweb, 23 Sep 2026: SARB ups repo rate to 7.25%',
    url: 'https://www.moneyweb.co.za/news/economy/sarb-ups-repo-rate-to-7-25/',
  },
  sarsIn47: {
    name: 'SARS Interpretation Note 47 (Issue 5): wear-and-tear or depreciation allowance',
    url: 'https://www.sars.gov.za/wp-content/uploads/Legal/Notes/LAPD-IntR-IN-2012-47-Wear-And-Tear-Depreciation-Allowance.pdf',
  },
  nbcrfliWages: {
    name: 'NBCRFLI: minimum wage increases, across-the-board increases and allowances, 1 March 2025 to 28 February 2027',
    url: 'https://nbcrfli.org.za/files/Wage%20Table/Minimum%20Wage%20Increases_%20Across-the-Board%20Increases_and%20Allowances%20(1%20March%202025%20to%2028%20February%202027).pdf',
  },
  nrta: {
    name: 'National Road Traffic Act 93 of 1996 (sections 32 and 45 to 49), RTMC',
    url: 'https://www.rtmc.co.za/images/rtmc/docs/legislation/National%20Road%20Traffic%20Act.pdf',
  },
  nrtr: {
    name: 'National Road Traffic Regulations, 2000 (GNR.225), consolidated copy, KwaZulu-Natal Department of Transport',
    url: 'http://www.kzntransport.gov.za/reading_room/acts/national/NRTA%20Regs%20Part%201.pdf',
  },
  wcPrdp: { name: 'Western Cape Government: professional driving permit', url: 'https://www.westerncape.gov.za/service/professional-driving-permit' },
  aartoPhase2: { name: 'SAnews, 1 Jul 2026: implementation of AARTO continues', url: 'https://www.sanews.gov.za/south-africa/implementation-aarto-continues' },
  aarto2027: {
    name: 'Arrive Alive: implementation of AARTO and Amendment Act, 1 July 2026, 62 municipalities',
    url: 'https://www.arrivealive.co.za/news.aspx?s=1&i=77831&name=implementation-of-aarto-and-amendment-act-1-july-2026-62-municipalities',
  },
  rtms: { name: 'RTMS: about the Road Transport Management System', url: 'https://rtms-sa.org/about-us/' },
} as const satisfies Record<string, Source>;

const post: Post = {
  slug: 'true-cost-running-truck-fleet-south-africa-2026',
  h1: { a: 'What it costs to run a truck in 2026.', b: 'The full annual budget, line by line.' },
  title: 'The true cost of running a truck and a small fleet in South Africa in 2026',
  seoTitle: 'Cost of running a truck in South Africa (2026)',
  description:
    'The full 2026 budget to own and run a heavy truck in South Africa: finance, driver, insurance, COF, diesel, tyres, overheads, and when each cost changes.',
  summary:
    'Every cost line of owning and running a heavy truck for a year, which are fixed and which move, when each one changes, and a worked budget for one interlink.',
  category: 'Costs',
  keyword: 'cost of running a truck in South Africa 2026',
  published: '2026-01-13',
  reviewed: '2026-10-01',
  readingMinutes: 7,
  related: { href: '/product/reports', label: 'How TruckWys reports profit by lane and month' },
  sources: [
    SRC.dmprPrices,
    SRC.dmprSep,
    SRC.citizenSep,
    S.sarbSep,
    S.moneywebPrime,
    S.sarsIn47,
    SRC.nbcrfli,
    S.nbcrfliWages,
    S.nrta,
    S.nrtr,
    S.wcPrdp,
    SRC.sanralPoster,
    S.aartoPhase2,
    S.aarto2027,
    S.rtms,
  ],
  faq: [
    {
      q: 'How much does it cost to run an interlink truck per month in South Africa?',
      a: 'It depends on your finance deal, kilometres and consumption. With the example inputs in this guide (12\u00a0000 km a month, 46 litres per 100 km, diesel at R\u00a030,05 a litre) the total comes to about R\u00a0297\u00a0876 a month before tolls. Use your own figures.',
    },
    {
      q: 'Which truck costs are fixed and which are variable?',
      a: 'Fixed costs are paid whether the truck moves or not: finance or depreciation, the driver, insurance, licences, tracking and your share of overheads. Variable costs grow with every kilometre: diesel, tyres, maintenance and tolls.',
    },
    {
      q: 'Do I need an operator card for my truck?',
      a: 'Yes, if it is a goods vehicle with a gross vehicle mass over 3\u00a0500 kg. The owner must be registered as the operator and the operator card is valid until the vehicle licence disc expires.',
    },
    {
      q: 'Is RTMS compulsory for transport companies?',
      a: 'No. The Road Transport Management System is a voluntary, industry-led self-regulation scheme, although some customers ask for it.',
    },
  ],
  body: (
    <>
      <p>
        A heavy truck costs you money every day, whether it moves or not. Before you can quote a rate, plan a second truck or talk to the
        bank, you need the full annual budget: every cost line, where to find the figure, and the date in the year when it changes.
      </p>
      <p>
        This guide is that budget. If you want to turn it into a rate per kilometre for quoting, the next step is our guide to{' '}
        <a href="/blog/sa-fleet-operators-real-cost-per-kilometre">working out your real cost per kilometre</a>. The two use the same example
        inputs, so the numbers match.
      </p>

      <h2>The cost lines, and where to find each figure</h2>
      <p>Split the budget into two groups. Fixed costs arrive every month whatever the truck does. Variable costs grow with every kilometre.</p>
      <table className="wide">
        <caption>Cost lines for one heavy truck</caption>
        <thead>
          <tr>
            <th scope="col">Cost line</th>
            <th scope="col">Fixed or variable</th>
            <th scope="col">Where the figure comes from</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Finance instalment or depreciation</td><td>Fixed</td><td>Your finance agreement, or your asset register</td></tr>
          <tr><td>Driver wage and benefits</td><td>Fixed</td><td>Payroll, at or above the bargaining council minimum</td></tr>
          <tr><td>Insurance</td><td>Fixed</td><td>Your policy schedule</td></tr>
          <tr><td>Licence, operator card and roadworthy</td><td>Fixed</td><td>Licence renewal notice and testing station invoice</td></tr>
          <tr><td>Tracking subscription</td><td>Fixed</td><td>Your tracking contract</td></tr>
          <tr><td>Share of overheads</td><td>Fixed</td><td>Your management accounts</td></tr>
          <tr><td>Diesel</td><td>Variable</td><td>Fuel slips or fuel card statements, and the monthly price</td></tr>
          <tr><td>Tyres</td><td>Variable</td><td>Tyre supplier invoices over at least a year</td></tr>
          <tr><td>Maintenance and repairs</td><td>Variable</td><td>Workshop invoices over at least a year</td></tr>
          <tr><td>Tolls</td><td>Variable</td><td>SANRAL tariffs for your vehicle class, per lane</td></tr>
        </tbody>
      </table>

      <h2>Finance and depreciation</h2>
      <p>
        For a financed truck the instalment is usually the biggest fixed line, and most truck finance is linked to the prime lending rate.
        On 23 September 2026 the Reserve Bank raised the repo rate by 25 basis points to 7,25%, effective 25 September (
        <A s={S.sarbSep}>SARB</A>), which took the banks&apos; prime rate to 10,75% (<A s={S.moneywebPrime}>Moneyweb</A>). If your deal floats
        with prime, every move changes your instalment. As a simple example, on an outstanding balance of R&nbsp;2&nbsp;000&nbsp;000, a quarter of a
        percentage point is about R&nbsp;5&nbsp;000 a year in interest.
      </p>
      <p>
        If you own a truck outright, budget a depreciation figure instead, so the budget still carries the cost of replacing it. For tax,
        SARS&apos;s schedule of write-off periods lists heavy-duty trucks at three years and trailers at five (<A s={S.sarsIn47}>SARS</A>). That
        is a tax allowance, not the working life of the truck, so for budgeting use the number of years you really expect to keep it. Check
        your own case with a tax practitioner.
      </p>

      <h2>The driver</h2>
      <p>
        Wages in road freight are set by the main collective agreement of the bargaining council (<A s={SRC.nbcrfli}>NBCRFLI</A>). The current
        agreement runs from 1 March 2025 to 28 February 2027. From 1 March 2026 it gave a 6% across-the-board increase on actual wages for
        the driver grades, with new minimums and higher allowances (<A s={S.nbcrfliWages}>NBCRFLI wage schedule</A>). Budget the full cost
        to you, not only the wage: allowances, overtime, and the employer contributions to the council&apos;s funds.
      </p>

      <h2>Licences, operator card, COF and PrDP</h2>
      <p>The compliance costs are small next to diesel, but missing one can stop a truck.</p>
      <ul>
        <li>
          <strong>Operator registration.</strong> The owner of a vehicle of a prescribed class must be registered as its operator, and the
          registering authority issues an operator card that must be displayed on the vehicle (<A s={S.nrta}>National Road Traffic Act</A>,
          sections 45 to 47). Goods vehicles over 3&nbsp;500 kg are one of those classes, and the operator card is valid until the vehicle
          licence disc expires (<A s={S.nrtr}>National Road Traffic Regulations</A>, regulations 265 and 267).
        </li>
        <li>
          <strong>Roadworthy certificate (COF).</strong> A goods vehicle over 3&nbsp;500 kg needs a roadworthy certificate, and it is valid
          until the licence disc expires (<A s={S.nrtr}>regulations 142 and 145</A>). In practice that means a test at a testing
          station every year, before you renew the licence.
        </li>
        <li>
          <strong>Professional driving permit (PrDP).</strong> Nobody may drive a vehicle that has a registered operator without a PrDP (
          <A s={S.nrta}>section 32</A>). Drivers of goods vehicles over 3&nbsp;500 kg need one, with a medical certificate, and must renew it
          before the expiry date printed on the card (<A s={S.wcPrdp}>Western Cape Government</A>). Decide who pays for the medical and the
          day off.
        </li>
      </ul>
      <p>
        Licence fees differ by province and by vehicle mass, so take the figure from your own renewal notices rather than a national
        average.
      </p>

      <h2>The annual calendar of cost changes</h2>
      <p>A budget is only right on the day you make it. These are the dates when lines move:</p>
      <ul>
        <li>
          <strong>First Wednesday of every month:</strong> the regulated diesel price changes (<A s={SRC.dmprPrices}>DMPR</A>). On 2 September
          2026, 50 ppm diesel rose by 314,90 cents a litre (<A s={SRC.dmprSep}>DMPR</A>), to R&nbsp;30,05 a litre inland (
          <A s={SRC.citizenSep}>The Citizen</A>). Check the new price each month before you quote.
        </li>
        <li>
          <strong>1 March:</strong> SANRAL&apos;s current toll tariffs took effect on 1 March 2026 (<A s={SRC.sanralPoster}>SANRAL</A>), and the
          bargaining council&apos;s wage increases apply from 1 March under the current agreement.
        </li>
        <li>
          <strong>Your licence disc date, per truck:</strong> licence renewal, roadworthy test and operator card, all on the same cycle.
        </li>
        <li>
          <strong>Your insurance renewal date:</strong> ask for the renewal terms early enough to compare.
        </li>
        <li>
          <strong>Each driver&apos;s PrDP expiry:</strong> keep a list, with the medical booked before the date.
        </li>
        <li>
          <strong>Reserve Bank rate decisions:</strong> if your finance floats with prime, rework the instalment after each change.
        </li>
      </ul>
      <p>
        For the detail of what is in the diesel price and how to pass increases on, see{' '}
        <a href="/blog/fuel-cost-management-sa-fleets-strategies">diesel costs for South African fleets</a>.
      </p>

      <h2>Overheads beyond the truck</h2>
      <p>Every truck carries a share of the costs that keep the business running:</p>
      <ul>
        <li>yard or depot rent, security, water and electricity</li>
        <li>office and admin staff: dispatch, invoicing, debtors, payroll</li>
        <li>software: tracking, a TMS or spreadsheets, accounting, invoicing</li>
        <li>your accountant or bookkeeper, bank charges and audit fees</li>
        <li>compliance admin: renewals, driver files and medicals, and traffic fines</li>
      </ul>
      <p>
        On traffic fines: phase two of AARTO started on 1 July 2026 in 62 local and metropolitan municipalities (
        <A s={S.aartoPhase2}>SAnews</A>), with nationwide rollout, including the points demerit system, planned for 2027 (
        <A s={S.aarto2027}>Arrive Alive</A>). Keep a simple process to match every infringement notice to the driver and the load. Some
        customers also ask for RTMS accreditation. It is an industry-led, voluntary self-regulation scheme (<A s={S.rtms}>RTMS</A>), so treat
        the audit cost as a commercial choice, not a legal one.
      </p>

      <h2>Worked annual budget for one interlink</h2>
      <p>
        These are <strong>example inputs, not benchmarks</strong>, the same ones as in our cost per kilometre guide: finance R&nbsp;38&nbsp;000
        a month, driver R&nbsp;24&nbsp;000, insurance R&nbsp;9&nbsp;500, share of admin R&nbsp;8&nbsp;000, licences and permits R&nbsp;1&nbsp;500, tracking
        R&nbsp;600, 12&nbsp;000 km a month at 46 litres per 100 km, diesel at the September 2026 inland price of R&nbsp;30,05, tyres R&nbsp;2,40 per km and
        maintenance R&nbsp;1,80 per km.
      </p>
      <table>
        <caption>One interlink, one year (example inputs)</caption>
        <thead>
          <tr>
            <th scope="col">Cost line</th>
            <th scope="col">Per month</th>
            <th scope="col">Per year</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Finance instalment</td><td>R&nbsp;38&nbsp;000</td><td>R&nbsp;456&nbsp;000</td></tr>
          <tr><td>Driver wage and benefits</td><td>R&nbsp;24&nbsp;000</td><td>R&nbsp;288&nbsp;000</td></tr>
          <tr><td>Insurance</td><td>R&nbsp;9&nbsp;500</td><td>R&nbsp;114&nbsp;000</td></tr>
          <tr><td>Share of office and admin</td><td>R&nbsp;8&nbsp;000</td><td>R&nbsp;96&nbsp;000</td></tr>
          <tr><td>Licences and permits</td><td>R&nbsp;1&nbsp;500</td><td>R&nbsp;18&nbsp;000</td></tr>
          <tr><td>Tracking</td><td>R&nbsp;600</td><td>R&nbsp;7&nbsp;200</td></tr>
          <tr><th scope="row">Fixed costs</th><td><strong>R&nbsp;81&nbsp;600</strong></td><td><strong>R&nbsp;979&nbsp;200</strong></td></tr>
          <tr><td>Diesel (5&nbsp;520 litres a month)</td><td>R&nbsp;165&nbsp;876</td><td>R&nbsp;1&nbsp;990&nbsp;512</td></tr>
          <tr><td>Tyres</td><td>R&nbsp;28&nbsp;800</td><td>R&nbsp;345&nbsp;600</td></tr>
          <tr><td>Maintenance and repairs</td><td>R&nbsp;21&nbsp;600</td><td>R&nbsp;259&nbsp;200</td></tr>
          <tr><th scope="row">Variable costs</th><td><strong>R&nbsp;216&nbsp;276</strong></td><td><strong>R&nbsp;2&nbsp;595&nbsp;312</strong></td></tr>
          <tr><th scope="row">Total before tolls</th><td><strong>R&nbsp;297&nbsp;876</strong></td><td><strong>R&nbsp;3&nbsp;574&nbsp;512</strong></td></tr>
        </tbody>
      </table>
      <p>
        Tolls are left out on purpose: they depend entirely on your lanes and vehicle class, so add them per route. Over 144&nbsp;000 km a
        year the total works out to R&nbsp;24,82 per km, the same figure as in the per-km guide.
      </p>
      <div className="b-calc">
        <p>R&nbsp;3&nbsp;574&nbsp;512 ÷ 144&nbsp;000 km = <strong>R&nbsp;24,82 per km</strong>, before tolls and empty kilometres</p>
      </div>
      <p>
        Two things stand out. Diesel is more than half of the total, so a one-rand move in the price is worth about R&nbsp;66&nbsp;000 a year
        on this truck (5&nbsp;520 litres × 12 months). And the fixed costs, R&nbsp;81&nbsp;600 a month, are due whether the truck runs 12&nbsp;000 km or
        stands in the yard for a week.
      </p>

      <h2>What a second and a fifth truck add</h2>
      <p>
        Each new truck brings its own finance, driver, insurance, licence, tracking, diesel, tyres and maintenance. Those lines grow in
        step with the fleet. The overheads do not: the yard, the office, the software and the accountant are shared. But they do not stay
        flat either. They rise in steps, usually when you hire your first dispatcher or admin person and move to a proper yard.
      </p>
      <p>
        Here is the same interlink in a five-truck fleet. All five run like the truck above, so each one costs R&nbsp;289&nbsp;876 a month in
        its own lines (the R&nbsp;297&nbsp;876 total less the R&nbsp;8&nbsp;000 overhead share). The overheads below are{' '}
        <strong>example inputs, not benchmarks</strong>.
      </p>
      <table>
        <caption>Shared overheads for a five-truck fleet (example inputs)</caption>
        <thead>
          <tr>
            <th scope="col">Overhead</th>
            <th scope="col">Per month</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Dispatcher and admin person (invoicing, debtors, driver files)</td><td>R&nbsp;18&nbsp;000</td></tr>
          <tr><td>Yard rent and security</td><td>R&nbsp;8&nbsp;000</td></tr>
          <tr><td>Software: accounting, invoicing and load-to-cash (tracking is per truck, above)</td><td>R&nbsp;11&nbsp;000</td></tr>
          <tr><td>Accountant or bookkeeper</td><td>R&nbsp;3&nbsp;000</td></tr>
          <tr><td>Reserve for insurance excesses</td><td>R&nbsp;3&nbsp;000</td></tr>
          <tr><td>Office, phones and bank charges</td><td>R&nbsp;2&nbsp;000</td></tr>
          <tr><th scope="row">Total shared overheads</th><td><strong>R&nbsp;45&nbsp;000</strong></td></tr>
          <tr><th scope="row">Per truck</th><td><strong>R&nbsp;9&nbsp;000</strong></td></tr>
        </tbody>
      </table>
      <table>
        <caption>Annual cost per truck, one truck against five (example inputs, before tolls)</caption>
        <thead>
          <tr>
            <th scope="col">Per truck, per year</th>
            <th scope="col">1 truck</th>
            <th scope="col">5 trucks</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>The truck&apos;s own costs (R&nbsp;289&nbsp;876 × 12)</td><td>R&nbsp;3&nbsp;478&nbsp;512</td><td>R&nbsp;3&nbsp;478&nbsp;512</td></tr>
          <tr><td>Share of overheads</td><td>R&nbsp;96&nbsp;000</td><td>R&nbsp;108&nbsp;000</td></tr>
          <tr><th scope="row">Total per truck</th><td><strong>R&nbsp;3&nbsp;574&nbsp;512</strong></td><td><strong>R&nbsp;3&nbsp;586&nbsp;512</strong></td></tr>
          <tr><td>Per km, at 144&nbsp;000 km a year</td><td>R&nbsp;24,82</td><td>R&nbsp;24,91</td></tr>
        </tbody>
      </table>
      <p>
        The whole five-truck fleet costs R&nbsp;17&nbsp;932&nbsp;560 a year in this example (5 × R&nbsp;3&nbsp;478&nbsp;512 plus R&nbsp;540&nbsp;000 of overheads).
        The lesson is in the small difference: in these inputs, each truck in the five-truck fleet costs R&nbsp;12&nbsp;000 a year more than the
        single truck, because the R&nbsp;8&nbsp;000 for one truck leaves out the owner&apos;s own time, and the bigger fleet pays people and
        systems to do that work. Scale does not make a truck cheap. What moves cost per truck far more is kilometres, consumption and empty running.
      </p>
      <p>
        Before you add a truck, rebuild the budget with the overhead you will really need at the new size, and check that the work you
        have lined up covers the extra fixed costs from the first month.
      </p>

      <h2>Keep the budget honest</h2>
      <ul>
        <li>Compare budget with actual every month, per truck, not only for the whole fleet.</li>
        <li>Update diesel monthly, tolls and wages each March, and finance after every rate change.</li>
        <li>Count the kilometres you are not paid for: an empty return is a full cost with no revenue.</li>
        <li>Look at profit per lane and per customer, not only the total.</li>
      </ul>
      <p>
        If you want to see which lanes and customers carry these costs and which do not, TruckWys <a href="/product/reports">reports</a>{' '}
        show profit and loss and revenue by lane from the loads you invoice. Whatever tool you use, the budget above is where the numbers
        start.
      </p>
    </>
  ),
};

export default post;
