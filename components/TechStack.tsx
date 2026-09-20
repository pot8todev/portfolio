import { profile } from "@/lib/profile";
import { Reveal } from "./ui/Reveal";
import { TechIcon } from "./tech/TechIcon";

export function TechStack() {
  return (
    <section
      id="stack"
      className="scroll-mt-20 border-y border-border bg-bg-elevated/30 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            className="max-w-[20ch] font-semibold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Ferramentas que uso para resolver problemas.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {profile.stack.map((group, gi) => (
            <Reveal key={group.category} delay={0.05 * gi}>
              <div className="border-l border-border-strong pl-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <TechIcon
                      key={item.name}
                      name={item.name}
                      slug={item.slug}
                      noIcon={"noIcon" in item ? Boolean(item.noIcon) : false}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
