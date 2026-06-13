export const profile = {
  name: "Leonardo Brandão",
  role: "Desenvolvedor de IA e software",
  age: 20,
  location: "Rio das Ostras, RJ",
  email: "leonardobmf73@gmail.com",
  github: "https://github.com/LeonardoBrandaoM",
  githubUser: "LeonardoBrandaoM",
  linkedin: "https://www.linkedin.com/in/leonardo-brandão73/",
  // Subtext do hero: <= 20 palavras
  tagline:
    "Construo automações, assistentes com IA generativa e sistemas full-stack. Unindo teoria e prática, do protótipo à produção.",
  about: [
    "Tenho 20 anos e desenvolvo software unindo teoria e prática. Atuo com IA generativa, automações e sistemas full-stack, sempre buscando uma implementação concreta e teoricamente fundamentada.",
    "Co-estruturei o primeiro setor de Desenvolvimento e IA do Grupo Vilarejo e treinei modelos de linguagem na Outlier. Na UFF, participei de uma Iniciação Científica em offloading adaptativo com arquiteturas de redes neurais não convencionais (BranchNet).",
  ],
  // Stack agrupada por categoria. slug = Simple Icons (cdn.simpleicons.org)
  stack: [
    {
      category: "Linguagens",
      items: [
        { name: "Python", slug: "python" },
        { name: "Go", slug: "go" },
        { name: "TypeScript", slug: "typescript" },
        { name: "C", slug: "c" },
        { name: "SQL", slug: "postgresql" },
      ],
    },
    {
      category: "IA & Dados",
      items: [
        { name: "PyTorch", slug: "pytorch" },
        { name: "LangChain", slug: "langchain" },
        { name: "LangGraph", slug: "", noIcon: true },
        { name: "Pandas", slug: "pandas" },
        { name: "NumPy", slug: "numpy" },
      ],
    },
    {
      category: "Backend & Infra",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "Docker", slug: "docker" },
        { name: "Open Finance", slug: "", noIcon: true },
      ],
    },
    {
      category: "Frontend & Web",
      items: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Flask", slug: "flask" },
      ],
    },
  ],
  education: [
    {
      school: "Universidade Federal Fluminense (UFF)",
      degree: "Bacharelado em Ciência da Computação",
      period: "2024 - 2029",
      note: "Iniciação Científica em offloading adaptativo com redes neurais não convencionais (BranchNet).",
    },
    {
      school: "Universidade UNG",
      degree: "Tecnólogo em Inteligência Artificial",
      period: "2024 - 2025",
      note: "Formação focada em machine learning, redes neurais e IA aplicada.",
    },
    {
      school: "MBA em Gestão Tecnológica, Big Data e IA",
      degree: "Pós-graduação (em curso)",
      period: "Em andamento",
      note: null,
    },
  ],
  certifications: ["Go: The Complete Developer's Guide (GoLang)"],
  languages: ["Português (nativo)", "Inglês (avançado)"],
} as const;
