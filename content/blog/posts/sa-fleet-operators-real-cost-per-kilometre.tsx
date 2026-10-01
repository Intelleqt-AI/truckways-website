import { SRC } from '../sources';
import { A, type Post } from '../types';

const post: Post = {
  slug: 'sa-fleet-operators-real-cost-per-kilometre',
  h1: { a: "Your truck's real cost per kilometre.", b: 'Worked out line by line.' },
  title: "How to work out your truck's real cost per kilometre",
  seoTitle: 'Truck cost per kilometre in South Africa (2026)',
  description:
    'What each kilometre really costs your truck: diesel, tolls, tyres, maintenance and fixed costs, worked out at the September 2026 diesel price.',
  summary: 'Diesel, tolls, tyres and fixed costs, turned into one rand figure per kilometre, with a worked example.',
  category: 'Costs',
  keyword: 'truck cost per kilometre South Africa',
  published: '2026-02-13',
  reviewed: '2026-09-30',
  readingMinutes: 7,
  related: { href: '/product/quoting', label: 'How TruckWys prices a load from these costs' },
  faq: [
    {
      q: 'What is the average cost per kilometre for a truck in South Africa?',
      a: "There is no single figure that fits every truck. It depends on the vehicle, the load, the lane and how many kilometres the truck runs in a month. Work out your own from your fuel, tyre, maintenance and fixed costs, and use the Road Freight Association's Vehicle Cost Schedule as a cross-check.",
    },
    {
      q: 'Should tolls be part of my cost per kilometre?',
      a: 'Work tolls out per lane rather than as a fleet average, because they depend on the route and the vehicle class. Add them to the cost per kilometre for that lane, excluding VAT if you are a VAT vendor.',
    },
    {
      q: 'How often should I recalculate my cost per kilometre?',
      a: 'Update diesel every month, when the price changes on the first Wednesday, tolls every March when SANRAL tariffs change, and fixed costs whenever a finance deal, insurance premium or wage agreement changes.',
    },
  ],
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
      <p>
        This post turns costs into a rate. For the full monthly and yearly budget of owning a truck, see{' '}
        <a href="/blog/true-cost-running-truck-fleet-south-africa-2026">the true cost of running a truck</a>. To put the figure to work, follow
        the <a href="/blog/how-to-quote-freight-rates-south-africa-ai">worked quote</a>, or see how{' '}
        <a href="/product/quoting">TruckWys prices a load</a> from the same inputs.
      </p>
    </>
  ),
};

export default post;
