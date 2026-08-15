# Task Ledger — quantum-signal-spatial-core

| ID | Owner | Priority | Status | Acceptance (abbrev) |
| -- | ----- | -------- | ------ | ------------------- |
| T-001 | owner | High | Done | Folders + loop kit seeded; state docs initialized (2026-08-15) |
| T-002 | owner | High | Done | Design plan drafted (DESIGN_PLAN.md) |
| T-003 | owner | High | In Progress | Facts intake: identity/skills/experience captured (FACTS.md); projects list still PLACEHOLDER |
| T-004 | engineer | High | Done | ADR-003 concept lock: "Growth Console" — operations feel, matches owner's details |
| T-005 | engineer | High | Done | Phase 2 architecture + bundle/perf plan (ARCHITECTURE.md) |
| T-006 | engineer | High | Done | Console shell built: StatusRail (mobile nav chip), BootSequence (reduced-motion aware), 7 service channels, experience log, education, contact terminal, project placeholder lane; lint + `next build` green |
| T-007 | engineer | High | Done | Motion polish: Reveal scroll-reveal wrapper (reduced-motion aware) applied to services/experience/projects |
| T-008 | engineer | High | Done | Case-study routes `/projects/[slug]` from typed content (generateStaticParams + MD hand-rolled); 6 SSG pages |
| T-009 | engineer | Medium | Done | QA sweep pass 1 (QA.md): 200s, single h1, no leaks, reduced-motion, perf decls |

Rules:
- One unit of work per row; update status as the loop closes.
- Acceptance is written when the task is added, not after.
- A task is Done only when verified (lint/build/test/evidence).