import { SRC } from '../sources';
import { A, type Post } from '../types';

const post: Post = {
  slug: 'how-to-quote-freight-rates-south-africa-ai',
  h1: { a: 'How to quote a transport load.', b: 'Line by line, from diesel to VAT.' },
  title: 'How to quote a transport load in South Africa, line by line',
  seoTitle: 'How to quote a transport load in South Africa',
  description:
    'Build a load quote from diesel, SANRAL tolls, allowance, fixed costs and the empty return, then margin and VAT. Worked N3 example to Pietermaritzburg.',
  summary: 'Diesel, tolls, allowance, fixed costs and the return leg, then margin and VAT. A worked Johannesburg to Pietermaritzburg quote.',
  category: 'Pricing',
  keyword: 'how to quote a transport load South Africa',
  published: '2026-02-03',
  reviewed: '2026-09-30',
  readingMinutes: 7,
  related: { href: '/product/quoting', label: 'See how TruckWys builds the same quote' },
  faq: [
    {
      q: 'How do I calculate a transport rate per load?',
      a: 'Add the diesel for the distance, every toll plaza at your vehicle class excluding VAT, the driver allowance, tyres, maintenance and a share of fixed costs, plus the empty return if there is no backload. Then add your margin, and VAT at 15% if you are a VAT vendor.',
    },
    {
      q: 'Should I charge the customer for the empty return trip?',
      a: 'If there is no backload, the loaded trip has to pay for the way home, otherwise you lose money on the return. If you do have a backload, the return costs go on that load instead.',
    },
    {
      q: 'Do I include VAT on tolls in my quote?',
      a: 'SANRAL toll tariffs include VAT. A VAT vendor claims that VAT back as input tax, so put tolls into the quote excluding VAT and add VAT once, on the total.',
    },
    {
      q: 'How long should a transport quote be valid?',
      a: 'Diesel changes on the first Wednesday of every month, so give every quote a validity date, usually before the next adjustment, or include a fuel clause for longer contracts.',
    },
  ],
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
        <a href="/blog/sa-fleet-operators-real-cost-per-kilometre">cost per kilometre guide</a>. They are example inputs, not
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
        contracts that run longer than a month. Our <a href="/blog/fuel-cost-management-sa-fleets-strategies">diesel guide</a> shows a
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
      <p>
        A correct quote is half the job. Whether a lane is worth taking at that price is a pricing decision, covered in{' '}
        <a href="/blog/fleet-profitability-south-africa-ai-powered-pricing">how to price loads for profit</a>.
      </p>
    </>
  ),
};

export default post;
