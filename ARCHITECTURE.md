# Architecture — [Project Name]

## Overview

One paragraph: the system and the loop it runs.

## Stack decisions

| Concern | Choice | Rationale |
| ------- | ------ | --------- |
| [Framework] | [X] | [why] |
| [State] | [X] | [why] |
| [Styling] | [X] | [why] |
| [Motion/3D] | [X] | [why] |
| [Data] | [X] | [why] |

## Module layout

```
src/
  app/        # routes
  components/ # UI + feature components
  ...
```

## Data flow / rendering

How does input become output? Where are the loop boundaries (observe → decide → act)?

## Performance & bundle strategy

- Lazy-loaded where it matters
- No speculative dependencies
- Measured, not hoped

## No-go / reasons recorded

| Option | Rejected because |
| ------ | ---------------- |
| [X]    | [reason]         |