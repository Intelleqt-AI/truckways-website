/**
 * Blog covers (fix round 8): one cropped, graded, licensed South African photo per post, at public/covers/<slug>.jpg
 * (1600 x 900, saturation 0.55 to 0.8, slightly cooler; crops made by scratchpad covers.py). No branding, plates or
 * people are legible in any crop. All licences allow free commercial use with no attribution required; credited here anyway.
 *
 * (velddrif, until R9: Grant Durr, https://unsplash.com/photos/silhouette-of-building-near-body-of-water-during-sunset-vZ2ACU5jF7Q, Unsplash Licence; now only on the Home hero)
 * gillitts:   David Rama, https://www.pexels.com/photo/timelapse-of-road-541333/ (Pexels Licence)
 * durban-sun: Ojas Narappanawar, https://www.pexels.com/photo/birds-eye-view-of-the-port-of-durban-4606404/ (Pexels Licence)
 * midrand:    Clayton Majona, https://unsplash.com/photos/a-highway-filled-with-lots-of-traffic-under-a-cloudy-sky-VUEaEIZn4U4 (Unsplash Licence)
 * franschhoek: Aaron Jones, https://unsplash.com/photos/a-car-driving-down-a-road-with-mountains-in-the-background-bMUV5oK_rP8 (Unsplash Licence)
 * durban-day: Magda Ehlers, https://www.pexels.com/photo/drone-shot-of-a-port-during-the-day-3814211/ (Pexels Licence)
 * R9 (the Home hero photo, Velddrif, is no longer a blog cover; adjacent thumbnails in a category differ). All Unsplash
 * Licence, checked premium=false and plus=false; crops made by scratchpad fix-r9/grade/covers.py:
 * cape-town-quay: Theophilus Asamoah Yeboah, https://unsplash.com/photos/industrial-buildings-and-cranes-at-a-harbor-MSRF2MBkbrY
 *                 (the company logos on the shed and the tower are softened)
 * barkly-east:    William Veitch, https://unsplash.com/photos/a-long-road-through-golden-fields-leading-to-mountains-gDa6bciSpxQ
 * eastern-cape:   Aphiwe Anna Biyana, https://unsplash.com/photos/an-empty-road-with-a-fence-and-a-field-in-the-background-bw1UMft0DD8
 * central-karoo:  redcharlie, https://unsplash.com/photos/road-traversing-land-mass-cnTYZThmdu0
 */
const PLACES = {
  gillitts: 'The N3 at Gillitts, KwaZulu-Natal, at dusk',
  'durban-sun': 'The Port of Durban from the air at sunset',
  midrand: 'Traffic on the N1 at Midrand, Gauteng, in the rain',
  franschhoek: 'The Franschhoek Pass and valley, Western Cape',
  'durban-day': 'Rail sidings and quays at the Port of Durban',
  'cape-town-quay': 'A quay crane and sheds in Cape Town harbour',
  'barkly-east': 'A road through grassland to the mountains near Barkly East, Eastern Cape',
  'eastern-cape': 'An empty two-lane road in the Eastern Cape in the morning',
  'central-karoo': 'A road winding through the Central Karoo under a fiery cloud sky',
} as const;

const BY_SLUG: Record<string, keyof typeof PLACES> = {
  'how-to-quote-freight-rates-south-africa-ai': 'cape-town-quay',
  'true-cost-running-truck-fleet-south-africa-2026': 'barkly-east',
  'fleet-profitability-south-africa-ai-powered-pricing': 'gillitts',
  'hidden-profit-leaks-south-african-fleet-operators': 'gillitts',
  'cross-border-trucking-southern-africa-multi-currency': 'durban-sun',
  'invoice-factoring-vs-ai-cash-advances-sa-transport': 'durban-sun',
  'fuel-cost-management-sa-fleets-strategies': 'midrand',
  'sa-fleet-operators-real-cost-per-kilometre': 'franschhoek',
  'future-of-freight-africa-ai-transforming-transport': 'central-karoo',
  'fleet-management-software-south-africa-2026': 'franschhoek',
  'proof-of-delivery-invoice-on-delivery': 'durban-day',
  'cash-flow-transport-business-south-africa': 'eastern-cape',
};

export type Cover = { src: string; alt: string };

/** The post's cover, or undefined for a post without one (add its crop to covers.py and BY_SLUG). */
export function coverOf(slug: string): Cover | undefined {
  const k = BY_SLUG[slug];
  return k ? { src: `/covers/${slug}.jpg`, alt: PLACES[k] } : undefined;
}
