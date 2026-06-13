import { projects } from "@/lib/projects";
import { Reveal } from "./ui/Reveal";
import { ProjectCard } from "./projects/ProjectCard";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="eyebrow">Projetos</p>
          <h2
            className="mt-4 max-w-[20ch] font-semibold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Coisas que projetei, construí e levei à produção.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {featured && (
            <Reveal>
              <ProjectCard project={featured} featured />
            </Reveal>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={0.05 * i} className="h-full">
                <div className="h-full">
                  <ProjectCard project={p} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
