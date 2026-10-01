import { getImageProps } from 'next/image';
import { ButtonLink } from '../ui';
import { PRICE_AND_FEE, CANCELLATION } from '../../lib/facts';
import { signupUrl, demoUrl } from '../../lib/site';
import s from './PhotoHero.module.css';

/*
 * Home hero: approved lab variant C (truckwys/hero-lab, /lab/hero-c, 1 Oct 2026).
 *
 * Photo: "Silhouette of a truck driving at sunset", Velddrif, Western Cape, South Africa,
 * by Grant Durr (https://unsplash.com/@grant_durr),
 * https://unsplash.com/photos/silhouette-of-building-near-body-of-water-during-sunset-vZ2ACU5jF7Q
 * Unsplash Licence (https://unsplash.com/license): free commercial use, no attribution required
 * (credited here anyway). Not Unsplash+. No people, plates or trailer branding visible.
 * Edits: two crops from the 5949 x 3966 original, saturation 0.72, slightly cooler, a bird removed
 * from the sky. Masters: public/hero/velddrif-desktop.jpg (3840 x 2194, truck in the right third)
 * and public/hero/velddrif-band.jpg (1600 x 1600, phones and tablets, truck below the text).
 * next/image serves AVIF/WebP at the right width for 1x to 3x.
 *
 * SUBJECT is the truck's box in each master (fractions). Keep UI out of it if the layout changes;
 * scratchpad/web/hero-check.mjs checks it at 1440, 1280, 1200, 1024 and 390.
 */
export const SUBJECT = {
  desktop: { x0: 0.55, y0: 0.552, x1: 0.88, y1: 0.64 },
  band: { x0: 0.2, y0: 0.441, x1: 0.92, y1: 0.55 },
};

export const HERO_COPY = {
  eyebrow: 'Load-to-cash software for South African transporters',
  a: 'Your trucks are tracked.',
  b: 'Your money isn’t.',
  lead: 'TruckWys tracks the money on every load: priced from real diesel and toll costs, invoiced the moment it delivers, and followed until it’s paid.',
};

function Photo() {
  const common = { alt: '', fill: true, priority: true } as const;
  const { props: desk } = getImageProps({ ...common, src: '/hero/velddrif-desktop.jpg', quality: 72, sizes: 'calc(100vw - 32px)' });
  const { props: band } = getImageProps({ ...common, src: '/hero/velddrif-band.jpg', quality: 62, sizes: '100vw' });
  return (
    <>
      {/* Preload the right crop for the viewport so the LCP image starts with the document. */}
      <link rel="preload" as="image" href={band.src} imageSrcSet={band.srcSet} imageSizes={band.sizes} media="(max-width: 1199px)" fetchPriority="high" />
      <link rel="preload" as="image" href={desk.src} imageSrcSet={desk.srcSet} imageSizes={desk.sizes} media="(min-width: 1200px)" fetchPriority="high" />
    <div className={s.media} data-subject-desktop={JSON.stringify(SUBJECT.desktop)} data-subject-band={JSON.stringify(SUBJECT.band)}>
      <picture>
        <source media="(max-width: 1199px)" srcSet={band.srcSet} sizes={band.sizes} />
        <img {...desk} className={s.img} alt="" fetchPriority="high" />
      </picture>
    </div>
    </>
  );
}

export default function PhotoHero({ loc = 'home-hero', children }: { loc?: string; children?: React.ReactNode }) {
  const i = (n: number) => ({ ['--i' as string]: n });
  return (
    <section className={s.hero} aria-labelledby="hero-h1" data-hero="photo">
      <div className={s.frame} data-theme="dark">
        <Photo />
        <div className={s.scrim} aria-hidden="true" />
        <div className={s.text}>
          <p className={`${s.eyebrow} ${s.in}`} style={i(0)}>{HERO_COPY.eyebrow}</p>
          <h1 className={s.h1} id="hero-h1">
            <span className={s.in} style={i(1)}>{HERO_COPY.a}</span>{' '}
            <span className={`${s.blue} ${s.in}`} style={i(2)}>{HERO_COPY.b}</span>
          </h1>
          <p className={`${s.lead} ${s.in}`} style={i(3)}>{HERO_COPY.lead}</p>
          <div className={`${s.ctas} ${s.in}`} style={i(4)}>
            <ButtonLink href={signupUrl(loc)} cta="get_started" loc="hero">
              Get started
            </ButtonLink>
            <ButtonLink href={demoUrl(loc)} variant="secondary" cta="open_demo" loc="hero" className={s.demo}>
              Open the demo
            </ButtonLink>
          </div>
          <p className={`${s.price} ${s.in}`} style={i(5)}>
            {PRICE_AND_FEE} {CANCELLATION}
          </p>
        </div>
        <p className={s.place}>Velddrif, Western Cape</p>
      </div>
      {children}
    </section>
  );
}
