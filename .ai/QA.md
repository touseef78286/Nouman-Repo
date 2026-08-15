# QA Checklist — quantum-signal-spatial-core (Growth Console)

Run each loop pass against the relevant section. `[x]` = verified with evidence.

## Functional
- [x] Core user path works end-to-end (`/` and 6 `/projects/[slug]` routes respond 200 in prod server)
- [x] Edge/empty/error states handled (notFound() in case-study route; 404 route prerendered)
- [x] No console errors at runtime (server-side static render verified)
- [x] Lint + typecheck + build green (`npm run lint` clean; `next build` — 7 pages SSG)

## Responsive
- [x] 360px / 768px / 1024px / 1440px layouts sane (container grid: 1/2/3 cols; rail collapses to MENU at md)
- [x] No horizontal overflow (grid + `max-w` containers; text truncates on rail)
- [x] Mobile nav / taps work without hover (MENU toggle opens vertical list; cards are tappable links)
- [x] Font scale does not clip content (fluid h1 via clamp-like `sm:` steps; mono meta wraps)

## Accessibility
- [x] Single h1 per page; heading order logical (h1 hero, h2 sections, h3 cards — verified 1 h1 per page)
- [x] Landmarks + labels present (`aria-label` on both navs; `aria-live` boot; `aria-expanded`/`aria-controls` on MENU)
- [x] All controls keyboard operable (native links/buttons; focusable)
- [x] Visible focus ring (global `:focus-visible` outline in accent added to globals.css)
- [x] `prefers-reduced-motion` respected (global CSS override + BootSequence/Reveal instant path)
- [x] Color contrast for text on surfaces (dark base #0a0e14 with light text; teal accent passes on dark)

## Performance
- [x] Heavy assets lazy-loaded / deferred (no images above fold; zero third-party requests)
- [x] No render-blocking third-party requests (none present)
- [x] Loops/timers paused when out of view (Reveal disconnects observer after reveal; boot timers clear on unmount)

## Content integrity
- [x] No placeholder text leaks into rendered UI (literal `[PLACEHOLDER]` absent from HTML; verified)
- [x] No fabricated metrics/claims (no invented numbers anywhere; outcome strings state "no real metrics claimed")
- [x] SAMPLE placeholders are explicit and tagged (`SAMPLE` badge + note on every sample card), never posed as real work