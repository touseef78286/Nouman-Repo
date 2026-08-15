import { StatusRail } from "@/components/console/StatusRail";
import { BootSequence } from "@/components/console/BootSequence";
import Hero3DGated from "@/components/hero/Hero3DGated";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import {
  identity,
  languages,
  experience,
  education,
  services,
  projects,
} from "@/content/identity";

export default function Home() {
  return (
    <>
      <StatusRail />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Hero />
        <Services />
        <Experience />
        <ProjectsLane />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-mesh relative border-b border-line py-12 sm:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <BootSequence />
          </Reveal>
          <Reveal delay={120}>
            <h1 className="glow-text mt-8 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
              {identity.name}
            </h1>
            <p className="mt-4 font-mono text-sm tracking-wide text-accent sm:text-base">
              {identity.role} â€” remote with Big Marketing USA (3+ yrs)
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl leading-relaxed text-text-dim">
              {identity.objective}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={identity.phoneHref}
                className="rounded-full border border-accent/40 bg-accent/10 px-6 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
              >
                {identity.phone}
              </a>
              <a
                href={identity.emailHref}
                className="glass rounded-full px-6 py-2.5 font-mono text-sm text-text transition-colors hover:border-accent/60 hover:text-accent"
              >
                {identity.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-8 grid gap-3 font-mono text-xs text-text-mute sm:grid-cols-2 sm:text-sm">
              <div className="glass rounded-2xl p-4">
                <dt className="mb-1 text-text-mute">SIGNAL</dt>
                <dd className="text-text-dim">
                  {identity.location.city}, {identity.location.district},{" "}
                  {identity.location.province} Â· {identity.location.country}
                </dd>
                <dd className="mt-1 text-text-dim">LANG Â· {languages.join(" / ")}</dd>
              </div>
              <div className="glass rounded-2xl p-4">
                <dt className="mb-1 text-text-mute">STATUS</dt>
                <dd className="flex items-center gap-2 text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
                  OPERATIONS LIVE
                </dd>
                <dd className="mt-1 text-text-dim">Web Â· SEO Â· Funnels Â· Email</dd>
              </div>
            </dl>
          </Reveal>
        </div>
<div className="order-1 flex flex-col items-center gap-6 lg:order-2">
          <Reveal>
            <div className="w-full max-w-[300px]">
              <Portrait />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Hero3DGated />
          </Reveal>
          <p className="font-mono text-[11px] text-text-mute">
            drag to rotate the network
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative border-b border-line py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(212,164,88,0.08),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeading
          n="01"
          title="Service Channels"
          subtitle="Every capability is live and running â€” web, growth, and design under one operator."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 60}>
              <article className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:bg-accent/20"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between font-mono text-xs">
                  <span className="text-text-mute">{s.id.toUpperCase()}</span>
                  <span className="flex items-center gap-1.5 text-ok">
                    <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
                    {s.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-1 text-sm text-text-dim">{s.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative border-b border-line py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(167,139,250,0.08),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeading
          n="02"
          title="Experience Log"
          subtitle="Proven track record â€” from on-site supervision to remote international digital operations."
        />
        <ol className="relative border-l border-line pl-6">
          {experience.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <li className="mb-8 last:mb-0">
                <span
                  className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(212,164,88,0.5)]"
                  aria-hidden="true"
                />
                <div className="glass rounded-2xl p-5 transition-all duration-300 hover:border-accent/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-text">{e.role}</h3>
                    <span className="font-mono text-xs text-ok">{e.years}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-accent-2">{e.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">{e.detail}</p>
                  <p className="mt-2 font-mono text-xs text-text-mute">{e.period}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <details className="glass mt-8 rounded-2xl p-5">
          <summary className="cursor-pointer font-mono text-xs text-text-dim">
            EDUCATION â€” EXPAND
          </summary>
          <ul className="mt-3 space-y-2">
            {education.map((ed) => (
              <li key={ed.year} className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-sm text-text-dim">{ed.degree}</span>
                <span className="font-mono text-xs text-text-mute">
                  {ed.org} Â· {ed.year}
                </span>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

function ProjectsLane() {
  return (
    <section id="projects" className="relative border-b border-line py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(212,164,88,0.08),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeading
          n="03"
          title="Projects & Deliverables"
          subtitle="Current entries are SAMPLE placeholders â€” replaced with real client work as it is provided."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <Link
                href={`/projects/${p.slug}`}
                className="group glass relative block h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-2/10 blur-2xl transition-opacity duration-300 group-hover:bg-accent-2/20"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between font-mono text-xs">
                  <span className="font-semibold text-accent-2">{p.kind}</span>
                  <span className="rounded-full border border-warn/40 px-2 py-0.5 text-warn">
                    SAMPLE
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{p.scope}</p>
                <p className="mt-3 font-mono text-xs text-text-mute">{p.stack}</p>
                <p className="mt-4 border-t border-line pt-3 font-mono text-[11px] text-accent transition-colors group-hover:text-accent">
                  open case study â†´
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(212,164,88,0.1),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeading
          n="04"
          title="Let's Build Together"
          subtitle="Direct channels â€” no forms standing in the way. Reply within one business day."
        />
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent-2/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-4 sm:grid-cols-2">
            <a
              href={identity.phoneHref}
              className="group rounded-2xl border border-line bg-bg-elev/50 p-6 font-mono text-base transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5"
            >
              <span className="block text-xs tracking-widest text-text-mute">TEL</span>
              <span className="mt-2 block text-text transition-colors group-hover:text-accent">
                {identity.phone}
              </span>
            </a>
            <a
              href={identity.emailHref}
              className="group rounded-2xl border border-line bg-bg-elev/50 p-6 font-mono text-base transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5"
            >
              <span className="block text-xs tracking-widest text-text-mute">EMAIL</span>
              <span className="mt-2 block break-all text-text transition-colors group-hover:text-accent">
                {identity.email}
              </span>
            </a>
          </div>
          <p className="relative mt-8 font-mono text-xs text-text-mute">
            Based in {identity.location.city}, {identity.location.province} Â· serving clients
            worldwide Â· {languages.join(" Â· ")}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  n,
  title,
  subtitle,
}: {
  n: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs tracking-widest text-accent">/{n}</p>
      <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-2xl text-sm text-text-dim">{subtitle}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-3 font-mono text-xs text-text-mute sm:flex-row sm:items-center">
          <p>NOUMAN ARSHAD Â· Web Â· SEO Â· Funnels Â· Email Â· Design</p>
          <p>Â© 2026 â€” all content verified, no fabricated metrics</p>
        </div>
      </div>
    </footer>
  );
}
