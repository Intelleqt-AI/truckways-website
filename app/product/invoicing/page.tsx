import '../../../components/pages/pages-b.css';
import { SectionHeader } from '../../../components/ui';
import { CTABand } from '../../../components/Blocks';
import Faq, { type QA } from '../../../components/Faq';
import { FeatureHero, Stage, Answers, FeatureRow, Split, DL, NextStep } from '../../../components/pages/blocks';
import { InvoiceDetail, PublicInvoice, InvoiceList } from '../../../components/pages/frags';
import { pageMeta } from '../../../components/pages/meta';
import { jsonLd } from '../../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../../lib/schema';

const PATH = '/product/invoicing';
export const metadata = pageMeta({
  path: PATH,
  title: 'Trucking invoicing software: invoice on delivery',
  description:
    'The invoice is raised when the load is marked delivered: 15% VAT, 30-day terms, your bank details and the invoice number as the EFT reference. Your TMS can mark delivery.',
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
    a: 'Yes. Every report exports to CSV and prints, including sales by month and the VAT report. A Xero connection is coming soon.',
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
          <Stage label="An invoice raised on delivery of a Johannesburg to Durban load: bill-to customer, issue and due dates, 30-day terms, the linehaul and fuel surcharge lines, VAT at 15% and the total due, with its activity.">
            <InvoiceDetail />
          </Stage>
        }
      />

      <section className="sec" aria-labelledby="answers-h">
        <div className="wrap">
          <SectionHeader id="answers-h" a="What it answers." b="The day the load delivers." />
          <Answers
            items={[
              { q: 'Did we invoice that load?', a: 'Every delivered load gets its invoice, numbered and linked back to the load it came from.' },
              { q: 'Can the customer pay today?', a: 'Your bank details and the invoice number as the EFT reference, on the invoice and the page it links to.' },
              { q: 'Where is the POD?', a: 'On the load: the signature, the name of the person who received it and the document.' },
            ]}
          />
        </div>
      </section>

      <section className="sec sec--grey" aria-labelledby="detail-h">
        <div className="wrap">
          <SectionHeader
            id="detail-h"
            a="No retyping from the job sheet."
            b="No invoice left in the cab."
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

      <section className="sec" aria-labelledby="spec-h">
        <div className="wrap">
          <Split id="spec-h" a="The specifics." b="Exactly what an invoice does." line="Everything on this list is in the product today.">
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

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Questions about invoicing">
        <div className="wrap">
          <Faq a="Questions" b="about invoicing." items={FAQ} />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Next step">
        <div className="wrap">
          <NextStep href="/product/debtors" title="Debtors" line="Once it is sent, see who owes you and chase what is late." />
        </div>
      </section>

      <CTABand page="invoicing" />
    </>
  );
}
