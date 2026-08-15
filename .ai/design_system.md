# Design System — NOUMAN ARSHAD Portfolio

Locked 2026-08-15 (revision B: dropped neon, warm premium + editorial type).

## Concept
"Growth Portfolio" — warm, premium, editorial. Brass-on-stone instead of neon.
Matches a marketer/operator with international reach: trustworthy, mature, not gimmicky.

## Fonts (next/font, self-hosted)
| Role | Font | Usage |
| ---- | ---- | ----- |
| Display | **Fraunces** (serif, medium) | Name (h1), section headings (h2) |
| Body | **Manrope** | Body copy, cards, paragraphs |
| Mono | **Geist Mono** | Meta labels, credentials, interim tags |

## Palette (tokens — globals.css)

| Token | Value | Use |
| ----- | ----- | --- |
| --bg | #14120e | page base (warm stone) |
| --bg-elev | #1c1916 | elevated cards |
| --bg-deep | #0c0a08 | footer, status rail |
| --line | rgba(214,206,190,0.16) | hairline borders |
| --text | #f2ede3 | primary text (cream) |
| --text-dim | #b8b0a0 | secondary text |
| --text-mute | #8a8171 | meta / tertiary |
| --accent | #d4a458 | brass gold — primary accent |
| --accent-2 | #b8863f | deep brass — secondary accent |
| --ok | #9db380 | live / success (muted sage) |
| --warn | #d28a4f | sample / warning (amber terracotta) |

## Surface language
- `glass`: translucent `#1c1916` @ 55% + blur + hairline border; used for cards/panels.
- `bg-mesh`: warm radial glows (brass) behind hero + sections.
- `glow-text`: cream → brass gradient on the name (headline).
- Cards: rounded-2xl, hover = -translate-y-1 + border accent + soft corner glow.
- Timeline (experience): brass dots with soft light shadow.

## Type scale
- h1: Fraunces, clamp(text-5xl → text-7xl), gradient.
- h2: Fraunces text-3xl → text-4xl.
- Body: Manrope text-base, text-dim.
- Meta: Geist Mono text-xs, tracking-widest, accent gold.

## Motion
- Entrance: fade + rise 24px via `Reveal` (IntersectionObserver), 0.5s cubic-bezier(0.22,1,0.36,1).
- `prefers-reduced-motion`: all motion off — reveals instant, no boot timers.
- 3D hero: node-sphere in brass/gold; gated (WebGL + deviceMemory + reduced-motion), SVG constellation fallback.

## Anti-patterns
- No neon hexes (#5eead4/#a78bfa gone).
- No glow-text on body copy, only the name.
- No heavy shadows; soft glows at low opacity only.