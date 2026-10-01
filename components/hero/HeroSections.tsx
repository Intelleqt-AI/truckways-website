import { CostBreakdown } from '../fragments/Quote';
import { NeedsYouCard, LaneRanking } from '../fragments/Money';
import s from './PhotoHero.module.css';

/*
 * Three product cross-sections that rise over the photo hero's bottom edge and bridge to the facts row.
 * Real product fragments with the demo company's fictional data (no "sample data" caption, per owner).
 * Render as <PhotoHero><HeroSections /></PhotoHero>. Below 1200px the third card is hidden on tablets;
 * phones stack all three.
 */
const CELLS = [
  { el: <CostBreakdown compact />, a: 'Price it.', b: 'This month’s diesel and the real N3 tolls, line by line.' },
  { el: <NeedsYouCard />, a: 'Chase it.', b: 'Who owes you, largest first.' },
  { el: <LaneRanking />, a: 'Know it.', b: 'What every lane really earns per kilometre.' },
];

export default function HeroSections() {
  return (
    <div className={s.sections} aria-label="TruckWys product views">
      {CELLS.map((c, n) => (
        <div className={s.cell} key={c.a} style={{ ['--i' as string]: n }} data-theme="light">
          {c.el}
          <p className={s.label}>
            <b>{c.a}</b> {c.b}
          </p>
        </div>
      ))}
    </div>
  );
}
