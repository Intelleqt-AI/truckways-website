import type { Metadata } from 'next';
import { VARIANTS } from './_parts/variants';

export const metadata: Metadata = { title: { absolute: 'Hero lab' } };

const LAYOUT = { product: 'Dark product hero', 'photo-center': 'Photo, centred (Hemut-style)', 'photo-split': 'Photo, headline left, product right', 'photo-c': 'Photo, headline left, dashboard rising (owner\u2019s pick)', 'photo-c2': 'Photo-led, headline bottom-left, KPI strip' };

export default function LabIndex() {
  return (
    <section className="lab-index">
      <div className="wrap">
        <p className="label">Prototype, not public. Each link is the full Home page with a different hero.</p>
        <h1 className="h2" style={{ marginTop: 8 }}>Hero lab</h1>
        <ol>
          {VARIANTS.map((v) => (
            <li key={v.slug}>
              <a href={`/lab/${v.slug}`}>
                <span className="lab-index__slug">{v.slug.replace('hero-', '').toUpperCase()}</span>
                <span>
                  <span className="lab-index__h">
                    {v.a} <span>{v.b}</span>
                  </span>
                  <span className="lab-index__note" style={{ display: 'block' }}>{v.note}</span>
                </span>
                <span className="lab-index__layout">{LAYOUT[v.layout]}{v.photo ? ` · photo ${v.photo}` : ''}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
