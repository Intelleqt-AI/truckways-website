import { KPIS } from '../content/demo-data';
import { rand, num } from '../lib/format';

/**
 * S2: the real phone Home of the demo company (final capture, 30 Sep 2026), in the phone frame.
 * Lazy, at every width (unlike the Home hero, which swaps it for S1 on desktops).
 */
export default function PhoneShot({ scale = 0.8, className = '' }: { scale?: number; className?: string }) {
  return (
    <div className={`phoneshot ${className}`.trim()} style={{ ['--ps' as string]: scale }} data-theme="light">
      <div className="phone">
        <picture>
          <source type="image/avif" srcSet="/product/s02-home-phone-light-390.avif 1x, /product/s02-home-phone-light-780.avif 2x" />
          <source type="image/webp" srcSet="/product/s02-home-phone-light-390.webp 1x, /product/s02-home-phone-light-780.webp 2x" />
          <img
            src="/product/s02-home-phone-light-390.webp"
            width={390}
            height={844}
            loading="lazy"
            decoding="async"
            alt={`TruckWys on a phone for a fictional demo company: ${rand(KPIS.owed)} owed to you, ${rand(KPIS.revenue12m)} received over 12 months, a ${num(KPIS.netMargin12m, 1)}% margin and ${KPIS.activeLoads} active loads.`}
          />
        </picture>
      </div>
    </div>
  );
}
