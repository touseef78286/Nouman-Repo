# Nouman-Repo

Portfolio of **NOUMAN ARSHAD** — Digital Creator & Marketing Specialist.
Remote with Big Marketing USA (3+ yrs). Web Development, SEO, GoHighLevel
funnels, Email Marketing, Social Media, Graphic Design, Data Entry & VA.

## Stack

- Next.js 16 (App Router, React 19, TypeScript)
- Tailwind CSS v4
- Three.js + @react-three/fiber + drei (interactive 3D hero)
- Content via typed TS modules (`src/content/`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Lint

```bash
npm run lint
npm run build
```

## Structure

```
src/
  app/            # routes (/, /projects/[slug])
  components/     # console shell, hero 3D, shared wrappers
  content/        # typed content modules (identity, services, projects)
  .ai/            # loop-engineering memory (docs) — see .ai/README.md
```

## Deploy

Pushed to GitHub → auto-deployed on Vercel (Next.js).