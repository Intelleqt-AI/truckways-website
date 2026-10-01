import { SRC } from '../sources';
import { A, type Post } from '../types';

const post: Post = {
  slug: 'fleet-profitability-south-africa-ai-powered-pricing',
  h1: { a: 'How to price loads for profit.', b: 'Floors, lanes and when to say no.' },
  title: 'How to price loads for profit: floors, lanes and when to say no',
  seoTitle: 'Freight pricing strategy: how to price loads',
  description:
    'A freight pricing strategy for SA hauliers: a minimum rate per lane, which lanes and customers pay, how to price backloads and when to walk away.',
  summary:
    'Set a floor for every lane, find out which lanes and customers really make money, price backloads on the extra cost they add, and know when to say no.',
  category: 'Pricing',
  keyword: 'freight pricing strategy',
  published: '2026-01-06',
  reviewed: '2026-10-01',
  readingMinutes: 6,
  related: { href: '/product/quoting', label: 'How TruckWys prices each quote from your costs' },
  sources: [SRC.citizenSep, SRC.dmprSep, SRC.sanralBooklet],
  faq: [
    {
      q: 'What is the minimum rate I should charge for a load?',
      a: 'At least what the trip costs you to run, including the empty return if there is no backload, the tolls on that lane and a share of your fixed costs. Below that you lose money on every load.',
    },
    {
      q: 'How should I price a backload?',
      a: 'Your walk-away point is the extra cost the backload adds compared with driving home empty: extra diesel, any extra allowance and any waiting time. Aim to charge a normal rate, but know that number before you negotiate.',
    },
    {
      q: 'How often should I review my rates with regular customers?',
      a: 'At least once a year, and also when something big moves: diesel (it changes monthly), SANRAL toll tariffs (every March) or wage agreements. A fuel clause in the contract handles diesel between reviews.',
    },
    {
      q: 'Can software set my prices for me?',
      a: 'Software can make every quote use your current costs and show which lanes and customers make money. A statistical model can estimate your chance of winning once you have enough won and lost quotes. The decision to take or refuse a load is still yours.',
    },
  ],
  body: (
    <>
      <p>
        A pricing strategy for a small haulier comes down to a few decisions: the lowest rate you will accept on each lane, which lanes and
        customers deserve your trucks, what a backload is worth, and when to walk away. Get those right and each quote becomes a quick
        calculation rather than a guess.
      </p>
      <p>
        This guide is about those decisions. For building a single quote line by line, see{' '}
        <a href="/blog/how-to-quote-freight-rates-south-africa-ai">how to quote a transport load</a>. For the cost figure everything here
        starts from, see <a href="/blog/sa-fleet-operators-real-cost-per-kilometre">your truck&apos;s real cost per kilometre</a>. All figures
        below are example inputs, not benchmarks.
      </p>

      <h2>Set a floor for every lane</h2>
      <p>
        Your floor is the rate below which a load loses money. It is not one number for the business. It differs per lane, because tolls,
        distance and the chance of a backload differ.
      </p>
      <p>
        Start from your cost per kilometre driven. Our cost guide works out <strong>R&nbsp;24,82 per km</strong> before tolls for an example
        interlink, with diesel at the September 2026 inland price of R&nbsp;30,05 a litre for 50 ppm (<A s={SRC.citizenSep}>The Citizen</A>).
        Then count the kilometres the job really makes you drive, not the kilometres on the delivery note.
      </p>
      <div className="b-calc">
        <p>Example lane: 400 km each way, no backload, so 800 km driven</p>
        <p>800 km × R&nbsp;24,82 = R&nbsp;19&nbsp;856,00</p>
        <p>+ tolls both ways, excl. VAT (example) R&nbsp;1&nbsp;600,00 + driver allowance (example) R&nbsp;700,00</p>
        <p>
          Floor = <strong>R&nbsp;22&nbsp;156,00</strong>, or R&nbsp;55,39 per loaded km
        </p>
      </div>
      <p>
        This is a full-cost floor: it includes the finance, insurance and wages the truck carries whether it moves or not. Add your margin on
        top. For a 12% margin on the price, divide by 0,88: R&nbsp;22&nbsp;156 ÷ 0,88 = R&nbsp;25&nbsp;177,27 excl. VAT. Use your own
        figures; the empty-return diesel is a little lower than this simple version assumes, which the quoting guide shows.
      </p>

      <h2>Find out which lanes actually make money</h2>
      <p>
        A busy month can still lose money if the work is on the wrong lanes. Compare what each lane pays per kilometre driven, including the
        empty kilometres it causes, with what it costs.
      </p>
      <table className="wide">
        <caption>Example: margin by lane (example inputs, not benchmarks)</caption>
        <thead>
          <tr>
            <th scope="col">Lane</th>
            <th scope="col">Revenue per km driven</th>
            <th scope="col">Full cost per km incl. tolls</th>
            <th scope="col">Margin per km</th>
            <th scope="col">Margin</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Lane 1</td><td>R&nbsp;33,50</td><td>R&nbsp;26,82</td><td>R&nbsp;6,68</td><td>19,9%</td></tr>
          <tr><td>Lane 2</td><td>R&nbsp;29,00</td><td>R&nbsp;26,02</td><td>R&nbsp;2,98</td><td>10,3%</td></tr>
          <tr><td>Lane 3</td><td>R&nbsp;26,40</td><td>R&nbsp;25,72</td><td>R&nbsp;0,68</td><td>2,6%</td></tr>
          <tr><td>Lane 4</td><td>R&nbsp;24,10</td><td>R&nbsp;26,42</td><td>−R&nbsp;2,32</td><td>−9,6%</td></tr>
        </tbody>
      </table>
      <p>
        Lane 4 is losing money on every trip. Lane 3 barely covers its costs, and one slow-paying customer or a breakdown will tip it over.
        The fix is either a higher rate, a regular backload that cuts the empty kilometres, or fewer trucks on that lane.
      </p>

      <h2>Do the same for customers</h2>
      <p>
        Customers differ as much as lanes. Look at three things per customer: the rate per kilometre they pay, how long they take to pay, and
        how much extra work they cause (waiting at the dock, disputed invoices, missing paperwork). A customer who pays a slightly lower rate
        within 30 days can be worth more than one who pays well but takes 90 days and queries every invoice. Our post on{' '}
        <a href="/blog/hidden-profit-leaks-south-african-fleet-operators">where transport businesses lose money</a> covers the cost of slow
        payment.
      </p>

      <h2>Price backloads on the extra cost they add</h2>
      <p>
        Once a truck has delivered, the trip home happens anyway. Its fixed costs and the tolls are already on the outbound load. So the
        question for a backload is: how much more does it cost to come home loaded than empty?
      </p>
      <div className="b-calc">
        <p>Example: 400 km home. Loaded 46 L per 100 km, empty 38 L per 100 km (example inputs)</p>
        <p>Extra diesel: 400 km × 0,08 L/km = 32 L × R&nbsp;30,05 = R&nbsp;961,60</p>
        <p>+ extra allowance for loading time (example) R&nbsp;350,00</p>
        <p>
          Extra cost of the backload = <strong>R&nbsp;1&nbsp;311,60</strong>
        </p>
      </div>
      <p>
        Anything above about R&nbsp;1&nbsp;312 adds to the profit on that round trip. That is your walk-away point, not your asking price:
        quote a normal rate for the lane and negotiate down only if you must. Two traps:
      </p>
      <ul>
        <li>
          <strong>Waiting.</strong> If the backload means a day standing, that is a day the truck cannot earn. Price in at least a day of
          fixed-cost recovery: with the cost guide&apos;s example of R&nbsp;81&nbsp;600 a month over 22 working days, that is
          R&nbsp;3&nbsp;709,09, which turns a cheap backload into a loss.
        </li>
        <li>
          <strong>Habit.</strong> If cheap backloads become regular, they must be in your lane maths. Otherwise the outbound customer is paying
          for a return you are also selling.
        </li>
      </ul>

      <h2>Know when to walk away</h2>
      <p>A simple rule set, using the numbers above:</p>
      <ul>
        <li>Below the extra cost of the trip: always no.</li>
        <li>
          Between the extra cost and your full-cost floor: only to fill a return leg or a truck that would otherwise stand, and never as a
          standing rate.
        </li>
        <li>
          Between the floor and your target margin: yes if the customer pays on time and the work fills a gap; no if they pay late or the
          lane already loses money.
        </li>
        <li>At or above your target: yes, if you have the truck and the driver.</li>
      </ul>
      <p>Saying no to a bad load keeps the truck free for a better one, and stops a low rate becoming the customer&apos;s expected rate.</p>

      <h2>Regular customers and spot loads</h2>
      <p>
        Regular customers give you volume you can plan around and backloads you can arrange in advance. In return they expect a stable rate.
        Spot loads often pay more but come without warning and without any promise of repeat work. Most small fleets do best with a base of
        contract work priced at or above the full-cost floor, and spot work priced for the margin.
      </p>

      <h2>Rate reviews and fuel clauses</h2>
      <p>
        A contract rate goes stale quickly. Diesel is adjusted monthly: on 2 September 2026, 50 ppm diesel went up by 314,90 cents a litre (
        <A s={SRC.dmprSep}>DMPR</A>). On the example round trip above (184 L loaded, 152 L empty), that one change added R&nbsp;1&nbsp;058,06
        to the cost of each trip. SANRAL toll tariffs change every year on 1 March (<A s={SRC.sanralBooklet}>SANRAL</A>), and wage minimums
        change with the bargaining council agreement.
      </p>
      <ul>
        <li>Put a fuel clause in every contract longer than a month. Our <a href="/blog/fuel-cost-management-sa-fleets-strategies">diesel guide</a> has a simple surcharge formula.</li>
        <li>Agree a review date, at least yearly, and give notice of new rates in writing.</li>
        <li>Recalculate each lane&apos;s floor before the review, so you negotiate from numbers.</li>
      </ul>

      <h2>Track every quote you win and lose</h2>
      <p>
        Write down every quote: lane, customer, price per km, and whether you won or lost it, with the reason if you know it. After a few
        months the pattern shows. If you win nearly everything on a lane, you are probably too cheap there. If you lose nearly everything,
        check whether your costs are out of line or the lane is simply not for you.
      </p>

      <h2>Where software and models help, and where they don&apos;t</h2>
      <p>Software helps with the parts that are tedious or easy to get wrong:</p>
      <ul>
        <li>
          <strong>Consistency.</strong> Every quote uses this month&apos;s diesel price and the right toll class for the vehicle. Class 4 is
          five or more axles; class 3 is three or four (<A s={SRC.sanralBooklet}>SANRAL</A>).
        </li>
        <li>
          <strong>Speed.</strong> A quote built from stored costs takes minutes, so you reply while the customer is still deciding.
        </li>
        <li>
          <strong>Seeing the pattern.</strong> Reports such as revenue per kilometre by lane and revenue by customer, set beside your cost per
          kilometre, show where the margin is.
        </li>
        <li>
          <strong>Win chance.</strong> A statistical model can estimate the chance of winning at a given price from your own history. With
          little data it is noisy, so TruckWys only shows it once there are about 40 won and lost outcomes.
        </li>
        <li>
          <strong>Drafting and questions.</strong> A language model can draft a quote from a plain sentence or answer questions about your own
          numbers. In TruckWys, Copilot drafts and you confirm.
        </li>
      </ul>
      <p>
        What they cannot do: know a cost you do not record, replace the relationship with a customer, or guarantee a margin. A model
        trained on your past quotes also inherits your past mistakes. The numbers have to be right before the software is useful.
      </p>
      <p>
        If you want the floors and lane view without a spreadsheet, TruckWys <a href="/product/quoting">prices each quote from your costs</a>{' '}
        and its <a href="/product/reports">reports</a> show revenue by lane and by customer alongside profit and loss.
      </p>
    </>
  ),
};

export default post;
