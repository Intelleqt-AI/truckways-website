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
  reviewed: '2026-10-01',
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
        Work this out per truck, not as a fleet average. Say three interlinks each run 12&nbsp;000 km a month at 44, 46 and 52 litres per
        100 km (example inputs). The fleet average is 47,3 litres per 100 km, or R&nbsp;14,22 per km. But the thirsty truck really costs
        R&nbsp;15,63 per km in diesel and the best one R&nbsp;13,22.
      </p>
      <div className="b-calc">
        <p>0,52 L/km × R&nbsp;30,05 = R&nbsp;15,63 per km, against the fleet average of R&nbsp;14,22</p>
        <p>R&nbsp;1,40 per km × 570 km = about <strong>R&nbsp;800 under-costed</strong> on one Johannesburg to Durban trip</p>
      </div>
      <p>
        Quote that truck on the average and you lose about R&nbsp;800 a trip before you start. Quote the efficient truck on the average and you
        price yourself about R&nbsp;1,00 per km above what you need to.
      </p>
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
      <p>
        Finance, the driver (at or above the bargaining council minimums, <A s={SRC.nbcrfli}>NBCRFLI</A>), insurance, licences, tracking
        and a share of your overheads are paid every month whether the truck moves or not. Fixed costs in our example come to
        R&nbsp;81&nbsp;600 a month (the line-by-line budget is in{' '}
        <a href="/blog/true-cost-running-truck-fleet-south-africa-2026">the true cost of running a truck</a>).
      </p>
      <p>At 12&nbsp;000 km a month, that is R&nbsp;81&nbsp;600 ÷ 12&nbsp;000 = <strong>R&nbsp;6,80 per km</strong>.</p>
      <h3>Kilometres decide the fixed cost per km</h3>
      <p>
        The R&nbsp;81&nbsp;600 does not change when the truck runs less, so the cost per kilometre does. Here is the same truck at different
        monthly distances, with the variable costs above (diesel R&nbsp;13,82, tyres R&nbsp;2,40, maintenance R&nbsp;1,80: R&nbsp;18,02 per km).
      </p>
      <table className="wide">
        <caption>Fixed cost per km at different monthly kilometres (example inputs)</caption>
        <thead>
          <tr>
            <th scope="col">Km per month</th>
            <th scope="col">Fixed cost per km</th>
            <th scope="col">Total cost per km, before tolls</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>8&nbsp;000</td><td>R&nbsp;10,20</td><td>R&nbsp;28,22</td></tr>
          <tr><td>10&nbsp;000</td><td>R&nbsp;8,16</td><td>R&nbsp;26,18</td></tr>
          <tr><td>12&nbsp;000</td><td>R&nbsp;6,80</td><td>R&nbsp;24,82</td></tr>
          <tr><td>14&nbsp;000</td><td>R&nbsp;5,83</td><td>R&nbsp;23,85</td></tr>
        </tbody>
      </table>
      <p>
        A truck that loses a week to a breakdown or waits for loads can drop from 12&nbsp;000 to 8&nbsp;000 km in a month, and its cost per
        kilometre rises by R&nbsp;3,40. Use the kilometres the truck really runs over the last few months, not the kilometres you hope for.
      </p>

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

      <h2>4. From cost per km to a minimum rate per loaded km</h2>
      <p>
        The figures above are per kilometre driven. Customers pay for loaded kilometres. If one kilometre in five is empty, your cost per
        paid kilometre is R&nbsp;24,82 ÷ 0,8 = <strong>R&nbsp;31,03</strong> before tolls. This is the number that decides whether a lane
        works, and it is the one most often left out.
      </p>
      <p>On a tolled lane, add the tolls first, then spread the empty running over the loaded kilometres:</p>
      <div className="b-calc">
        <p>Cost per km on the lane ÷ share of kilometres loaded = minimum rate per loaded km</p>
        <p>R&nbsp;26,76 ÷ 0,8 = <strong>R&nbsp;33,45 per loaded km</strong> on the N3 example</p>
        <p>570 loaded km × R&nbsp;33,45 = <strong>R&nbsp;19&nbsp;066,50</strong>, excl. VAT, before any margin</p>
      </div>
      <p>
        This assumes the empty kilometres run on the same tolled road. If the truck comes back on a different route, work out that
        leg&apos;s cost separately. The result is a floor, not a price: a load below it loses money on every kilometre. How much margin to
        add on top, and when to walk away from a lane, is a pricing decision, covered in{' '}
        <a href="/blog/fleet-profitability-south-africa-ai-powered-pricing">how to price loads profitably</a>.
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
