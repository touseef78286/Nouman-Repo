"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Hero3D = dynamic(() => import("@/components/hero/Hero3D"), {
  ssr: false,
  loading: () => <FallbackView />,
});

function webglOk() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function deviceCapable() {
  if (typeof navigator === "undefined") return false;
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
  if (typeof memory === "number" && memory > 0 && memory < 2) return false;
  return true;
}

export default function Hero3DGated() {
  const [mode, setMode] = useState<"fallback" | "3d">("fallback");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let id: ReturnType<typeof setTimeout>;
    if (!reduced && webglOk() && deviceCapable()) {
      id = setTimeout(() => setMode("3d"), 60);
    }
    return () => clearTimeout(id);
  }, []);

  if (mode === "3d") return <Hero3D />;
  return <FallbackView />;
}

function buildNodes() {
  const nodes: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < 26; i += 1) {
    const angle = (i / 26) * Math.PI * 2;
    const r = 80 + (i % 5) * 35;
    nodes.push({ x: 200 + Math.cos(angle) * r, y: 200 + Math.sin(angle) * r });
  }
  return nodes;
}

function buildLinks(nodes: Array<{ x: number; y: number }>) {
  const links: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (d < 150) links.push({ x1: nodes[i].x, y1: nodes[i].y, x2: nodes[j].x, y2: nodes[j].y });
    }
  }
  return links;
}

const NODES = buildNodes();
const LINKS = buildLinks(NODES);

function FallbackView() {
  return (
    <div
      className="relative flex h-[320px] w-full items-center justify-center sm:h-[460px]"
      role="img"
      aria-label="Network constellation illustration"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full opacity-80" aria-hidden="true">
        {LINKS.map((l, i) => (
          <line
            key={`l${i}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#d4a458"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        ))}
        {NODES.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r={i % 3 === 0 ? 5 : 3}
            fill={i % 2 === 0 ? "#d4a458" : "#b8863f"}
            fillOpacity="0.8"
          />
        ))}
      </svg>
    </div>
  );
}