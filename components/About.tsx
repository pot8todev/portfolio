import { GraduationCap, Translate, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/lib/profile";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2
              className="max-w-[18ch] font-semibold leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              Teoria e prática no mesmo lugar.
            </h2>
          </Reveal>
          <div className="mt-7 space-y-5">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={0.05 * (i + 1)}>
                <p className="max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="rounded-[14px] border border-border bg-surface/50 p-6 sm:p-7">
            <div className="flex items-center gap-2 text-faint">
              <GraduationCap size={18} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.14em]">
                Formação
              </span>
            </div>
            <ul className="mt-4 space-y-4">
              {profile.education.map((e) => (
                <li
                  key={e.school}
                  className="border-l border-border-strong pl-4"
                >
                  <p className="font-medium text-text">{e.degree}</p>
                  <p className="text-sm text-muted">{e.school}</p>
                  <p className="mt-0.5 font-mono text-xs text-faint">
                    {e.period}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-faint">
                  <SealCheck size={16} className="text-accent" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em]">
                    Certificações
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {profile.certifications.map((c) => (
                    <li key={c} className="text-sm text-muted">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-faint">
                  <Translate size={16} className="text-accent" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em]">
                    Idiomas
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {profile.languages.map((l) => (
                    <li key={l} className="text-sm text-muted">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
