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

// Dados reais extraídos dos repositórios de github.com/pot8todev
export const projects: Project[] = [
  {
  name: "SGA",
  title: "Sistema de Gestão Empresarial",
  blurb:
    "Sistema de gestão para organização de times com Kanban drag-and-drop, calendário integrado e dashboard de indicadores.",
  description:
    "Sistema de Gestão para organização de times com Kanban drag-and-drop, calendário integrado, histórico de clientes e abordagens de marketing com logs de reabertura e dashboard de indicadores por time e indivíduo.",
  highlights: [
    "Sistema de gestão de equipes com Kanban drag-and-drop, calendário integrado e acompanhamento de tarefas",
    "Implementação de CRM para gestão de leads, histórico de clientes e estratégias de marketing orientadas por dados",
    "Desenvolvimento de dashboards de indicadores por equipe e colaborador",
  ],
  tags: ["React", "TypeScript", "Node.js", "CRM", "Kanban"],
  repo: null,
  live: null,
  featured: true,
  domain: "automacao",
},
{
  name: "SOS Solutions",
  title: "Orquestração e Monitoramento de Bots",
  blurb:
    "Plataforma para orquestração e monitoramento de bots de automação web com dashboard em tempo real e controle operacional.",
  description:
    "Plataforma para orquestração e monitoramento de bots de automação web com dashboard em tempo real para controle de execução, autenticação MFA e gestão de sessões persistentes.",
  highlights: [
    "Plataforma para monitoramento e orquestração de bots de automação web",
    "Dashboard em tempo real com autenticação MFA, gerenciamento de sessões e controle operacional",
    "Integração com sistemas legados para extração e processamento automatizado de dados",
  ],
  tags: ["React", "TypeScript", "Node.js", "Automação", "MFA"],
  repo: null,
  live: null,
  featured: true,
  domain: "automacao",
},
{
  name: "Web Scraping",
  title: "Comparador de Preços para Cartas Colecionáveis",
  blurb:
    "Ferramenta automatizada para coleta, processamento e análise de dados da web para comparar preços em centenas de lojas.",
  description:
    "Ferramenta automatizada para coleta, processamento e análise de dados da web, desenvolvida para comparar preços de cartas colecionáveis em centenas de lojas e identificar as melhores oportunidades de compra.",
  highlights: [
    "Automação da coleta e tratamento de dados de múltiplas fontes",
    "Extração de informações utilizando Selenium e OCR",
    "Organização e processamento de dados para apoio à tomada de decisão",
  ],
  tags: ["Python", "Selenium", "OCR", "Web Scraping", "Automação"],
  repo: null,
  live: null,
  featured: false,
  domain: "automacao",
},
];
