import { experiences } from "@/lib/experience";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 border-t border-border bg-bg-elevated/30 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="eyebrow">Experiência</p>
          <h2
            className="mt-4 max-w-[20ch] font-semibold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Onde apliquei isso de verdade.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-px">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company + exp.role} delay={0.04 * i}>
              <div className="grid gap-5 border-t border-border py-9 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-semibold text-text">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 text-[0.7rem] font-medium text-accent">
                        <span className="size-1.5 rounded-full bg-accent" />
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">{exp.role}</p>
                  <p className="mt-1 font-mono text-xs text-faint">
                    {exp.period}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <p className="max-w-[62ch] leading-relaxed text-muted">
                    {exp.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-bg-elevated/60 px-2.5 py-1 font-mono text-[0.72rem] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
