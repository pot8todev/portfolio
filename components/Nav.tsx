"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-wide"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-border-strong bg-surface text-accent transition-colors group-hover:border-accent">
            PHJ
          </span>
          <span className="hidden text-muted transition-colors group-hover:text-text sm:inline">
            pedro henrique jesus
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-bg-elevated/70 px-2 py-1.5 backdrop-blur-md md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-transform hover:bg-accent-strong active:scale-[0.97] sm:inline-block"
          >
            Contato
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-text md:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 rounded-2xl border border-border bg-bg-elevated/95 p-2 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-muted hover:bg-surface hover:text-text"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-bg"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}
