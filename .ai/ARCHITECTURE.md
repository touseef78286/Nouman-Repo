# Architecture — NOUMAN ARSHAD "Growth Console"

## Overview
The portfolio presents NOUMAN ARSHAD as a **client-growth operator**: one person who
runs the full digital loop for a business (web → SEO → funnels → email → social →
design → data). The site feels like an operator console for that loop — every skill
is a live module/channel with a status signal, and browsing the site is *operating*
the portfolio, matching the "cross-functional, international, trust-based" facts:
3+ yrs at Big Marketing USA (remote), clients in USA/UK, multi-language, textile→
marketing→digital trajectory.

## Stack decisions
| Concern  | Choice | Rationale |
| -------- | ------ | --------- |
| Framework | Next.js 16 (App Router, React 19, TS) | SSG/ISR perf, stable, static-export friendly; matches loop fol reference until owner objects |
| Styling   | Tailwind v4 CSS-first | Zero-runtime tokens, fast iteration |
| Motion    | `motion/react` | Springs + automatic reduced-motion |
| 3D        | three + @react-three/fiber + drei — interactive hero node-sphere | ADR-004: owner chose 3D interactive hero; loaded as client island, capability-gated, static fallback |
| Fonts     | Geist Sans + Geist Mono | Self-hosted via next/font, technical aesthetic |
| Data      | Typed TS modules (`content/`) | Real facts (FACTS.md) drive all content; type-safe |
| Contact   | Static mailto/tel + optional form (no backend needed) | Phone + email already real (`+92 302 6588766`, `Nomanmasih616@gmail.com`) |

## Module layout
```
src/
  app/
    page.tsx            # Growth Console root (single operating surface)
    projects/[slug]/    # per-deliverable case study (WordPress site, funnel, campaign, logo)
  components/
    console/            # ConsoleShell, StatusRail, BootSequence, ModuleCard
    systems/            # WebModule, SEOModule, FunnelModule, EmailModule, SocialModule, DesignModule, DataModule
    shared/             # Section, Container, Chip, Reveal (accessibility-first)
  content/
    identity.ts         # name, objective, contact, location (FACTS.md)
    experience.ts       # timeline: textile mill → marketing → Big Marketing USA
    services.ts         # 7 service modules (skills mapped to deliverables)
    projects.ts         # real deliverables [placeholders until owner lists them]
    locale.ts           # urgency/trust words derived from facts, no inventions
```

## Information architecture (feels like the resume, but as a console)
1. **Boot sequence** — name + objective: "dedicated, honest, committed" rendered as an operator init line (no fake stats).
2. **Status rail** — always-visible: status "OPERATIONS LIVE", location Pir Mahal · Punjab · PK, contact tel/email, availability placeholder.
3. **Seven service channels** — each skill becomes a module (Web Dev, SEO & Blogs, GoHighLevel Funnels, Email & Campaigns, Social Media, Graphic Design/Logos/Branding, Data Entry & Virtual Assistant). Each shows: what is delivered + a status (proven-by-fact where possible, else "verified by owner").
4. **Experience timeline** — textile supervisor → marketing assistant → Digital Creator & Marketing Specialist @ Big Marketing USA (2019–present, remote, USA/UK clients).
5. **Projects / deliverables lane** — real case studies once owner names them (WordPress sites, funnels, campaigns, logos). No invented metrics: "impact" only with owner-supplied numbers.
6. **Languages** — Urdu · English · Punjabi (real advantage for client comms).
7. **Contact terminal** — tel + email + location + (future) WhatsApp CTA. `[git/social placeholders]`.

## Data flow / rendering
- Static server-render of all modules (content from `content/`).
- Interactivity is islands: StatusRail live-clock, console boot trigger, reveal-on-scroll,
  funnel/signal canvas only if it earns its bytes above-the-fold on capable devices.
- Loop boundaries: owner supplies facts → content modules type-check → module renders →
  visitor "operates" (opens channels, reads case study, contacts) → next iteration
  measured by owner feedback + (optional later) contact analytics, never fabricated.

## Performance & bundle strategy
- Console shell is tint + text first; all visual effects deferred/optional.
- One font family (Geist or a closer match) + mono for signal text; system mono fallback.
- No icon library — inline SVG. No image above the fold until owner provides real assets.
- Measured gates: `next build` green, a11y pass, mobile-checked (Pir Mahal/PK contexts → low-end devices matter).

## No-go / reasons recorded
| Option | Rejected because |
| ------ | ---------------- |
| Heavy 3D hero (R3F style) | Facts say *operations/trust*, not graphics spectacle; 3D does not match the resume feel |
| CMS / backend / auth | Static portfolio; contact is tel/email; adding infra is speculative scope |
| Fake metrics ("10k clients", "99% satisfaction") | Forbidden by loop rule 3 — no invention |
| Multi-page heavy nav | One operating surface + case-study routes keeps the console metaphor intact |
| Fabricated projects | Owner's real deliverables pending — placeholders until provided |