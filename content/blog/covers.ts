/**
 * Blog covers (fix round 8): one cropped, graded, licensed South African photo per post, at public/covers/<slug>.jpg
 * (1600 x 900, saturation 0.55 to 0.8, slightly cooler; crops made by scratchpad covers.py). No branding, plates or
 * people are legible in any crop. All licences allow free commercial use with no attribution required; credited here anyway.
 *
 * velddrif:   Grant Durr, https://unsplash.com/photos/silhouette-of-building-near-body-of-water-during-sunset-vZ2ACU5jF7Q (Unsplash Licence)
 * gillitts:   David Rama, https://www.pexels.com/photo/timelapse-of-road-541333/ (Pexels Licence)
 * durban-sun: Ojas Narappanawar, https://www.pexels.com/photo/birds-eye-view-of-the-port-of-durban-4606404/ (Pexels Licence)
 * midrand:    Clayton Majona, https://unsplash.com/photos/a-highway-filled-with-lots-of-traffic-under-a-cloudy-sky-VUEaEIZn4U4 (Unsplash Licence)
 * franschhoek: Aaron Jones, https://unsplash.com/photos/a-car-driving-down-a-road-with-mountains-in-the-background-bMUV5oK_rP8 (Unsplash Licence)
 * durban-day: Magda Ehlers, https://www.pexels.com/photo/drone-shot-of-a-port-during-the-day-3814211/ (Pexels Licence)
 */
const PLACES = {
  velddrif: 'A truck at sunset on the causeway at Velddrif, Western Cape',
  gillitts: 'The N3 at Gillitts, KwaZulu-Natal, at dusk',
  'durban-sun': 'The Port of Durban from the air at sunset',
  midrand: 'Traffic on the N1 at Midrand, Gauteng, in the rain',
  franschhoek: 'The Franschhoek Pass and valley, Western Cape',
  'durban-day': 'Rail sidings and quays at the Port of Durban',
} as const;

const BY_SLUG: Record<string, keyof typeof PLACES> = {
  'how-to-quote-freight-rates-south-africa-ai': 'velddrif',
  'true-cost-running-truck-fleet-south-africa-2026': 'velddrif',
  'fleet-profitability-south-africa-ai-powered-pricing': 'gillitts',
  'hidden-profit-leaks-south-african-fleet-operators': 'gillitts',
  'cross-border-trucking-southern-africa-multi-currency': 'durban-sun',
  'invoice-factoring-vs-ai-cash-advances-sa-transport': 'durban-sun',
  'fuel-cost-management-sa-fleets-strategies': 'midrand',
  'sa-fleet-operators-real-cost-per-kilometre': 'franschhoek',
  'future-of-freight-africa-ai-transforming-transport': 'franschhoek',
  'fleet-management-software-south-africa-2026': 'franschhoek',
  'proof-of-delivery-invoice-on-delivery': 'durban-day',
  'cash-flow-transport-business-south-africa': 'durban-day',
};

export type Cover = { src: string; alt: string };

/** The post's cover, or undefined for a post without one (add its crop to covers.py and BY_SLUG). */
export function coverOf(slug: string): Cover | undefined {
  const k = BY_SLUG[slug];
  return k ? { src: `/covers/${slug}.jpg`, alt: PLACES[k] } : undefined;
}
