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
  name: "SGA",
  title: "Sistema de Gestão Empresarial",
  blurb:
    "Plataforma de gestão de equipes e clientes com Kanban, CRM integrado e dashboards de desempenho.",
  description:
    "Sistema web desenvolvido para otimizar a organização de equipes, acompanhamento de tarefas e gestão comercial. Integra Kanban com drag-and-drop, calendário de atividades, CRM para gerenciamento de leads e clientes, além de dashboards analíticos para monitoramento de produtividade e resultados.",
  highlights: [
    "Kanban interativo com drag-and-drop e acompanhamento de tarefas",
    "CRM com histórico de clientes, leads e estratégias de marketing",
    "Dashboards de indicadores por equipe e colaborador",
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
    "Plataforma para gerenciamento de bots de automação web com monitoramento em tempo real e controle operacional centralizado.",
  description:
    "Sistema corporativo desenvolvido para orquestrar, monitorar e gerenciar bots de automação web em larga escala. Possui dashboard em tempo real, autenticação MFA, gerenciamento de sessões persistentes e integração com sistemas legados para extração e processamento automatizado de dados.",
  highlights: [
    "Monitoramento e orquestração centralizada de bots de automação",
    "Dashboard em tempo real com autenticação MFA e gestão de sessões",
    "Integração com sistemas legados para coleta e processamento de dados",
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
    "Ferramenta de coleta e análise de dados que compara preços em centenas de lojas e identifica oportunidades de compra.",
  description:
    "Projeto pessoal focado em automação de coleta e processamento de dados da web. A aplicação extrai informações de múltiplas fontes utilizando web scraping, Selenium e OCR, consolidando dados de preços de cartas colecionáveis para auxiliar na tomada de decisão e identificação de oportunidades de mercado.",
  highlights: [
    "Coleta automatizada de dados em centenas de lojas online",
    "Extração de informações utilizando Selenium e OCR",
    "Processamento e consolidação de dados para análise comparativa de preços",
  ],
  tags: ["Python", "Selenium", "OCR", "Web Scraping", "Automação"],
  repo: null,
  live: null,
  featured: false,
  domain: "automacao",
},
];
