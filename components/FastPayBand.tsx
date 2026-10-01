import { ButtonLink, StatusChip, TextLink, TwoTone } from './ui';

/*
 * Capital and Fast Pay, the flagship coming-soon section (Home, /product, /pricing). One component so
 * the wording never drifts. Never claim it is live, never give rates. The steps follow the app's
 * pre-launch Fast Pay screen (truckwyas-frontend CapitalPrelaunch "How Fast Pay will work").
 * Mirrors Terms 10: TruckWys is not a credit provider. Never in the schema featureList or Offer.
 */
export const FAST_PAY_STEPS = [
  { t: 'Pick a delivered invoice', d: 'A sent invoice with the proof of delivery on file. Both are already in TruckWys.' },
  { t: 'See the numbers first', d: 'The fee and the exact amount you would receive, before you ask for anything.' },
  { t: 'Get paid early', d: 'An independent finance provider pays you, on its own terms. Your customer pays the invoice as normal.' },
];

export default function FastPayBand({ loc, grey, id = 'fastpay-h', insurance }: { loc: string; grey?: boolean; id?: string; insurance?: boolean }) {
  return (
    <section className={`sec${grey ? ' sec--grey' : ''}`} aria-labelledby={id}>
      <div className="wrap fpb">
        <div className="fpb__text reveal">
          <StatusChip />
          <TwoTone id={id} a="Get paid on delivered loads." b="Before your customer pays." />
          <p className="body">
            Fast Pay is coming soon. Your delivered load, its proof of delivery and its invoice already live in TruckWys, so getting paid
            early should not mean collecting the paperwork again.
          </p>
          <div className="cta-pair fpb__cta">
            <ButtonLink href="/contact?topic=fast-pay" cta="notify" loc={loc}>
              Get notified
            </ButtonLink>
            <TextLink href="/capital" loc={loc}>
              How Fast Pay will work
            </TextLink>
          </div>
        </div>
        <div className="fpb__how reveal">
          <h3>How it will work</h3>
          <ol className="list-reset">
            {FAST_PAY_STEPS.map((s, i) => (
              <li key={s.t}>
                <span className="fpb__num" aria-hidden="true">
                  {i + 1}
                </span>
                <span>
                  <b>{s.t}</b>
                  <span>{s.d}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="small fpb__note">Not live yet. Rates are published when it goes live. TruckWys is not a credit provider.</p>
          {insurance ? (
            <p className="fpb__also">
              <TextLink href="/insurance" loc={loc} quiet>
                Insurance is coming soon too
              </TextLink>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
