"use client";

import { useState } from "react";
import { identity } from "@/content/identity";

const links = [
  { href: "#services", label: "services" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function StatusRail() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg-deep/90 backdrop-blur">
      <div className="flex items-center justify-between gap-3 px-4 py-2 font-mono text-[11px] sm:text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
          </span>
          <span className="text-ok">OPERATIONS&nbsp;LIVE</span>
        </div>
        <nav
          aria-label="Portfolio sections"
          className="hidden items-center gap-4 text-text-dim md:flex"
        >
          {links.map((l) => (
            <a href={l.href} className="transition-colors hover:text-accent" key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden truncate text-text-mute lg:block">
          {identity.location.city}, {identity.location.province} · PK
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded border border-line px-3 py-1 text-text-dim transition-colors hover:border-accent hover:text-accent md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-line bg-bg-deep px-4 py-3 font-mono text-sm md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-text-dim transition-colors hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}