import { getImageProps } from 'next/image';
import { ButtonLink, TextLink } from '../../../components/ui';
import { CostBreakdown } from '../../../components/fragments/Quote';
import { Kpis } from '../../../components/fragments/HomeDashboard';
import { PRICE_AND_FEE, CANCELLATION } from '../../../lib/facts';
import { signupUrl, demoUrl } from '../../../lib/site';
import { KPIS } from '../../../content/demo-data';
import { rand, num } from '../../../lib/format';
import type { Variant } from './variants';
import LabMotion from './LabMotion';

/*
 * Variant C / C2 photo. Source: sa-01, Velddrif, Western Cape, by Grant Durr (Unsplash licence).
 * Two art-directed crops from the 5949 px original, graded (saturation 0.72, slightly cooler):
 *  - desktop 3840 x 2194, truck in the right third;
 *  - band 1600 x 1600 for phones and tablets, truck centred, shown below the text.
 * SUBJECT = the truck's bounding box in each master, as fractions. Used by CSS (object-position is
 * chosen so the box stays in frame) and by the overlap check in scratchpad/web/hero-check.mjs.
 */
export const SUBJECT = {
  desktop: { x0: 0.55, y0: 0.552, x1: 0.88, y1: 0.64 },
  band: { x0: 0.2, y0: 0.441, x1: 0.92, y1: 0.55 },
};

const PIXEL = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

function PhotoC() {
  const common = { alt: '', fill: true, priority: true } as const;
  // Desktop: the frame is calc(100vw - 32px) wide up to 1888px. Phones/tablets: the band is 100vw.
  const { props: desk } = getImageProps({ ...common, src: '/lab/c-desktop.jpg', quality: 72, sizes: 'calc(100vw - 32px)' });
  const { props: band } = getImageProps({ ...common, src: '/lab/c-band.jpg', quality: 62, sizes: '100vw' });
  return (
    <div className="lc__media" data-subject-desktop={JSON.stringify(SUBJECT.desktop)} data-subject-band={JSON.stringify(SUBJECT.band)}>
      <picture>
        <source media="(max-width: 1199px)" srcSet={band.srcSet} sizes={band.sizes} />
        <img {...desk} className="lc__img" alt="" fetchPriority="high" />
      </picture>
    </div>
  );
}

const dashLabel = `TruckWys Home for a demo company: ${rand(KPIS.owed)} owed to you (${rand(KPIS.pastDue)} past due), ${rand(KPIS.revenue12m)} received over 12 months, a ${num(KPIS.netMargin12m, 1)}% net margin and ${KPIS.activeLoads} active loads.`;

function Dashboard({ withFloat }: { withFloat?: boolean }) {
  return (
    <figure className={`lc__dash lc-rise${withFloat ? ' lc__dash--float' : ''}`} role="img" aria-label={dashLabel}>
      <div className="lc__screen" data-theme="light">
        <picture>
          <source media="(min-width: 768px)" type="image/avif" srcSet="/product/s01-home-light-1080.avif 1080w, /product/s01-home-light-1440.avif 1440w, /product/s01-home-light-2880.avif 2880w" sizes="(max-width: 1279px) calc(100vw - 96px), 1180px" />
          <source media="(min-width: 768px)" type="image/webp" srcSet="/product/s01-home-light-1080.webp 1080w, /product/s01-home-light-1440.webp 1440w, /product/s01-home-light-2880.webp 2880w" sizes="(max-width: 1279px) calc(100vw - 96px), 1180px" />
          <img className="lc__shot" src={PIXEL} width={1440} height={900} alt="" decoding="async" />
        </picture>
      </div>
      <div className="lc__phone" data-theme="light">
        <div className="phone">
          <picture>
            <source media="(max-width: 767px)" type="image/avif" srcSet="/product/s02-home-phone-light-390.avif 1x, /product/s02-home-phone-light-780.avif 2x" />
            <source media="(max-width: 767px)" type="image/webp" srcSet="/product/s02-home-phone-light-390.webp 1x, /product/s02-home-phone-light-780.webp 2x" />
            <img src={PIXEL} width={390} height={844} alt="" decoding="async" />
          </picture>
        </div>
      </div>
      {withFloat ? (
        <div className="lc__float" data-theme="light">
          <CostBreakdown float hidden compact />
        </div>
      ) : null}
    </figure>
  );
}

function Text({ v }: { v: Variant }) {
  const loc = `lab-${v.slug}`;
  return (
    <div className="lc__text">
      <p className="lc__eyebrow lc-in" style={{ ['--i' as string]: 0 }}>{v.eyebrow}</p>
      <h1 className="lc__h1" id="hero-h1">
        <span className="lc-in" style={{ ['--i' as string]: 1 }}>{v.a}</span>{' '}
        <span className="lc__blue lc-in" style={{ ['--i' as string]: 2 }}>{v.b}</span>
      </h1>
      <p className="lc__lead lc-in" style={{ ['--i' as string]: 3 }}>{v.lead}</p>
      <div className="lc__ctas lc-in" style={{ ['--i' as string]: 4 }}>
        <ButtonLink href={signupUrl(loc)} cta="get_started" loc="hero" className="btn--blue">
          Get started
        </ButtonLink>
        <TextLink href={demoUrl(loc)} cta="open_demo" loc="hero" className="tlink--onphoto">
          Open the demo
        </TextLink>
      </div>
      <p className="lc__price lc-in" style={{ ['--i' as string]: 5 }}>
        {PRICE_AND_FEE} {CANCELLATION}
      </p>
    </div>
  );
}

/* C: headline left, truck right third, the full dashboard rising over the photo's bottom edge. */
export function HeroC({ v }: { v: Variant }) {
  return (
    <section className="lc lc--c" aria-labelledby="hero-h1">
      <div className="lc__frame" data-theme="dark">
        <PhotoC />
        <div className="lc__scrim" aria-hidden="true" />
        <Text v={v} />
        <p className="lc__place">Velddrif, Western Cape</p>
      </div>
      <Dashboard />
      <LabMotion />
    </section>
  );
}

/* C2: photo-led. Taller frame, headline anchored bottom-left, a slim KPI strip over the bottom edge,
   then the full dashboard with the cost breakdown in its own band below. */
export function HeroC2({ v }: { v: Variant }) {
  return (
    <section className="lc lc--c2" aria-labelledby="hero-h1">
      <div className="lc__frame" data-theme="dark">
        <PhotoC />
        <div className="lc__scrim" aria-hidden="true" />
        <Text v={v} />
        <p className="lc__place">Velddrif, Western Cape</p>
      </div>
      <div className="lc__strip" data-theme="light" aria-hidden="true">
        <Kpis />
      </div>
      <div className="lc__stage">
        <Dashboard withFloat />
      </div>
      <LabMotion />
    </section>
  );
}
