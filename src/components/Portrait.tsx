import Image from "next/image";
import { identity } from "@/content/identity";

export function Portrait() {
  if (identity.photo) {
    return (
      <div className="glass relative overflow-hidden rounded-2xl p-2">
        <Image
          src={identity.photo}
          alt={identity.photoAlt}
          width={400}
          height={500}
          priority
          className="aspect-[4/5] w-full rounded-xl object-cover"
        />
      </div>
    );
  }

  return (
    <div className="glass relative flex aspect-[4/5] w-full max-w-[280px] flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center">
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 text-text-mute"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 21c-1.05-2.08-3.36-3.5-7.5-3.5s-6.45 1.42-7.5 3.5"
        />
      </svg>
      <p className="font-mono text-xs tracking-widest text-text-mute">
        PHOTO SLOT
      </p>
      <p className="max-w-[200px] font-mono text-[11px] leading-relaxed text-text-mute/80">
        add /public/images/nouman.jpg and set photo in content/identity.ts
      </p>
    </div>
  );
}