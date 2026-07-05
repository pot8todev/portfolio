import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/lib/profile";
import { Reveal } from "./ui/Reveal";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: EnvelopeSimple,
  },
  {
    label: "GitHub",
    value: profile.githubUser,
    href: profile.github,
    Icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    value: profile.name,
    href: profile.linkedin,
    Icon: LinkedinLogo,
  },
];

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] border border-border bg-surface/40 p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full opacity-50 blur-3xl"
              style={{ background: "var(--accent-soft)" }}
            />
            <div className="relative">
              <h2
                className="max-w-[16ch] font-semibold leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
              >
                Vamos construir algo juntos.
              </h2>
              <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-muted sm:text-lg">
                Estou aberto a oportunidades de estágio e desenvolvimento.
                Respondo rápido, manda mensagem.
              </p>


              <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-3">
                {channels.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-t border-border py-5 pr-2 sm:border-t-0 sm:border-l sm:px-5 sm:first:border-l-0 sm:first:pl-0"
                  >
                    <span>
                      <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-faint">
                        <Icon size={15} className="text-accent" />
                        {label}
                      </span>
                      <span className="mt-1 block text-sm text-muted transition-colors group-hover:text-text">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-faint transition-colors group-hover:text-accent"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
