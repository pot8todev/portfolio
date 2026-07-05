export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  stack: string[];
};


// Dados reais do perfil profissional (LinkedIn / CV)
    
export const experiences: Experience[] = [
  {
    company: "Tesch Solutions",
    role: "Estagiário de Desenvolvimento Web",
    period: "jan 2026 - mai 2026",
    summary:
      "Desenvolvimento e manutenção de aplicações web e APIs REST com React, Node.js e TypeScript. Implementação de melhorias voltadas à automação, escalabilidade e qualidade de código.",
    achievements: [
      "Desenvolvimento e manutenção de aplicações web e APIs REST com React, Node.js e TypeScript",
      "Implementação de melhorias voltadas à automação, escalabilidade e qualidade de código",
      "Participação em cerimônias ágeis e gestão de demandas utilizando Scrum e Kanban",
    ],
    stack: ["React", "Node.js", "TypeScript", "Scrum", "Kanban"],
  },
];
