import Image from 'next/image';
import { ButtonLink, TextLink } from '../../../components/ui';
import { CostBreakdown } from '../../../components/fragments/Quote';
import { Kpis } from '../../../components/fragments/HomeDashboard';
import { PRICE_AND_FEE, CANCELLATION } from '../../../lib/facts';
import { signupUrl, demoUrl } from '../../../lib/site';
import { KPIS } from '../../../content/demo-data';
import { rand, num } from '../../../lib/format';
import { PHOTOS, type Variant } from './variants';
import { HeroC2 } from './HeroC';
import PhotoHero from '../../../components/hero/PhotoHero';
import HeroSections from '../../../components/hero/HeroSections';

const PIXEL = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

function Ctas({ loc, onPhoto }: { loc: string; onPhoto?: boolean }) {
  return (
    <div className={`lh__ctas${onPhoto ? ' lh__ctas--photo' : ''}`}>
      <ButtonLink href={signupUrl(loc)} cta="get_started" loc="hero" className="btn--blue">
        Get started
      </ButtonLink>
      <TextLink href={demoUrl(loc)} cta="open_demo" loc="hero" className={onPhoto ? 'tlink--onphoto' : 'tlink--quiet'}>
        Open the demo
      </TextLink>
    </div>
  );
}

const kpiLabel = `TruckWys Home for a demo company: ${rand(KPIS.owed)} owed to you, ${rand(KPIS.revenue12m)} received over 12 months, a ${num(KPIS.netMargin12m, 1)}% net margin and ${KPIS.activeLoads} active loads.`;

/* (a) The current dark product hero, new headline, demo as a text link, no caption. */
export function ProductHero({ v }: { v: Variant }) {
  return (
    <section className="hero" aria-labelledby="hero-h1">
      <div className="hero__panel" data-theme="dark">
        <div className="hero__text">
          <p className="hero__eyebrow">{v.eyebrow}</p>
          <h1 className="h1 hero__h1" id="hero-h1">
            <span>{v.a}</span> <span className="tone-2">{v.b}</span>
          </h1>
          <p className="lead hero__lead">{v.lead}</p>
          <Ctas loc={`lab-${v.slug}`} />
          <p className="small hero__price">
            {PRICE_AND_FEE} {CANCELLATION}
          </p>
        </div>
        <figure className="hero__comp" role="img" aria-label={kpiLabel}>
          <div className="hero__frame" data-theme="light">
            <div className="hero__scale">
              <picture>
                <source media="(min-width: 1024px)" type="image/avif" srcSet="/product/s01-home-light-1080.avif 1080w, /product/s01-home-light-1440.avif 1440w, /product/s01-home-light-2880.avif 2880w" sizes="(max-width: 1099px) 944px, (max-width: 1279px) 1008px, (max-width: 1439px) 1152px, (max-width: 1679px) 1181px, 1296px" />
                <source media="(min-width: 1024px)" type="image/webp" srcSet="/product/s01-home-light-1080.webp 1080w, /product/s01-home-light-1440.webp 1440w, /product/s01-home-light-2880.webp 2880w" sizes="(max-width: 1099px) 944px, (max-width: 1279px) 1008px, (max-width: 1439px) 1152px, (max-width: 1679px) 1181px, 1296px" />
                <img className="hero__shot" src={PIXEL} width={1440} height={900} alt="" fetchPriority="high" decoding="async" />
              </picture>
            </div>
          </div>
          <div className="hero__float" data-theme="light">
            <CostBreakdown float hidden compact />
          </div>
        </figure>
        <div className="hero__phone" data-theme="light">
          <div className="phone">
            <picture>
              <source media="(max-width: 1023px)" type="image/avif" srcSet="/product/s02-home-phone-light-390.avif 1x, /product/s02-home-phone-light-780.avif 2x" />
              <source media="(max-width: 1023px)" type="image/webp" srcSet="/product/s02-home-phone-light-390.webp 1x, /product/s02-home-phone-light-780.webp 2x" />
              <img src={PIXEL} width={390} height={844} alt={kpiLabel} fetchPriority="low" decoding="async" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

function Photo({ v }: { v: Variant }) {
  const p = PHOTOS[v.photo ?? 'p1'];
  return (
    <>
      <Image
        className="lh__img"
        src={p.src}
        alt=""
        fill
        priority
        quality={55}
        // Phones crop a landscape photo to a portrait frame, so they need more pixels than 100vw.
        sizes="(max-width: 639px) 160vw, (max-width: 1023px) 120vw, calc(100vw - 32px)"
        style={{ objectFit: 'cover', ['--pos' as string]: p.pos, ['--pos-m' as string]: p.posMobile }}
      />
      <div className="lh__scrim" aria-hidden="true" />
      {p.place ? <p className="lh__place">{p.place}</p> : null}
    </>
  );
}

/* (b, d, e, f) Hemut-style: full-bleed rounded photo, centred two-tone headline, slim product panel over the bottom edge. */
export function PhotoCenterHero({ v }: { v: Variant }) {
  return (
    <section className="lh lh--center" aria-labelledby="hero-h1">
      <div className="lh__frame" data-theme="dark">
        <Photo v={v} />
        <div className="lh__text">
          <p className="lh__eyebrow">{v.eyebrow}</p>
          <h1 className="lh__h1" id="hero-h1">
            <span>{v.a}</span> <span className="lh__blue">{v.b}</span>
          </h1>
          <p className="lh__lead">{v.lead}</p>
          <Ctas loc={`lab-${v.slug}`} onPhoto />
          <p className="lh__price">
            {PRICE_AND_FEE} {CANCELLATION}
          </p>
        </div>
      </div>
      <figure className="lh__panel" data-theme="light" role="img" aria-label={kpiLabel}>
        <div aria-hidden="true">
          <Kpis />
        </div>
      </figure>
    </section>
  );
}

/* (c) Photo hero, headline left, the quote's cost breakdown on the right. */
export function PhotoSplitHero({ v }: { v: Variant }) {
  return (
    <section className="lh lh--split" aria-labelledby="hero-h1">
      <div className="lh__frame" data-theme="dark">
        <Photo v={v} />
        <div className="lh__grid">
          <div className="lh__text">
            <p className="lh__eyebrow">{v.eyebrow}</p>
            <h1 className="lh__h1" id="hero-h1">
              <span>{v.a}</span> <span className="lh__blue">{v.b}</span>
            </h1>
            <p className="lh__lead">{v.lead}</p>
            <Ctas loc={`lab-${v.slug}`} onPhoto />
            <p className="lh__price">
              {PRICE_AND_FEE} {CANCELLATION}
            </p>
          </div>
          <div className="lh__card" data-theme="light">
            <CostBreakdown float hidden compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero({ v }: { v: Variant }) {
  if (v.layout === 'product') return <ProductHero v={v} />;
  if (v.layout === 'photo-split') return <PhotoSplitHero v={v} />;
  if (v.layout === 'photo-c')
    return (
      <PhotoHero loc={`lab-${v.slug}`}>
        <HeroSections />
      </PhotoHero>
    );
  if (v.layout === 'photo-c2') return <HeroC2 v={v} />;
  return <PhotoCenterHero v={v} />;
}
