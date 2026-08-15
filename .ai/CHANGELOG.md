# Changelog — quantum-signal-spatial-core

## 2026-08-15
- Folder created at `T:\sem 5\quantum-signal-spatial-core` (random name per owner).
- Loop fol kit seeded into root and `.ai/`.
- ADR-001: doc-kit scaffold only (superseded — project later re-activated as portfolio build).
- Project re-activated as new portfolio build: extensive, logic-driven, "never seen before".
- DESIGN_PLAN.md drafted: 7 uniqueness axes, 5 phases, 7 candidate systems, measurement plan, out-of-scope list.
- TASKS updated (T-002 in progress, T-003..T-006 pending). Awaiting owner details before Phase 1.

## 2026-08-15 (pass 2)
- Owner supplied full resume facts → recorded verbatim in `FACTS.md` (no fabrication).
- ADR-003: concept lock "Growth Console" — portfolio matches the operations/marketing feel of owner's details.
- ARCHITECTURE.md written: Growth Console shell, 7 service channels mapped to real skills, experience timeline, contact terminal, low-end-device + a11y first-class, heavy-3D rejected.
- TASKS synced (T-004, T-005 Done; T-006 next). Awaiting owner's real project list for deliverables lane.

## 2026-08-15 (pass 3) — FIRST BUILD
- Scaffolded Next.js 16.3.1 (App Router, TS, Tailwind v4, ESLint, Turbopack) in project root (docs preserved).
- Added `motion` dep. Package named `quantum-signal-spatial-core`.
- Content layer `src/content/identity.ts` — real facts from FACTS.md (identity, languages, experience, education, 7 services, 9 skills).
- Console shell built: `StatusRail` (sticky rail, live-status ping, mobile MENU toggle, section nav), `BootSequence` (typewriter, reduced-motion => instant), `page.tsx` (hero identity + objective, service channel grid, experience timeline, education details, contact terminal, project placeholder lane, footer).
- Design tokens applied per design_system: dark `#0a0e14` base, teal accent, Geist Sans/Mono.
- Measured: `npm run lint` clean, `npm run build` green (~10s, static prerender). Fixed 2 react-hooks set-state-in-effect errors by routing reveals through timers.
- No fabricated content: objective verbatim; projects lane is an explicit awaiting-owner placeholder.

## 2026-08-15 (pass 4) — SAMPLE PLACEHOLDERS SEEDED
- Owner directive: "add randoms" to populate the projects lane.
- Content: 6 clearly-labeled demo projects in `content/identity.ts` (web, funnel, email campaign, brand kit, social, data/VA) — all marked SAMPLE PLACEHOLDER, none posed as real client work.
- Page: projects lane now renders the sample cards with `SAMPLE` badge + replace-with-real note.
- Measured: lint clean, `next build` green (static prerender ~1.5s).

## 2026-08-15 (pass 5) — MOTION + CASE STUDIES + QA
- Built `Reveal` scroll-reveal wrapper (IntersectionObserver, reduced-motion instant path, timer-based set).
- Applied Reveal to services grid, experience timeline, projects grid with stagger delays.
- Case-study routes: `src/app/projects/[slug]/page.tsx` with `generateStaticParams` + metadata per project; 6 SSG pages (wordpress-business-site, ghl-booking-funnel, email-campaign-series, logo-brand-kit, social-media-management, data-entry-va-ops).
- Enriched sample projects with slug/brief/deliverables/outcome (all explicit SAMPLE, no invented metrics).
- HOME cards now link to their case-study pages.
- Measured: lint clean; `next build` green (1 static + 6 SSG); prod server: `/` 200 (1 h1), `/projects/wordpress-business-site` 200 (1 h1); no `[PLACEHOLDER]`/template leaks in HTML.
- QA.md pass 1 recorded; one open item: explicit focus-visible ring visual check pending for next visual pass.

## 2026-08-15 (pass 6) — A11Y FOCUS PASS
- Added global `:focus-visible` outline (accent, 2px, offset 2px) + `:focus:not(:focus-visible)` suppression to globals.css.
- Verified rendered HTML: landmarks (`main`/`header`/`footer`), desktop nav aria-label, `aria-live` on boot, `aria-expanded`/`aria-controls` on MENU, tel/mailto links correct, 1 h1, 14 links.
- Lint + `next build` green.
- QA.md: focus-ring item closed — full QA checklist now green.

## 2026-08-15 (pass 7) — WARM PREMIUM RESTYLE
- Owner directive: remove neon colors, work on color + typography.
- Palette swapped: teal/violet (#5eead4/#a78bfa) → brass/warm stone (#d4a458/#b8863f on #14120e); LIVE sage, warn terracotta.
- Typography: Fraunces (display serif) for h1/h2, Manrope for body, Geist Mono retained for meta.
- 3D sphere + SVG fallback + all glows/gradients recolored to brass (no neon hexes remain — grep-verified).
- `design_system.md` created documenting locked palette, type, surfaces, motion, anti-patterns.
- Measured: lint clean, `next build` green, dev server 200.