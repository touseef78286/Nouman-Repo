# Design Plan — "The Engineer's Console" (draft working title)
> Super-extensive, logic-driven portfolio. Goal: a system the visitor *operates*, not reads.
> This is the PLAN. Owner supplies real facts next; nothing here is claimed as real data.

## 0. Planning loop state
- Status: PLAN DRAFT — awaiting owner details
- Contract: every feature defines how it is observed, measured, iterated
- Rule: no fabrication — all facts marked `[PLACEHOLDER]` until owner provides

---

## 1. North star (one sentence)
A portfolio that is not a page of projects, but a **system the visitor explores** —
where identity, projects, skills, and process are rendered as an interactive
engineering console with spatial depth, live telemetry, and a persistent internal logic.

## 2. Why this has "never been seen" (uniqueness axes)
The portfolio must be uncommon on structural grounds, not decoration:

| Axis | Common portfolio | This one |
| ---- | ---------------- | -------- |
| Metaphor | "Hey, look at me" | Operated system (console / facility / machine) |
| Layout | Scroll list of sections | Modular panels / rooms that assemble a system |
| Projects | Cards with screenshots | Case-studies as "modules" with signal/data flow |
| Motion | Hero animation + hovers | Motion as *evidence* of the system (telemetry, state) |
| Logic | Cosmetic | Internal rules: graph, states, invariants, input → output paths |
| Sound/id | absent | Optional reactive audio tied to state (respect reduced-mode) |
| Depth | Flat sections | Layered: overview ↔ detail ↔ internals (drill-down) |

## 3. Design plan phases (build order)

### Phase 0 — Facts intake (owner provides)
- [ ] Identity: real name/handle, role, tagline `[PLACEHOLDER]`
- [ ] Projects: list, real descriptions, tech, outcomes `[PLACEHOLDER]`
- [ ] Skills/stack real list `[PLACEHOLDER]`
- [ ] Social links / contact preferences `[PLACEHOLDER]`
- [ ] Which "uniqueness" axes matter most to owner (pick 2–3 to go deep)

### Phase 1 — Concept lock (ADR)
- [ ] Fix the ruling metaphor (console vs facility vs living organism vs OS)
- [ ] Define the 3 core "systems" the visitor can operate
- [ ] Write the interaction language (states, transitions, feedback)
- [ ] Set the anti-template design rules (typography, color, signal language)

### Phase 2 — Architecture
- [ ] Stack decision (Next.js reference, but re-decide for THIS scope: 3D weight, audio, canvas, persistence)
- [ ] Information architecture: what is a "module"? How do pages/panels connect?
- [ ] Data model: typed content + how telemetry/state flows
- [ ] Performance + bundle budget; device capability gates (reduced-motion, weak GPU, memory)
- [ ] Accessibility layer as a first-class "visibility mode"

### Phase 3 — Systems to build (candidate modules for owner to approve)
1. **Identity core** — who you are, rendered as a boot/log sequence or console intro
2. **Reactor / project engine** — projects as running modules with live status + signal flow
3. **Signal map** — capabilities/skills as a graph of connected capabilities, not a grid
4. **Process viewer** — how you work, shown as a visualized loop (build→observe→measure→refine)
5. **Experiments bay** — the "workshop" of playful/failed/ongoing experiments
6. **Terminal/contact** — a shell-style contact + command surface
7. **META layer** — the portfolio documents its own architecture (this plan, the loop, telemetry)

### Phase 4 — Build order (smallest correct first)
- [ ] Skeleton + identity core (text truth, no polish) → visible early
- [ ] Signal map as static graph → animate only after logic is proven
- [ ] Project engine with 2 real projects `[PLACEHOLDER]`
- [ ] Process viewer loop visualization
- [ ] Experiments + terminal/contact
- [ ] META layer
- [ ] Telemetry + motion pass + QA + audit

## 4. Measurement plan
How we know this is "the best they've seen":
- [ ] Each module has an observable (interaction, dwell, completion of its "operation")
- [ ] Perf budget measured (LCP, CLS, INP) — targets once real build exists
- [ ] a11y checks: keyboard-only usable, contrast, reduced-motion respected
- [ ] Content audit: zero placeholder leaks, zero fabricated claims
- [ ] Owner demo gate: owner walks the site and operates all systems before "done"

## 5. What is explicitly OUT OF SCOPE (until owner says otherwise)
- [ ] CMS, auth, accounts, multiplayer
- [ ] Heavy 3D everywhere — 3D must earn its GPU per module
- [ ] Fabricated metrics, fake users, invented companies

## 6. Open questions for the owner
- [ ] Which 2–3 uniqueness axes get the deepest treatment?
- [ ] Any real restrictions (no 3D, no audio, must work offline)?
- [ ] Deployment target (Vercel / static / own server)?
- [ ] How much content will you actually supply (1 project or 10)?

---
*Plan lives in `.ai/DESIGN_PLAN.md`. Facts land here from the owner next; nothing is invented.*