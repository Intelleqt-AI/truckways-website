import { SRC } from '../sources';
import { A, type Post, type Source } from '../types';

/** Sources only this post cites. Checked 1 Oct 2026. */
const S = {
  cbrtaFees: {
    name: 'C-BRTA: permit fees from 1 April 2026 (Government Gazette 54229, 27 Feb 2026)',
    url: 'https://www.cbrta.co.za/uploads/files/2026-C-BRTA-PERMIT-FEES.pdf',
  },
  zinara: { name: 'ZINARA (Zimbabwe): transit fees', url: 'https://zinara.co.zw/services/transit-fees/' },
} as const satisfies Record<string, Source>;

const post: Post = {
  slug: 'cross-border-trucking-southern-africa-multi-currency',
  h1: { a: 'Cross-border trucking costs.', b: 'Permits, road charges and tolls.' },
  title: 'Cross-border trucking costs in southern Africa: permits, road charges and tolls',
  seoTitle: 'Cross-border trucking costs from South Africa',
  description:
    'Cross-border load costs from South Africa: C-BRTA permits, road charges in Namibia, Eswatini and Lesotho, N4 tolls to Mozambique, zero-rated VAT.',
  summary: 'C-BRTA permits, foreign road charges and tolls, and how VAT works on a load that leaves the country.',
  category: 'Costs',
  keyword: 'cross-border trucking costs South Africa',
  published: '2026-02-10',
  reviewed: '2026-10-01',
  readingMinutes: 6,
  related: { href: '/product/quoting', label: 'How TruckWys adds cross-border fees to a quote' },
  faq: [
    {
      q: 'Do I need a permit to take a truck across the border from South Africa?',
      a: "Yes. Goods vehicles crossing into neighbouring countries need a cross-border permit from the Cross-Border Road Transport Agency (C-BRTA). You can apply online through the agency's portal or in person in Centurion.",
    },
    {
      q: 'Do I charge VAT on a cross-border load?',
      a: 'International transport of goods into or out of South Africa is zero-rated for VAT, and a local leg can also be zero-rated in some cases. Keep the documents that prove the goods crossed the border, and check your own case with a tax practitioner.',
    },
    {
      q: 'What currency should I quote a cross-border load in?',
      a: 'Quote in the currency your contract uses. Record foreign charges in the currency you paid them in, convert at the rate on the day, and agree up front who carries the exchange risk.',
    },
  ],
  sources: [SRC.cbrta, S.cbrtaFees, SRC.botswana, SRC.namibia, SRC.trac, SRC.eswatini, SRC.lesotho, S.zinara, SRC.citizenSep, SRC.sanralPoster, SRC.vat404, SRC.sarsVat],
  body: (
    <>
      <p>
        A cross-border load carries costs a local load never sees: permits, foreign road charges, tolls in another currency and more
        waiting. Leave one out and the premium you charged for crossing the border disappears. This guide lists what to price, with the
        official source for each.
      </p>
      <p>
        Charges change. The figures below were checked on 1 October 2026; confirm them with the authority before you quote.
      </p>

      <h2>Your South African permit</h2>
      <p>
        Goods vehicles crossing into neighbouring countries need a cross-border permit from the Cross-Border Road Transport Agency. You can
        apply online through the agency&apos;s Cross-Easy portal or in person in Centurion; the fees are published on its permits page (
        <A s={SRC.cbrta}>C-BRTA</A>). Spread the permit cost over the trips it covers.
      </p>
      <p>
        From 1 April 2026, a freight permit for a vehicle over 20&nbsp;000 kg (C-BRTA class 2) costs R&nbsp;9&nbsp;041 for 12 months: an
        application fee of R&nbsp;823 plus an issue fee of R&nbsp;8&nbsp;218. A five-year permit is R&nbsp;12&nbsp;320, plus an annual
        compliance fee of R&nbsp;1&nbsp;962, and a 14-day temporary permit is R&nbsp;2&nbsp;264. The fees are per vehicle, per country in which
        you pick up or set down goods (<A s={S.cbrtaFees}>C-BRTA</A>).
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
            <td>Zimbabwe (Beitbridge)</td>
            <td>
              Transit fees for foreign heavy vehicles, charged per 100 km and collected at the port of entry, plus tolls on the road. Fees and
              the rules on them have changed in recent years, so check the current schedule with ZINARA before you quote.
            </td>
            <td><A s={S.zinara}>ZINARA</A></td>
          </tr>
          <tr>
            <td>Zambia</td>
            <td>
              Tolls at the border and on the main roads, set under Zambia&apos;s Tolls Act. Check the
              current rates with Zambia&apos;s Road Development Agency before you quote.
            </td>
            <td>Road Development Agency (Zambia)</td>
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
      <p>
        That may improve over the next few years:{' '}
        <a href="/blog/future-of-freight-africa-ai-transforming-transport">six border posts are being rebuilt</a>, including Beitbridge and
        Lebombo. Until the work is done, price the crossings you actually experience.
      </p>

      <h2>Worked example: Johannesburg to Maputo</h2>
      <p>
        Here is a full quote for an interlink taking a load from Johannesburg to Maputo and returning empty. The running costs come from our{' '}
        <a href="/blog/sa-fleet-operators-real-cost-per-kilometre">cost per kilometre guide</a>. Distance, allowance, border time, the number
        of trips a year and the exchange rate are example inputs, not benchmarks.
      </p>
      <ul>
        <li>Distance: 580 km each way, via the N12 to eMalahleni and then the N4 through Lebombo and Ressano Garcia (example; check the plazas on your own route)</li>
        <li>
          Diesel: 46 L per 100 km loaded, 38 L empty, all bought in South Africa at the September 2026 inland price of R&nbsp;30,05 for 50 ppm (
          <A s={SRC.citizenSep}>The Citizen</A>)
        </li>
        <li>Tyres and maintenance R&nbsp;4,20 per km; fixed costs R&nbsp;6,80 per km</li>
        <li>
          South African tolls, class 4: Middelburg R&nbsp;365, Machado R&nbsp;729 and Nkomazi R&nbsp;405, R&nbsp;1&nbsp;499 each way (
          <A s={SRC.trac}>TRAC N4</A>). The tariffs include VAT (<A s={SRC.sanralPoster}>SANRAL</A>), which a VAT vendor claims back, so the quote carries R&nbsp;1&nbsp;303,48
          excl. VAT.
        </li>
        <li>
          Mozambican tolls, class 4: Moamba MZN&nbsp;1&nbsp;800 and Maputo MZN&nbsp;550, MZN&nbsp;2&nbsp;350 each way (<A s={SRC.trac}>TRAC N4</A>).
          At an example rate of MZN&nbsp;3,50 to the rand, that is R&nbsp;671,43. Use the rate on the day you pay.
        </li>
        <li>C-BRTA 12-month permit for Mozambique, R&nbsp;9&nbsp;041, spread over 24 trips a year (example): R&nbsp;376,71 a trip</li>
        <li>Driver allowance for the round trip R&nbsp;1&nbsp;500, and one extra day of fixed costs for both border crossings together, R&nbsp;3&nbsp;709,09 (R&nbsp;81&nbsp;600 a month over 22 working days)</li>
      </ul>
      <table>
        <caption>Worked example: Johannesburg to Maputo and back empty (example inputs)</caption>
        <thead>
          <tr>
            <th scope="col">Cost</th>
            <th scope="col">Loaded leg</th>
            <th scope="col">Empty return</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Diesel</td><td>R&nbsp;8&nbsp;017,34</td><td>R&nbsp;6&nbsp;623,02</td></tr>
          <tr><td>South African tolls, excl. VAT</td><td>R&nbsp;1&nbsp;303,48</td><td>R&nbsp;1&nbsp;303,48</td></tr>
          <tr><td>Mozambican tolls</td><td>R&nbsp;671,43</td><td>R&nbsp;671,43</td></tr>
          <tr><td>Tyres and maintenance</td><td>R&nbsp;2&nbsp;436,00</td><td>R&nbsp;2&nbsp;436,00</td></tr>
          <tr><td>Fixed costs</td><td>R&nbsp;3&nbsp;944,00</td><td>R&nbsp;3&nbsp;944,00</td></tr>
          <tr><th scope="row">Subtotal</th><td>R&nbsp;16&nbsp;372,25</td><td>R&nbsp;14&nbsp;977,93</td></tr>
          <tr><td>Permit share, allowance and border time</td><td colSpan={2}>R&nbsp;5&nbsp;585,80</td></tr>
          <tr><th scope="row">Round trip cost</th><td colSpan={2}><strong>R&nbsp;36&nbsp;935,98</strong></td></tr>
        </tbody>
      </table>
      <p>
        A price of <strong>R&nbsp;42&nbsp;000</strong> leaves R&nbsp;5&nbsp;064,02 over the round trip cost, a margin of 12,1%. If you are
        contracted for the whole journey, the load is zero-rated, so the invoice carries VAT at 0% (see below). Notice how much of the cost
        is the empty return and the border day: a backload from Maputo, or a faster crossing, changes the picture more than any toll.
      </p>

      <h2>VAT on a cross-border load</h2>
      <p>
        International transport of goods, into or out of South Africa, is zero-rated for VAT. A local leg can also be zero-rated when the
        same transporter is contracted to the same customer for the whole journey (<A s={SRC.vat404}>SARS VAT 404</A>, section 6.3.8). If you
        only haul the South African leg as a subcontractor to another transporter or a forwarder, you are not the one contractually liable
        for the whole journey, so your charge to them will generally carry VAT at 15% (<A s={SRC.sarsVat}>SARS</A>); the guide applies the same reasoning to a domestic
        flight that forms part of an international trip (<A s={SRC.vat404}>SARS VAT 404</A>, example 13). Keep the documents that prove the
        goods crossed the border, and check your own case with a tax practitioner.
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
      <p>
        The rest of the quote is built the same way as a local load: see the{' '}
        <a href="/blog/how-to-quote-freight-rates-south-africa-ai">worked quote</a>.
      </p>
    </>
  ),
};

export default post;
