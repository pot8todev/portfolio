"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  GithubLogo,
  Brain,
  ChartLineUp,
  Stack,
  PuzzlePiece,
  Robot,
  type Icon,
} from "@phosphor-icons/react";
import type { Project } from "@/lib/projects";

const domainIcon: Record<Project["domain"], Icon> = {
  fintech: ChartLineUp,
  produto: Stack,
  ia: Brain,
  devtool: PuzzlePiece,
  automacao: Robot,
};

const domainLabel: Record<Project["domain"], string> = {
  fintech: "Fintech",
  produto: "Produto",
  ia: "IA / ML",
  devtool: "Dev tool",
  automacao: "Automação",
};

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const DomainIcon = domainIcon[project.domain];

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-border bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface/60 sm:p-8 ${
        featured ? "lg:flex-row lg:gap-10 lg:p-10" : ""
      }`}
    >
      {/* spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx) var(--my), var(--accent-soft), transparent 65%)",
        }}
      />

      <div className={`relative ${featured ? "lg:w-3/5" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg border border-border-strong bg-bg-elevated text-accent">
            <DomainIcon size={20} />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
            {domainLabel[project.domain]}
          </span>
        </div>

        <h3
          className="mt-5 font-semibold tracking-tight"
          style={{ fontSize: featured ? "clamp(1.6rem, 3vw, 2.2rem)" : "1.4rem" }}
        >
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{project.title}</p>

        <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-relaxed text-muted">
          {featured ? project.description : project.blurb}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-bg-elevated/60 px-2.5 py-1 font-mono text-[0.72rem] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <GithubLogo size={17} />
              Código
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-faint">
              <GithubLogo size={17} />
              Repositório privado
            </span>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
            >
              Ver online
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      <div className={`relative mt-8 border-t border-border pt-7 ${featured ? "lg:mt-0 lg:w-2/5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" : ""}`}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
          Destaques
        </p>
        <ul className={`mt-4 space-y-3 ${featured ? "" : "sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0"}`}>
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
