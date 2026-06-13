"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, GithubLogo } from "@phosphor-icons/react";
import { profile } from "@/lib/profile";

const NeuralField = dynamic(() => import("./hero/NeuralField"), {
  ssr: false,
});

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  // Defer the WebGL field until the browser is idle so it never blocks the
  // hero text paint (LCP). Skipped entirely for reduced-motion users.
  const [show3d, setShow3d] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const w = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setShow3d(true), { timeout: 1500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setShow3d(true), 700);
    return () => clearTimeout(t);
  }, [reduce]);
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-24"
    >
      {/* Neural network signature background */}
      <div className="absolute inset-0 -z-10">
        {/* Lightweight static fallback: paints instantly, holds the space */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 50% at 50% 35%, rgba(45,212,255,0.06), transparent 70%)",
          }}
        />
        {show3d && <NeuralField />}
        {/* radial vignette to anchor the text */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 40%, transparent 30%, #08090c 78%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1200px]">
        <motion.p
          {...fade(0.05)}
          className="font-mono text-sm text-accent"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          {...fade(0.12)}
          className="mt-4 max-w-[16ch] text-balance font-semibold leading-[1.04] tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 6.5vw, 5rem)" }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          {...fade(0.2)}
          className="mt-3 text-xl font-medium text-text sm:text-2xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          {...fade(0.28)}
          className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          {...fade(0.36)}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent-strong active:scale-[0.98]"
          >
            Ver projetos
            <ArrowDown
              size={16}
              weight="bold"
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-elevated/60 px-6 py-3 text-sm font-medium text-text backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent active:scale-[0.98]"
          >
            <GithubLogo size={18} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
