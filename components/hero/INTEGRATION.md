# Photo hero: integration

Approved lab variant C (`/lab/hero-c` on `truckwys/hero-lab`, 1 Oct 2026).

## Files
- `components/hero/PhotoHero.tsx`: the hero. It holds the copy (`HERO_COPY`), the photo licence note and the truck's bounding box (`SUBJECT`).
- `components/hero/HeroSections.tsx`: three product cross-sections (cost breakdown, Needs you, revenue per km by lane). They rise over the photo's bottom edge.
- `components/hero/PhotoHero.module.css`: all styles and motion for both components.
- `public/hero/velddrif-desktop.jpg` (3840 x 2194) and `public/hero/velddrif-band.jpg` (1600 x 1600): the photo masters. next/image serves them as AVIF/WebP.

## Swap into `app/page.tsx`
1. Import both components:
   ```tsx
   import PhotoHero from '../components/hero/PhotoHero';
   import HeroSections from '../components/hero/HeroSections';
   ```
2. Replace section 1 (`<section className="hero">…</section>`) with:
   ```tsx
   <PhotoHero loc="home-hero"><HeroSections /></PhotoHero>
   ```
3. Leave the facts row (section 2) directly after it. Give it about 72px of top padding so the cards have room.
4. The old `.hero__*` rules in `styles/site.css` are now unused on Home.

## Notes
- **Primary button:** the hero uses `ButtonLink` (the primary variant), so it picks up main's blue button. The lab paints it blue only through `app/lab/lab.css`.
- **Demo:** it is already a `TextLink`, not a button.
- **Motion:** pure CSS, transform and opacity only, with no JS.
  - The photo settles from scale 1.06 to 1 over 1,6 s, then drifts by at most 1,8% over 26 s.
  - The text lines rise 480 ms apart in steps of 70 ms. The cards follow, 90 ms apart.
  - Text animates from opacity 0.001, so it still counts for LCP.
  - Everything is off under `prefers-reduced-motion`.
- **Preload:** the two `<link rel="preload" media=…>` tags in `PhotoHero` need their `href`. React drops a preload link without one. Phones download only the band crop (about 37 kB at 750w).
- **Layout:** at 1200px and wider, the headline sits on the left and the truck in the right third. Below 1200px, the text sits on the dark frame and the truck sits in its own band below it.
- **Checks:** `scratchpad/web/hero-check.mjs` checks that no UI element overlaps the truck at 1440, 1280, 1200, 1024 and 390. `hero-contrast.py` measures worst-pixel contrast.
- **No captions:** there are no "Sample data" captions. The fragments use the demo company's fictional names.
