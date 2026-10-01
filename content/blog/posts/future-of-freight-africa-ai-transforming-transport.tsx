import { SRC } from '../sources';
import { A, type Post, type Source } from '../types';

/** Sources only this post cites. Checked 1 Oct 2026. */
const S = {
  sanewsToc: {
    name: 'SAnews, 13 May 2026: Transnet announces 11 train operating companies',
    url: 'https://www.sanews.gov.za/south-africa/transnet-announces-11-train-operating-companies',
  },
  ov: {
    name: 'National Treasury and the Presidency: Operation Vulindlela Phase II progress report, Q1 2026/27',
    url: 'https://www.treasury.gov.za/comm_media/press/2026/Operation%20Vulindlela%20Progress%20Report%20Q1%20-%202026.pdf',
  },
  ertAct: {
    name: 'South African Government: Economic Regulation of Transport Act 6 of 2024',
    url: 'https://www.gov.za/documents/acts/economic-regulation-transport-act-6-2024-english-isizulu-11-jun-2024',
  },
  dticAfcfta: { name: 'the dtic: African Continental Free Trade Area', url: 'https://www.thedtic.gov.za/sectors-and-services-2/1-4-2-trade-and-export/afcfta-2/' },
  sanewsBma: {
    name: 'SAnews, 28 Apr 2026: BMA announces successful bidders for major border overhaul',
    url: 'https://www.sanews.gov.za/south-africa/bma-announces-successful-bidders-major-border-overhaul',
  },
  chirundu: { name: 'Embassy of Zimbabwe in Zambia: Chirundu One Stop Border Post', url: 'http://www.zimlusaka.gov.zw/chirundu-one-stop-border-post/' },
  sarsVatMod: {
    name: 'SARS media release, 17 Aug 2026: public input on a new digital VAT model',
    url: 'https://www.sars.gov.za/latest-news/media-release-sars-invites-public-input-on-a-new-digital-vat-model-to-modernise-vat-administration/',
  },
} as const satisfies Record<string, Source>;

