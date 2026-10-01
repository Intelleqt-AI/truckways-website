import '../../../components/pages/pages-b.css';
import { SectionHeader } from '../../../components/ui';
import { Closing } from '../../../components/Blocks';
import Faq, { type QA } from '../../../components/Faq';
import { FeatureHero, Stage, Answers, FeatureRow, Split, DL, NextCards, PhotoBand } from '../../../components/pages/blocks';
import { InvoiceDetail, PublicInvoice, InvoiceList } from '../../../components/pages/frags';
import { SigDelivery } from '../../../components/pages/signature';
import { INVOICE } from '../../../content/demo-data';
import { rand, date } from '../../../lib/format';
import { pageMeta } from '../../../components/pages/meta';
import { jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../../lib/schema';

const PATH = '/product/invoicing';
export const metadata = pageMeta({
  path: PATH,
  title: 'Trucking invoicing software: invoice on delivery',
  description:
    'The invoice is raised when the load is marked delivered, by you or your TMS: 15% VAT, your terms, bank details and the invoice number as EFT reference.',
  og: 'invoicing',
  ogAlt: 'TruckWys invoicing: delivered means invoiced.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: '/product' },
  { name: 'Invoicing', path: PATH },
];

const FAQ: QA[] = [
  {
    id: 'invoicing-manual',
    q: 'Can I still create an invoice by hand?',
    a: 'Yes. Use New invoice on the Finance page for work that did not come through a load, such as a storage fee.',
  },
  {
    id: 'invoicing-part',
    q: 'Does it handle part payments?',
    a: 'Yes. Record a payment for any amount, by EFT, cash, card or cheque. The invoice shows Partially paid and the balance until it is settled.',
  },
  {
    id: 'invoicing-accountant',
    q: 'Can my accountant get the invoices?',
    a: 'Yes. Xero and QuickBooks connections are coming soon; until then every report exports to CSV.',
  },
];

export default function InvoicingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS), faqSchema(FAQ)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="invoicing"
        eyebrow="Invoicing"
        a="Delivered means"
        b="invoiced."
        lead="When a load is marked delivered, in TruckWys or from your TMS, the invoice is raised with 15% VAT and your payment terms, ready to send."
        frame={
          <Stage photo="n3-gillitts" label="An invoice raised on delivery of a Johannesburg to Durban load: bill-to customer, issue and due dates, 30-day terms, the linehaul and fuel surcharge lines, VAT at 15% and the total due, with its activity.">
            <InvoiceDetail />
          </Stage>
        }
      />

      <section className="sec" aria-labelledby="answers-h">
        <div className="wrap">
          <SectionHeader id="answers-h" a="What it answers." b="On the day it delivers." />
          <Answers
            items={[
              { q: 'Did we invoice that load?', fig: INVOICE.number, note: `raised on delivery, ${date(INVOICE.issued)}`, a: 'Every delivered load gets its invoice, numbered and linked back to the load it came from.' },
              { q: 'Can the customer pay today?', fig: rand(INVOICE.total, { cents: true }), note: 'incl. 15% VAT, due in 30 days', a: 'Your bank details and the invoice number as the EFT reference, on the invoice and the page it links to.' },
              { q: 'Where is the POD?', fig: 'Attached', note: `on ${INVOICE.load}`, a: 'On the load: the signature, the name of the person who received it and the document.' },
            ]}
          />
        </div>
      </section>

      <SigDelivery />

      <section className="sec sec--grey" aria-labelledby="detail-h">
        <div className="wrap">
          <SectionHeader
            id="detail-h"
            a="No retyping."
            b="No invoice left behind."
            line="The invoice takes the customer, route, rate and VAT from the load. You check it and send it."
          />
          <div className="b-rows">
            <FeatureRow
              title="Paid by EFT, to you"
              body="Your bank details and the invoice number as the payment reference, on every invoice and on the page your customer opens from the link. Your customers pay you directly; TruckWys never holds your money."
              points={['A link your customer opens without logging in', 'A PDF for customers who want one', 'Viewed shows when the customer has opened it']}
            >
              <Stage label="The invoice page a customer opens from the link: amount due, due date, subtotal, VAT and total, and the instruction to pay by EFT with the invoice number as the reference.">
                <PublicInvoice />
              </Stage>
            </FeatureRow>
            <FeatureRow
              flip
              title="From Sent to Paid, in one list"
              body="Every invoice with its status, due date and amount, and what is overdue at the top. Record a payment and the status moves on its own."
              points={['Draft, Sent, Viewed, Partially paid, Paid and Overdue', 'Payments recorded against the invoice, in part or in full', 'Your TMS can mark a load delivered with its POD, and the invoice follows']}
              link={{ href: '/integrations', label: 'How your TMS connects' }}
            >
              <Stage label="The invoice list with invoiced this month, collected, overdue and time to get paid, and invoices with their status and amount including VAT.">
                <InvoiceList />
              </Stage>
            </FeatureRow>
          </div>
        </div>
      </section>

      {/*
        R9: one sharp photo band. "An aerial view of the Port of Port Elizabeth with cargo ships and cranes", by William Veitch (https://unsplash.com/@willv78), https://unsplash.com/photos/port-elizabeth-harbor-and-city-skyline-B4X6DPP4rnU. Cropped to the sky, the harbour and the quays (the street signs below are outside the crop).
        Unsplash Licence (https://unsplash.com/license), checked not Unsplash+ (premium=false, plus=false); free commercial
        use, no attribution required. Graded like the site's other bands (saturation ~0.66, slightly cooler), darkened
        only behind the text by the band's scrim. Master: public/bands/invoicing-gqeberha-port.jpg.
      */}
      <PhotoBand
        id="band-h"
        src="/bands/invoicing-gqeberha-port.jpg"
        position="50% 60%"
        positionPhone="40% 70%"
        a="Delivered today."
        b="Invoiced today."
        line="Mark the load delivered, in TruckWys or from your TMS, and the invoice is raised with 15% VAT and your terms."
        place="Port Elizabeth harbour, Eastern Cape"
      />

      <section className="sec" aria-labelledby="spec-h">
        <div className="wrap">
          <Split id="spec-h" a="What it does, exactly." line="The invoice rules, as they work today.">
            <DL
              rows={[
                ['When', 'Raised the moment a load is marked delivered, in TruckWys or by your TMS through the API.'],
                ['VAT', '15%, shown per invoice with the subtotal and total.'],
                ['Terms', '30 days by default. Set other terms per customer.'],
                ['Numbering', 'Automatic, with the load number on the invoice.'],
                ['Sending', 'Send to customer from the invoice. A reminder can follow from the same page if it goes overdue.'],
                ['Payments', 'Record a payment by EFT, cash, card or cheque, in part or in full.'],
                ['Proof of delivery', 'Signature, received by and a document, kept on the load.'],
              ]}
            />
          </Split>
        </div>
      </section>

      <section className="sec b-faqsec" aria-label="Questions about invoicing">
        <div className="wrap">
          <Faq a="Invoicing" b="questions." items={FAQ} />
        </div>
      </section>

      <NextCards
        next={{ href: '/product/debtors', title: 'Debtors', line: 'Once it is sent, see who owes you and chase what is late.' }}
        read="proof-of-delivery-invoice-on-delivery"
      />

      <Closing page="invoicing" />
    </>
  );
}
