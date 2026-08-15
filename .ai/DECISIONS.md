# Decision Log — quantum-signal-spatial-core

## ADR-004 — 3D interactive hero approved (owner override)
**Status:** Accepted

Context: owner rated the console-first redesign 2/10 and chose "3D interactive hero"
as the required visual direction. This overrides the earlier "no heavy 3D" stance in
ARCHITECTURE.md.

Decision: add a WebGL hero (three + @react-three/fiber + drei) — an interactive
generative node-sphere. Loaded as a client island (`dynamic(..., { ssr:false })`),
with capability gating (reduced-motion => static fallback; detect WebGL support).
Rest of the site stays fast; performance budgets still apply.

Consequences: heavier first-load hero, compensated by dynamic import + gating.
ARCHITECTURE.md no-go list updated to reflect owner-approved exception.

## ADR-003 — Concept lock: "Growth Console"
**Status:** Accepted

Context: owner supplied real resume facts (NOUMAN ARSHAD: Web Dev, SEO, GoHighLevel
funnels, Email, Social, Graphic Design, Data Entry/VA; 3+ yrs remote @ Big Marketing
USA; clients USA/UK; languages Urdu/English/Punjabi; textile→marketing→digital path).
Owner requirement: portfolio architecture must **match the feel of those details** —
a marketing/digital-operations identity, not a generic dev theme.

Decision: portfolio presents as a **Growth Console / client-operations surface**.
Seven service channels (each real skill = a module with a status signal) around an
operator identity; experience shown as a timeline proving the trajectory to digital
operations; contact is direct tel/email/WhatsApp; no 3D spectacle, no fake metrics.

Consequences: architecture (ARCHITECTURE.md) reflects "ollerator console" feel —
status rail, boot sequence, service channels, deliverables lane. 3D/minimal;
accessibility + low-end device perf (PK context) first-class. Awaits owner's real
project list to feed the deliverables lane.

## ADR-002 — Re-activation as portfolio build
**Status:** Accepted (supersedes ADR-001 scope closure)

Context: owner decided this folder becomes a new, extensive, logic-driven portfolio
("never seen before"). Build order: plan first, then owner supplies details.

Decision: resume ACTIVE. No stack, metaphor, or scope locked until owner picks 2–3
uniqueness axes and supplies Phase 0 facts (identity, projects, skills, links).

Consequences: design plan drafted in `.ai/DESIGN_PLAN.md`; Phase 0–1 gates respect
the no-fabrication rule until real facts arrive.

## ADR-001 — Scope: doc-kit scaffold only
**Status:** Superseded by ADR-002

Context: owner requested a new folder following the `loop fol` kit; project goal undefined.

Decision: seed the kit (root + `.ai/`) and stop. No application, no stack choice, no dependencies.

Consequences: zero technical debt. Re-activated in ADR-002.