import PhoneShot from './PhoneShot';
import StoreBadges from './StoreBadges';
import { TwoTone } from './ui';

/*
 * Home: "TruckWys on your phone", a compact band (owner, 1 Oct 2026). The whole device sits right, with a
 * soft shadow (fix round 8: no longer cut by the band edge); the band keeps a reduced section padding.
 * Copy is limited to what the site already claims for the app (/product "The same numbers on your
 * phone") and what the app's README lists (overview, quotes, invoices). Nothing about POD upload,
 * sending quotes or Fast Pay requests from the phone: not confirmed live.
 */
const LINES = [
  { b: 'Cash at a glance.', s: 'What you are owed, what has come in and your margin, on the first screen.' },
  { b: 'Quotes and invoices on the move.', s: 'See where each quote stands and which invoices are overdue.' },
  { b: 'One account.', s: 'The same company and the same numbers as the web app.' },
];

export default function PhoneSection({ loc = 'home_phone', grey }: { loc?: string; grey?: boolean }) {
  return (
    <section className={`sec phs${grey ? ' sec--grey' : ''}`} aria-labelledby="phone-h">
      <div className="wrap phs__grid">
        <div className="phs__text reveal">
          <TwoTone id="phone-h" a="On your phone, too." b="iPhone and Android." />
          <ul className="phs__lines list-reset">
            {LINES.map((l) => (
              <li key={l.b}>
                <b>{l.b}</b> <span>{l.s}</span>
              </li>
            ))}
          </ul>
          <div className="phs__stores">
            <StoreBadges loc={loc} />
          </div>
        </div>
        {/* Motion: the phone rises 40px as the band enters, then drifts slightly on scroll (SiteScripts). */}
        <figure className="phs__vis" data-pframe>
          <PhoneShot scale={0.68} className="phs__phone" parallax />
        </figure>
      </div>
    </section>
  );
}
