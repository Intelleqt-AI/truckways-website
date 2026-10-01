import { SRC } from '../sources';
import { A, type Post } from '../types';

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
  reviewed: '2026-09-30',
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
      <p>
        The rest of the quote is built the same way as a local load: see the{' '}
        <a href="/blog/how-to-quote-freight-rates-south-africa-ai">worked quote</a>.
      </p>
    </>
  ),
};

export default post;
