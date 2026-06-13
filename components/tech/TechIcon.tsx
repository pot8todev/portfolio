"use client";

import { useState } from "react";

type Props = { name: string; slug: string; noIcon?: boolean };

export function TechIcon({ name, slug, noIcon }: Props) {
  const [broken, setBroken] = useState(false);
  const showImg = !noIcon && !!slug && !broken;

  return (
    <span className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elevated/50 px-3.5 py-2 transition-colors hover:border-border-strong hover:bg-surface">
      {showImg && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}/c2c6d0`}
          alt=""
          aria-hidden
          width={18}
          height={18}
          loading="lazy"
          onError={() => setBroken(true)}
          className="size-[18px] opacity-90 transition-all duration-300 group-hover:scale-110"
        />
      )}
      {!showImg && (
        <span
          aria-hidden
          className="grid size-[18px] place-items-center rounded-[5px] bg-accent-soft font-mono text-[0.62rem] font-bold text-accent"
        >
          {name.charAt(0)}
        </span>
      )}
      <span className="text-sm text-muted transition-colors group-hover:text-text">
        {name}
      </span>
    </span>
  );
}
