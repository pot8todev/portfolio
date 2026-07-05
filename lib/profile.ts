export const profile = {
  name: "Pedro Henrique Jesus",
  role: "Desenvolvedor Web Full Stack",
  age: 25,
  location: "Rio das Ostras, RJ",
  email: "pedrohjesus234@gmail.com",
  github: "https://github.com/pot8todev",
  githubUser: "pot8todev",
  linkedin: "https://www.linkedin.com/in/pedro-h-jesus/",
  // Subtext do hero: <= 20 palavras
  tagline:
    "Desenvolvedor Web com experiência em aplicações web e APIs REST com React, Node.js e TypeScript. Automação, escalabilidade e código de qualidade.",
  about: [
    "Desenvolvedor Web com experiência em estágio na Tesch Solutions, atuando no desenvolvimento de aplicações web e APIs REST com React, Node.js e TypeScript. Experiência com automação de processos, integrações, arquitetura escalável e metodologias ágeis.",
    "",
  ],
  // Stack agrupada por categoria. slug = Simple Icons (cdn.simpleicons.org)
  stack: [
    {
      category: "Linguagens",
      items: [
        { name: "Python", slug: "python" },
        { name: "TypeScript", slug: "typescript" },
        { name: "SQL", slug: "postgresql" },
        { name: "JavaScript", slug: "javascript" },
      ],
    },
    {
      category: "Backend & Infra",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "APIs REST", slug: "fastapi" },
        { name: "Git", slug: "git" },
      ],
    },
    {
      category: "Frontend & Web",
      items: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
      ],
    },
    {
      category: "Ferramentas",
      items: [
        { name: "GitHub", slug: "github" },
        { name: "Linux", slug: "linux" },
        { name: "Docker", slug: "docker" },
      ],
    },
  ],
  education: [
    {
      school: "Universidade Federal Fluminense (UFF)",
      degree: "Bacharelado em Ciência da Computação",
      period: "2024 - 2031",
      note: "Previsão de conclusão em 2031.",
    },
    {
      school: "Universidade do Estado do Rio de Janeiro (UERJ)",
      degree: "Licenciatura em Física",
      period: "2020 - 2021",
      note: "Formação focada na didática da física e no uso de estatística.",
    },
  ],
  certifications: [],
  languages: ["Português (nativo)", "Inglês (avançado)", "Espanhol (básico)", "Francês (básico)"],
} as const;
