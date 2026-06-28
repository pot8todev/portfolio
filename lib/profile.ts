export const profile = {
  name: "Pedro Henrique de Jesus",
  role: "Desenvolvedor Web e software",
  age: 25,
  location: "Rio das Ostras, RJ",
  email: "pedrohjesus234@gmail.com",
  github: "https://github.com/pot8todev",
  githubUser: "Jsuis_dev",
  linkedin: "https://www.linkedin.com/in/pedro-h-jesus/",
  // Subtext do hero: <= 20 palavras
  tagline:
    "Desenvolvedor de aplicacoes Web escalaveis, com sistemas full-stack. Unindo teoria e prática, do protótipo à produção.",
  about: [
    "Tenho 25 anos e desenvolvo software unindo teoria e prática. Atuo com desenvolvimento de ferramentas web intuitivas e que facilitem o dia a dia.",
    "",
  ],
  // Stack agrupada por categoria. slug = Simple Icons (cdn.simpleicons.org)
  stack: [
    {
      category: "Linguagens",
      items: [
        { name: "Python", slug: "python" },
        { name: "TypeScript", slug: "typescript" },
        { name: "C", slug: "c" },
        { name: "SQL", slug: "postgresql" },
        { name: "Lua", slug: "lua" },
        { name: "JavaScript", slug: "javascript" },
      ],
    },
    {
      category: "Backend & Infra",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Docker", slug: "docker" },
        { name: "express", slug: "express" },
      ],
    },
    {
      category: "Frontend & Web",
      items: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
      ],
    },
  ],
  education: [
    {
      school: "Universidade Federal Fluminense (UFF)",
      degree: "Bacharelado em Ciência da Computação",
      period: "2024 - 20230",
      note: "Iniciação Científica em offloading adaptativo com redes neurais não convencionais (BranchNet).",
    },
    {
      school: "Universidade Federal do Rio de Janeiro (UERJ)",
      degree: "Licenciatura em Fisica",
      period: "2020 - 2022",
      note: "Formação focada na didatica da fisica, o uso de estatistica e como podemos usa-la para entendermos o espaco que vivemos",
    },
  ],
  certifications: [],
  languages: ["Português (nativo)", "Inglês (avançado), ","Frances (basico) "],
} as const;
