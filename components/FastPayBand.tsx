import { ButtonLink, StatusChip, TextLink, TwoTone } from './ui';
import { getImageProps } from 'next/image';

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

/*
 * Band photo: "Birds Eye View of the Port of Durban", by Ojas Narappanawar
 * (https://www.pexels.com/@ojas-narappanawar-382627), https://www.pexels.com/photo/birds-eye-view-of-the-port-of-durban-4606404/
 * Pexels Licence (free commercial use, no attribution required; credited anyway). Edits: 2.2:1 crop (city, harbour
 * mouth, ships and the Bluff), saturation 0.65, brighter (1.22) and slightly cooler. Master public/bands/durban-port.jpg,
 * 2400 x 1091, under 300 kB; next/image serves AVIF/WebP.
 * Sharp, not blurred (owner, 1 Oct 2026): blurred backdrops are only for behind product UI frames.
 */
function BandPhoto() {
  const { props } = getImageProps({ src: '/bands/durban-port.jpg', alt: '', fill: true, quality: 60, sizes: '(max-width: 767px) 200vw, (max-width: 1023px) 120vw, calc(100vw - 32px)' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style: _style, ...rest } = props;
  // 120% tall (CSS) so the scroll parallax (SiteScripts, data-parallax) never shows an edge.
  return <img {...rest} className="fpsec__img" alt="" loading="lazy" decoding="async" data-parallax="0.06" />;
}

/**
 * Fast Pay is critical to the owner, so it gets its own photo band: an inset frame on a sharp photo of the Port of
 * Durban, darkened only on the left where the text sits; the three steps on a narrow translucent card right.
 */
export default function FastPayBand({ loc, grey, id = 'fastpay-h', insurance }: { loc: string; grey?: boolean; id?: string; insurance?: boolean }) {
  return (
    <section className={`sec fpsec${grey ? ' sec--grey' : ''}`} aria-labelledby={id}>
      <div className="fpsec__frame" data-theme="dark" data-pframe>
        <BandPhoto />
        <div className="fpsec__scrim" aria-hidden="true" />
        <div className="fpb">
          <div className="fpb__text reveal">
            <StatusChip />
            <TwoTone id={id} a="Get paid on delivered loads." b="Before your customer pays." />
            <p className="body">
              Fast Pay is coming soon. Your delivered load, its proof of delivery and its invoice already live in TruckWys, so getting
              paid early should not mean collecting the paperwork again.
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
        <p className="fpsec__place">Port of Durban</p>
      </div>
    </section>
  );
}
