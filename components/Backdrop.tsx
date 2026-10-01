import { getImageProps } from 'next/image';

/*
 * "Product on photo" backdrops (owner, 1 Oct 2026, after Hemut): a heavily blurred, dark, cool South
 * African road photo behind a key product visual. The blur is baked into the file (about 40px at full
 * size), so each is 17 to 23 kB and nothing is filtered in the browser. Grade: saturation 0.3 to 0.55,
 * brightness about 0.6, slightly cooler. No branding, plates or people survive the blur.
 *
 * n1-midrand:  "N1 route just passing Midrand", by Clayton Majona (https://unsplash.com/@phathisile),
 *              https://unsplash.com/photos/a-highway-filled-with-lots-of-traffic-under-a-cloudy-sky-VUEaEIZn4U4
 *              Unsplash Licence (https://unsplash.com/license), not Unsplash+.
 * durban-port: "Birds Eye View of the Port of Durban", by Ojas Narappanawar
 *              (https://www.pexels.com/@ojas-narappanawar-382627),
 *              https://www.pexels.com/photo/birds-eye-view-of-the-port-of-durban-4606404/ Pexels Licence.
 * n3-gillitts: "Timelapse of road", Gillitts (N3), KwaZulu-Natal, by David Rama
 *              (https://www.pexels.com/@phreewil), https://www.pexels.com/photo/timelapse-of-road-541333/
 *              Pexels Licence.
 * Both licences allow free commercial use with no attribution required; credited here anyway.
 *
 * The image is 120% of the panel's height so the scroll parallax in SiteScripts (data-parallax) never
 * shows an edge.
 */
export type BackdropPhoto = 'n1-midrand' | 'durban-port' | 'n3-gillitts';

export default function Backdrop({ photo, sizes = '(max-width: 1023px) 100vw, 60vw' }: { photo: BackdropPhoto; sizes?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { props: { style: _style, ...props } } = getImageProps({ src: `/backdrops/${photo}.jpg`, alt: '', fill: true, quality: 60, sizes });
  return (
    <div className="backdrop" aria-hidden="true" data-pframe>
      <img {...props} className="backdrop__img" alt="" loading="lazy" decoding="async" data-parallax="0.06" />
    </div>
  );
}
