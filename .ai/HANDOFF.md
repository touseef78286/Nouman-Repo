# Handoff — 2026-08-15 (a11y focus pass)

## Entered the loop
Continue the Growth Console portfolio: motion polish (Reveal), case-study routes,
wire project cards, and a QA sweep per QA.md.

## Changed
- `src/components/shared/Reveal.tsx` — new scroll-reveal wrapper (IntersectionObserver, reduced-motion instant, timer-driven set, stagger delay).
- Applied Reveal to services grid, experience timeline, projects grid.
- `src/app/projects/[slug]/page.tsx` — new case-study route: generateStaticParams, per-project metadata, brief/scope/deliverables/outcome sections, notFound fallback.
- `src/content/identity.ts` — sample projects enriched with slug/brief/deliverables/outcome (still SAMPLE, no invented metrics).
- `src/app/page.tsx` — project cards now Link to case-study pages; Reveal applied.
- `.ai` docs: TASKS (T-007..T-009), CHANGELOG (pass 5), QA.md (pass 1), this handoff.

## Observed / measured
- `npm run lint` clean. `npm run build` green: 1 static `/` + 6 SSG `/projects/[slug]`.
- Prod server checks: `/` 200 (1 h1), `/projects/wordpress-business-site` 200 (1 h1).
- Content integrity: no `[PLACEHOLDER]`, no create-next-app leftovers in HTML; SAMPLE badges explicit.

## Decisions made
- No new ADRs; implementation follows locked architecture (ADR-003 + ARCHITECTURE.md).
- Case-study data schema: slug/brief/deliverables/outcome appended to each project entry.

## Next iteration
1. Owner real projects → replace samples (delete note/outcome SAMPLE language).
2. Optional: hero data-viz/3D-lite (only if it earns its bytes per architecture), live contact telemetry with owner approval, deploy to Vercel when ready.