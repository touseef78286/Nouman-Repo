import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/identity";
import { StatusRail } from "@/components/console/StatusRail";
import { Reveal } from "@/components/shared/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const p = projects.find((x) => x.slug === slug);
    if (!p)
      return {
        title: "Project — NOUMAN ARSHAD",
        description: "Growth Console case study.",
      };
    return {
      title: `${p.title} — NOUMAN ARSHAD`,
      description: p.scope,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);
  if (!project) notFound();

  return (
    <>
      <StatusRail />
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <Link
          href="/#projects"
          className="mt-8 inline-block font-mono text-xs text-text-dim transition-colors hover:text-accent"
        >
          &lt;- back to console
        </Link>
        <Reveal>
          <header className="border-b border-line py-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="text-accent-2">{project.kind}</span>
              <span className="text-warn">{project.note}</span>
            </div>
            <h1 className="mt-4 font-mono text-2xl font-semibold tracking-tight text-text sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 font-mono text-sm text-accent">{project.stack}</p>
          </header>
        </Reveal>

        <Reveal delay={80}>
          <section className="py-10">
            <h2 className="font-mono text-sm text-text-mute">BRIEF</h2>
            <p className="mt-2 leading-relaxed text-text-dim">{project.brief}</p>
          </section>
        </Reveal>

        <Reveal delay={120}>
          <section className="py-10">
            <h2 className="font-mono text-sm text-text-mute">SCOPE</h2>
            <p className="mt-2 text-text-dim">{project.scope}</p>
          </section>
        </Reveal>

        <Reveal delay={160}>
          <section className="py-10">
            <h2 className="font-mono text-sm text-text-mute">DELIVERABLES</h2>
            <ul className="mt-4 space-y-2">
              {project.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-text-dim">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={200}>
          <section className="border-t border-line py-10">
            <h2 className="font-mono text-sm text-text-mute">OUTCOME</h2>
            <p className="mt-2 text-text-dim">{project.outcome}</p>
          </section>
        </Reveal>
      </main>
    </>
  );
}