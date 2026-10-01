# The blog

Posts live at `/blog/<slug>`. Each post is one file in `posts/`, registered in `index.ts`.
Everything else (the index page, the table of contents, JSON-LD, the sitemap, the FAQ block,
"More from the blog") is generated from that entry.

## Add a post

1. Copy an existing post, e.g. `posts/hidden-profit-leaks-south-african-fleet-operators.tsx`,
   to `posts/<slug>.tsx`. The slug is lowercase words joined by hyphens, keyword first.
2. Fill in every field of the `Post` type (`types.tsx` documents each one):
   - `seoTitle` 48 characters or fewer (the layout adds " | TruckWys"), `description` 155 or fewer.
   - `category`: one of `CATEGORIES` in `types.tsx`.
   - `keyword`: the one search term the post targets. Check no other post targets it.
   - `published` and `reviewed` as `YYYY-MM-DD`.
   - `faq`: only questions people really ask; plain-text answers.
3. Sources: cite every figure with `<A s={...}>`. A source used by several posts goes in
   `sources.ts`; a source only this post uses goes in a `const S = {...}` at the top of the post.
   Open every link and check the figure on the day you set `reviewed`. List every cited source in
   `sources`, in the order first cited.
4. Import the post in `index.ts` and add it to `POSTS`.
5. Run `./node_modules/.bin/tsc --noEmit -p .`, `./node_modules/.bin/next build`, then
   `node scripts/check-copy.mjs`.

## House rules (the copy check enforces most of them)

- South African formats: `R&nbsp;4&nbsp;499`, `R&nbsp;30,05`, `0,25%`. "R" never wraps away from its figure.
- No em dashes. No "AI" label; say "language model" or "statistical model". No hype words.
- No invented statistics, customers or quotes. A number is either sourced and dated, or a worked
  example with its inputs stated as example inputs.
- TruckWys is a load-to-cash add-on, not a TMS, fleet tool or accounting package. Fast Pay and
  Insurance are "coming soon" only. Price and fee wording comes from `lib/facts.ts`.
- Not tax or legal advice: say so where a post touches VAT, contracts or finance.

## Change or retire a post

- Changing figures: update them, the sources, and `reviewed`.
- Never change a published slug. If you must, add a 308 in `next.config.mjs` from the old URL
  straight to the new one (no chains), and update internal links.
- Don't delete a post with backlinks; rewrite it.

## Share image

Each post has its own Open Graph card at `public/og/blog/<slug>.png` (1200 x 630, dark, the post's two-tone H1 and
"TruckWys Blog · <category>"), made the same way as the other cards in `public/og`. Until a post has one, the page
falls back to `public/og/blog.png` automatically.
