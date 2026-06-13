export type Project = {
  name: string;
  title: string;
  blurb: string;
  description: string;
  highlights: string[];
  tags: string[];
  repo: string | null;
  live: string | null;
  featured?: boolean;
  domain: "fintech" | "produto" | "ia" | "devtool" | "automacao";
};

// Dados reais extraídos dos repositórios de github.com/LeonardoBrandaoM
export const projects: Project[] = [
  {
    name: "OpenSight",
    title: "Gestão financeira via Open Finance",
    blurb:
      "Plataforma de gestão financeira pessoal que consolida dados bancários via Open Finance e entrega projeções preditivas.",
    description:
      "Monorepo full-stack (TypeScript + Go) com arquitetura de microsserviços. Consolida saldos e transações em tempo real via Open Finance, categoriza automaticamente e projeta cenários financeiros. Especificação de requisitos (SRS) formal e compliance com LGPD e Banco Central.",
    highlights: [
      "Microsserviços de domínio com camada Postgres (read-models e precompute)",
      "Serviço de analytics com gráficos estatísticos avançados",
      "Integração Open Finance somente leitura, foco em inteligência financeira",
    ],
    tags: ["TypeScript", "Go", "PostgreSQL", "Open Finance", "Microsserviços"],
    repo: "https://github.com/LeonardoBrandaoM/OpenSight-Gestao-Financeira-Personal",
    live: null,
    featured: true,
    domain: "fintech",
  },
  {
    name: "ReportManager",
    title: "Relatórios técnicos navais multi-tenant",
    blurb:
      "Sistema web multi-tenant que gera relatórios técnicos de manutenção naval em PowerPoint e PDF.",
    description:
      "Aplicação web multi-tenant em Flask: geração automatizada de relatórios em .pptx e .pdf, painel administrativo com histórico paginado, busca server-side, exportação CSV, analytics com gráficos e um painel Super Admin global. Inclui PWA offline com rascunhos e fila de envio.",
    highlights: [
      "Geração de PPTX e PDF (PDF lazy via LibreOffice)",
      "PWA offline com rascunhos e fila de envio",
      "Multi-tenant com painel Super Admin e analytics",
    ],
    tags: ["Python", "Flask", "PWA", "SQLite", "Multi-tenant"],
    repo: null,
    live: null,
    domain: "produto",
  },
  {
    name: "FelingOmeter",
    title: "Reconhecimento de emoções por visão computacional",
    blurb:
      "Sistema de visão computacional que classifica emoções humanas a partir de expressões faciais.",
    description:
      "Projeto de deep learning que detecta, alinha e normaliza faces e usa redes neurais convolucionais (CNN) para classificar emoções (alegria, tristeza, raiva, surpresa, medo, neutralidade) em tempo real ou a partir de imagens e vídeos.",
    highlights: [
      "Detecção, alinhamento e normalização de faces com OpenCV",
      "Classificação por CNN treinada (PyTorch)",
      "Análise em tempo real ou por imagem/vídeo",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "CNN", "Visão Computacional"],
    repo: "https://github.com/LeonardoBrandaoM/felingOmete",
    live: null,
    domain: "ia",
  },
  {
    name: "PluggyAPI DevKit",
    title: "SDK em Go para Open Finance",
    blurb:
      "SDK em Go que simplifica o uso da API Pluggy (Open Finance) para outros desenvolvedores.",
    description:
      "Kit de desenvolvimento em Go que abstrai autenticação por API key e access token e expõe módulos para Transactions, Items, Accounts e utilitários, facilitando a integração com Open Finance via Pluggy.",
    highlights: [
      "Cliente com autenticação por API key e access token",
      "Módulos de Transactions, Items e Accounts",
      "Utilitários (PrettyPrint, SaveExample) e documentação",
    ],
    tags: ["Go", "Open Finance", "Pluggy API", "SDK"],
    repo: null,
    live: null,
    domain: "devtool",
  },
  {
    name: "Assistente de atendimento",
    title: "Automação com IA generativa (desafio de estágio)",
    blurb:
      "Automação de organização interna: resumo de e-mails e gestão de agenda por chat com atendente virtual.",
    description:
      "Desafio técnico de estágio em IA: assistente que resume e-mails e gerencia agenda por chat, com atendente virtual. Base do trabalho posteriormente expandido no Grupo Vilarejo com LangChain e LangGraph.",
    highlights: [
      "Resumo automático de e-mails",
      "Gestão de agenda por chat com atendente virtual",
      "IA generativa aplicada a fluxos internos",
    ],
    tags: ["Python", "IA Generativa", "Automação", "Chat"],
    repo: null,
    live: null,
    domain: "automacao",
  },
];
