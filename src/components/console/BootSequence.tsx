"use client";

import { useEffect, useState } from "react";
import { identity } from "@/content/identity";

const BOOT_LINES = [
  `> init::operator "${identity.name}"`,
  `> role::${identity.role}`,
  "> channels::web seo funnel email social design data",
  "> status::OPERATIONS LIVE",
];

export function BootSequence() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    let id: ReturnType<typeof setTimeout>;
    const step = () => {
      i = reduced ? BOOT_LINES.length : i + 1;
      setVisible(i);
      if (i < BOOT_LINES.length) id = setTimeout(step, 420);
    };
    id = setTimeout(step, reduced ? 0 : 420);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="font-mono text-xs sm:text-sm" aria-live="polite">
      <div className="space-y-1.5 text-text-dim">
        {BOOT_LINES.slice(0, visible).map((line, i) => (
          <RevealedLine key={i} line={line} />
        ))}
        {visible >= BOOT_LINES.length && (
          <p className="pt-2 text-ok">
            agent ready — scroll or use the rail to operate the console
          </p>
        )}
      </div>
    </div>
  );
}

function RevealedLine({ line }: { line: string }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    let id: ReturnType<typeof setTimeout>;
    const step = () => {
      i = reduced ? line.length : i + 1;
      setShown(i);
      if (i < line.length) id = setTimeout(step, reduced ? 0 : 8);
    };
    id = setTimeout(step, reduced ? 0 : 8);
    return () => clearTimeout(id);
  }, [line]);

  return <p>{line.slice(0, shown)}</p>;
}