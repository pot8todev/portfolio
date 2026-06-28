export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  stack: string[];
};


// Dados reais do perfil profissional (LinkedIn / Profile.pdf) : TODO 
    
export const experiences: Experience[] = [
  {
    company: "Grupo Vilarejo",
    role: "Desenvolvedor de IA e gestor de projetos",
    period: "nov 2025 - presente",
    current: true,
    summary:
      "Co-estruturei o primeiro setor de Desenvolvimento e IA da empresa, atuando em soluções de IA generativa para hotelaria e serviços, e passei a liderar um pequeno time de desenvolvimento.",
    achievements: [
      "Assistentes com IA generativa (LangChain, LangGraph) que analisam históricos de interação e geram briefings personalizados antes de contatos críticos.",
      "Integração de sistemas legados (PMS Cloud Hotels, Umbler, SEAC) para consolidar perfis de clientes e extrair insights do cruzamento de dados.",
      "Aplicações com Open Finance e APIs da Pluggy, validando transações e transformando dados brutos em insights de negócio.",
      "Condução de projetos da prototipagem à produção, apresentando resultados para Vendas, Marketing, UX e Administração.",
    ],
    stack: ["Python", "Go", "LangChain", "LangGraph", "Pluggy API", "IA Generativa"],
  },
  {
    company: "Outlier",
    role: "AI Trainer e Desenvolvedor Python",
    period: "fev 2025 - nov 2025",
    summary:
      "Trabalho remoto no treinamento e calibração de modelos de linguagem e no desenvolvimento de soluções em Python para sistemas de IA.",
    achievements: [
      "Treinamento e fine-tuning de modelos de linguagem, com foco em calibração de respostas.",
      "Aprimoramento do comportamento de modelos frente a entradas com variação linguística regional.",
    ],
    stack: ["Python", "Machine Learning", "Fine-tuning", "LLMs"],
  },
  {
    company: "Outlier",
    role: "Tradutor freelancer",
    period: "ago 2024 - fev 2025",
    summary:
      "Tradução e transcrição de prompts com marcas de regionalidade linguística (inglês e português) para melhorar a compreensão de variações regionais pelos modelos.",
    achievements: [
      "Transcrição e tradução de prompts PT/EN com foco em nuance regional.",
    ],
    stack: ["Inglês", "Português", "Anotação de dados"],
  },
];