const post: Post = {
  slug: 'future-of-freight-africa-ai-transforming-transport',
  h1: { a: 'The future of road freight in South Africa.', b: 'What is actually changing.' },
  title: 'The future of road freight in South Africa: what is actually changing',
  seoTitle: 'Future of road freight in South Africa',
  description:
    'Rail access, border upgrades, the AfCFTA, SARS e-invoicing plans and diesel: what is really changing for South African road hauliers, and what to do now.',
  summary:
    'Private trains on Transnet lines, rebuilt border posts, continental free trade, digital VAT and volatile diesel: what is happening, what it could mean, and what to do now.',
  category: 'Running the business',
  keyword: 'future of road freight South Africa',
  published: '2026-02-17',
  reviewed: '2026-10-01',
  readingMinutes: 5,
  related: { href: '/product', label: 'What TruckWys does, from quote to cash' },
  sources: [S.sanewsToc, S.ov, S.ertAct, S.dticAfcfta, S.sanewsBma, S.chirundu, S.sarsVatMod, SRC.dmprSep, SRC.citizenSep],
  faq: [
    {
      q: 'Will private freight trains take work away from road hauliers?',
      a: 'Some long-distance bulk and container volume may move to rail as private operators start running, which government expects from early 2027. Nobody can say how much or how fast, and rail freight still needs trucks at both ends.',
    },
    {
      q: 'Does the African Continental Free Trade Area remove border paperwork for trucks?',
      a: 'No. It lowers customs duties on qualifying goods over time. Cross-border permits, road charges and border procedures still apply, and goods need to meet rules of origin to get the lower duty.',
    },
    {
      q: 'Is e-invoicing mandatory in South Africa?',
      a: 'Not as of October 2026. SARS has proposed a digital VAT model with e-invoicing and e-reporting and asked for public comment until 16 October 2026, without setting a compulsory start date. Check your own position with a tax practitioner.',
    },
  ],
  body: (
    <>
      <p>
        Most predictions about freight in Africa are long on promise and short on dates. This guide sticks to what is actually happening in
        South Africa as of October 2026, what it could mean for a small road haulier, and what to do about it now.
      </p>
      <p>
        The short version: rail is opening to private operators, the busiest land borders are being rebuilt, trade rules on the continent are
        changing slowly, SARS is planning digital VAT, and diesel keeps moving. None of it replaces the basics: know your costs, price each
        lane, get paid quickly and keep your records digital.
      </p>

      <h2>Private trains on the Transnet network</h2>
      <p>
        <strong>What is happening.</strong> In May 2026 the Transnet Rail Infrastructure Manager allocated slots to 11 private train
        operating companies, taking the number of operators on the national network from one to 12. Transnet expects them to add 24 million
        tonnes of freight capacity at first, possibly rising to 52 million tonnes over five years (<A s={S.sanewsToc}>SAnews</A>). Rail Access
        Agreements have been signed with all 11, and operations are being prepared for early 2027. A new Network Statement, the rulebook for
        access to the lines, was published on 3 July 2026 (<A s={S.ov}>Operation Vulindlela</A>).
      </p>
      <p>
        Behind this sits the Economic Regulation of Transport Act 6 of 2024, which sets up a single Transport Economic Regulator (
        <A s={S.ertAct}>South African Government</A>). Government says the regulator will be fully operational from April 2027, and a draft
        National Rail Bill is being finalised (<A s={S.ov}>Operation Vulindlela</A>).
      </p>
      <p>
        <strong>What it could mean.</strong> The first operators are in coal, manganese, fuel, containers and general freight (
        <A s={S.sanewsToc}>SAnews</A>). If they run reliably, some long-haul bulk and container work on the main corridors could move from road
        to rail over time. Rail still needs trucks to and from terminals, so shorter feeder work may grow. How fast any of this happens is not
        known yet.
      </p>
      <p>
        <strong>What to do now.</strong> Look at your lanes. If most of your revenue is long-haul bulk on a port corridor, that is the work most
        exposed. Know your margin per lane so you can tell which work you can afford to lose and which you need to defend.
      </p>

      <h2>Ports</h2>
      <p>
        <strong>What is happening.</strong> Transnet has asked for proposals on a 25-year concession for a private operator at the Cape Town
        Multi-Purpose Terminal and on a new manganese terminal at Ngqura, and work is under way to make the National Ports Authority a
        separate entity (<A s={S.ov}>Operation Vulindlela</A>).
      </p>
      <p>
        <strong>What it could mean.</strong> Better port performance would mean less time standing in port queues, which is time your truck
        earns nothing. These are long projects, so do not plan on quick changes.
      </p>
      <p>
        <strong>What to do now.</strong> Record waiting time per trip. If a customer&apos;s loads regularly wait at the port, that cost belongs
        in their rate or in a waiting-time charge.
      </p>

      <h2>The African Continental Free Trade Area</h2>
      <p>
        <strong>What is happening.</strong> The agreement entered into force in May 2019, and South Africa started trading under it on 31
        January 2024. Tariffs come down in stages: 90% of tariff lines over five to ten years, 7% over ten to 13 years, and 3% excluded. The dtic
        expects 97% of tariffs to be zero by 2035. To get the lower duty, goods must meet rules of origin, backed by a certificate of origin.
        Trade with the other SACU countries carries on under the existing SACU and SADC arrangements (<A s={S.dticAfcfta}>the dtic</A>).
      </p>
      <p>
        <strong>What it does not change.</strong> It is about customs duty on goods, not about trucks. Cross-border permits, foreign road
        charges and border queues stay as they are. Our guide to{' '}
        <a href="/blog/cross-border-trucking-southern-africa-multi-currency">cross-border trucking costs</a> covers those.
      </p>
      <p>
        <strong>What to do now.</strong> If you carry for exporters into the rest of Africa, ask whether their loads move under the agreement,
        and make sure the paperwork they need travels with the load.
      </p>

      <h2>Border posts</h2>
      <p>
        <strong>What is happening.</strong> In April 2026 the Border Management Authority named preferred bidders to rebuild six land ports of
        entry: Beitbridge, Lebombo, Oshoek, Maseru Bridge, Kopfontein and Ficksburg Bridge. Construction is due to start late in 2026 or early
        2027 and to take two to three years, and the BMA says the upgrades will allow one-stop border posts (<A s={S.sanewsBma}>SAnews</A>).
        The partnership is valued at R&nbsp;12,5 billion, and the six ports carry over 80% of cross-border trade and passenger flows (
        <A s={S.ov}>Operation Vulindlela</A>).
      </p>
      <p>
        A one-stop border post means both countries process you in one place rather than twice. The region already has one: Chirundu, between
        Zambia and Zimbabwe, launched in December 2009 (<A s={S.chirundu}>Embassy of Zimbabwe in Zambia</A>).
      </p>
      <p>
        <strong>What it could mean.</strong> Shorter border times would make cross-border trips more predictable. During construction, expect
        disruption rather than relief.
      </p>
      <p>
        <strong>What to do now.</strong> Keep pricing border delays into cross-border quotes, per crossing, from your own trip records.
      </p>

      <h2>SARS and digital VAT</h2>
      <p>
        <strong>What is happening.</strong> On 17 August 2026 SARS asked for public comment on a digital VAT model made up of e-invoicing, an
        interoperability framework and e-reporting. Comments close on 16 October 2026. SARS describes a phased, consultative approach and has
        not set a date from which it would be compulsory (<A s={S.sarsVatMod}>SARS</A>).
      </p>
      <p>
        <strong>What it could mean.</strong> If it goes ahead, invoices would need to be produced in a structured digital form and reported to
        SARS. Handwritten or ad hoc invoices would become harder to sustain.
      </p>
      <p>
        <strong>What to do now.</strong> Raise every tax invoice in software, number it consistently, and keep it with the proof of delivery.
        Nothing is final yet, so check your own case with a tax practitioner before changing systems because of it.
      </p>

      <h2>Diesel stays volatile</h2>
      <p>
        <strong>What is happening.</strong> On 2 September 2026, 50 ppm diesel rose by 314,90 cents a litre (<A s={SRC.dmprSep}>DMPR</A>),
        taking the inland price to R&nbsp;30,05 (<A s={SRC.citizenSep}>The Citizen</A>). The price is set again on the first Wednesday of every month, so a rate agreed today can be out of date within a month.
      </p>
      <p>
        <strong>What to do now.</strong> Reprice with each month&apos;s diesel, and put a fuel clause in longer contracts. Our{' '}
        <a href="/blog/fuel-cost-management-sa-fleets-strategies">diesel cost guide</a> explains how.
      </p>

      <h2>Software and language models in freight admin</h2>
      <p>
        Software will not change where the rails run or how long a border takes. Where it does help is the paperwork around each load: quotes
        priced from current costs, invoices raised on delivery, and a clear list of who owes you what. Language models are now good at drafting
        a quote from a plain sentence or answering a question about your own numbers, such as which lane paid best last quarter. They are only
        as good as the records underneath them, and you should check what they draft before it goes to a customer. Treat them as a fast
        assistant, not as a forecaster.
      </p>

      <h2>What to do now</h2>
      <ul>
        <li>Know your cost per kilometre, including empty kilometres, and update it monthly with diesel.</li>
        <li>Work out the margin on each lane, so you know which work to defend if rail or trade patterns shift.</li>
        <li>Record waiting time at ports and borders, and charge for it.</li>
        <li>Invoice on delivery, in software, and follow up quickly on what is owed.</li>
        <li>Keep every invoice, proof of delivery and expense in digital form.</li>
      </ul>
      <p>
        That is also what TruckWys is built for: <a href="/product">quotes from real costs, invoices on delivery and debtors in one place</a>,
        alongside whatever system you already use.
      </p>
    </>
  ),
};

export default post;
