# Project Memory — quantum-signal-spatial-core

## Status: ACTIVE — greenfield, awaiting owner goal

This directory is the **source of truth** for this project (per loop fol kit).
Follow `PROMPT.md` (Loop Engineer operating contract).

## Navigation

| File          | Purpose                                            |
| ------------- | -------------------------------------------------- |
| README.md     | This index                                         |
| PROMPT.md     | Loop Engineer agent prompt (operating contract)    |
| PRD.md        | Product Requirements (fill from owner facts)       |
| TRD.md        | Technical Requirements (fill after PRD)            |
| ARCHITECTURE.md | Stack + module layout                             |
| DECISIONS.md  | ADR-style decision log                             |
| PROJECT_STATE.md | Live status, milestones, blockers, follow-ups   |
| TASKS.md      | Task ledger + acceptance criteria                  |
| CHANGELOG.md  | Chronological change log                           |
| QA.md         | Quality checklist per loop pass                    |
| HANDOFF.md    | End-of-session handoff — loop continues from file  |

## Core Rules
1. Filesystem is the source of truth.
2. Never fabricate facts, metrics, users, or results.
3. Smallest correct change first; measure before expanding.
4. Keep loops observable: state → change → evidence → next decision.
5. No secrets in code or docs.