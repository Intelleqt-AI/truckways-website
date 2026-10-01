/*
 * Hero lab variants. Prototype only: noindex, not in the sitemap, never linked from the site.
 * Each variant renders the full Home page with a different hero.
 */

export type PhotoKey = keyof typeof PHOTOS;

/* Photos live in public/lab/ (2560px JPEG masters, served through next/image as AVIF/WebP).
   Licence and source for each: scratchpad/web/hero/photos/PHOTOS.md. */
export const PHOTOS = {
  // sa-01, Grant Durr, Unsplash licence. Graded cooler and desaturated.
  p1: { src: '/lab/hero-p1.jpg', w: 2560, h: 1707, place: 'Velddrif, Western Cape', pos: '50% 22%', posMobile: '58% 50%' },
  // sa-07, Clayton Majona, Unsplash licence.
  p2: { src: '/lab/hero-p2.jpg', w: 2560, h: 1707, place: 'N1 at Midrand, Gauteng', pos: '50% 40%', posMobile: '50% 50%' },
};

export type Variant = {
  slug: string;
  name: string;
  layout: 'product' | 'photo-center' | 'photo-split' | 'photo-c' | 'photo-c2';
  photo?: PhotoKey;
  eyebrow: string;
  a: string; // headline line one
  b: string; // headline line two (blue on photo, grey on product)
  lead: string;
  note: string; // what this variant tests
};

export const LEAD =
  'TruckWys prices every load from real costs, raises the invoice on delivery and shows who owes you. Next to the TMS and tracking you already use.';

const EYEBROW = 'Load-to-cash software for South African transporters';

const L_TRACKED =
  'TruckWys tracks the money on every load: priced from real diesel and toll costs, invoiced the moment it delivers, and followed until it’s paid.';
const L_PAY =
  'Price from this month’s diesel and the real SANRAL tolls, invoice the moment a load delivers, and see who still owes you. Next to the tools you already use.';
const L_DIESEL =
  'TruckWys prices every load from this month’s FIASA diesel and the real SANRAL tolls, warns you before you quote below cost, and invoices the moment it delivers.';
const L_MADE =
  'See what a load will cost before you quote it, raise the invoice the day it delivers, and know what every lane and customer really earns.';
const L_BRAIN =
  'TruckWys turns every load into numbers you can act on: the true cost before you quote, the invoice on delivery, and who owes you what.';
const L_TMS =
  'No dispatch, no routing, nothing to rip out. TruckWys prices the load, invoices it on delivery, shows who owes you and what every lane earns.';
const L_CURRENT = 'TruckWys runs the money side of every load, next to the TMS, spreadsheets and tracking you already use.';

export const VARIANTS: Variant[] = [
  { slug: 'hero-a', name: 'Product hero, headline 1', layout: 'product', eyebrow: EYEBROW, a: 'Your trucks are tracked.', b: 'Your money isn’t.', lead: L_TRACKED, note: 'Shortlist #1 on today’s dark product hero. Tests the words without changing the visual.' },
  { slug: 'hero-b', name: 'Hemut-style photo, centred', layout: 'photo-center', photo: 'p1', eyebrow: EYEBROW, a: 'Your trucks are tracked.', b: 'Your money isn’t.', lead: L_TRACKED, note: 'Shortlist #1. Full-bleed rounded photo, centred two-tone headline, blue button, KPI panel over the bottom edge.' },
  { slug: 'hero-c', name: 'Owner\u2019s pick: photo, headline left, dashboard rising', layout: 'photo-c', eyebrow: EYEBROW, a: 'Your trucks are tracked.', b: 'Your money isn\u2019t.', lead: L_TRACKED, note: 'Shortlist #1. Velddrif interlink in the right third, headline left over clean sky, the full dashboard rising over the photo\u2019s bottom edge.' },
  { slug: 'hero-c2', name: 'C2: photo-led, slim KPI strip', layout: 'photo-c2', eyebrow: EYEBROW, a: 'Your trucks are tracked.', b: 'Your money isn\u2019t.', lead: L_TRACKED, note: 'Shortlist #1. Same photo, taller frame, headline anchored bottom-left, a slim KPI strip on the edge, the dashboard and cost breakdown below.' },
  { slug: 'hero-d', name: 'Second photo, headline 2', layout: 'photo-center', photo: 'p2', eyebrow: EYEBROW, a: 'Make every load pay.', b: 'From the first quote to the last rand.', lead: L_PAY, note: 'Shortlist #2 on a different South African photo.' },
  { slug: 'hero-e', name: 'Headline 3, diesel', layout: 'photo-center', photo: 'p1', eyebrow: EYEBROW, a: 'Diesel went up.', b: 'Did your rate?', lead: L_DIESEL, note: 'Shortlist #3. The sharpest South African pain, on the best visual.' },
  { slug: 'hero-f', name: 'Headline 4, the question', layout: 'photo-center', photo: 'p1', eyebrow: EYEBROW, a: 'Did that load make money?', b: 'Know before you quote the next one.', lead: L_MADE, note: 'Shortlist #4. The owner’s question as the headline, on the best visual.' },
  { slug: 'hero-g', name: 'Owner’s core message, SA-scoped', layout: 'photo-center', photo: 'p1', eyebrow: 'Fleet financial intelligence for South Africa', a: 'The financial brain', b: 'for South African fleets.', lead: L_BRAIN, note: 'Evaluated, not shortlisted. The owner’s core message, scoped to South Africa (the product is SA-only today).' },
  { slug: 'hero-h', name: 'Owner’s stance line', layout: 'photo-center', photo: 'p1', eyebrow: EYEBROW, a: 'Your TMS runs the trucks.', b: 'We run the money.', lead: L_TMS, note: 'Evaluated, not shortlisted. Already the H2 of the next section on Home, so as a hero it repeats.' },
  { slug: 'hero-i', name: 'Control: today’s headline on the photo', layout: 'photo-center', photo: 'p1', eyebrow: EYEBROW, a: 'Price it right. Invoice on delivery.', b: 'Get paid.', lead: L_CURRENT, note: 'Control. Today’s words on the new visual, to separate the effect of the photo from the effect of the headline.' },
];
