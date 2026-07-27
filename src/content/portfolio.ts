export type Locale = "pt-BR" | "en";

export type ProjectSlug = "psi-giovanna" | "ac-labs" | "ac-dogs";

export interface Project {
  slug: ProjectSlug;
  title: string;
  descriptor: string;
  summary: string;
  context: string;
  challenge: string;
  role: string;
  responsibilities: string[];
  decisions: string[];
  outcome: string;
  technologies: string[];
  image: string;
  demo?: string;
  article?: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  current?: boolean;
}

export const profile = {
  name: "André Leite Carvalho",
  email: "carvalho.devel@gmail.com",
  phoneDisplay: "+55 11 94924-5875",
  whatsapp:
    "https://wa.me/5511949245875?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20seu%20trabalho.",
  linkedin: "https://www.linkedin.com/in/carvalhoandree",
  github: "https://github.com/carvalhoandre",
  lab: "https://lab.andreleitecarvalho.space/",
  website: "https://andreleitecarvalho.space",
  resume: {
    "pt-BR": "/documents/andre-leite-carvalho-curriculo.pdf",
    en: "/documents/andre-leite-carvalho-resume.pdf",
  },
} as const;

const projectImages: Record<ProjectSlug, string> = {
  "psi-giovanna": "/images/projects/psi-giovanna.svg",
  "ac-labs": "/images/projects/ac-labs.svg",
  "ac-dogs": "/images/projects/ac-dogs.svg",
};

const sharedExperience: TimelineItem[] = [
  {
    period: "Jun 2026 — atual",
    title: "Backend & Cloud",
    organization: "GFT",
    current: true,
  },
  {
    period: "Jun 2025 — Jun 2026",
    title: "Desenvolvedor Frontend",
    organization: "GFT",
  },
  {
    period: "Nov 2024 — Jun 2025",
    title: "Desenvolvedor Frontend",
    organization: "Montreal",
  },
  {
    period: "Mar 2022 — Nov 2024",
    title: "Desenvolvedor Frontend",
    organization: "Hyperlocal",
  },
  {
    period: "Ago 2021 — Mar 2022",
    title: "Desenvolvedor Frontend",
    organization: "Proative Technology",
  },
  {
    period: "Jan 2021 — Ago 2021",
    title: "Estágio em DevOps",
    organization: "Proative Technology",
  },
];

const sharedEducation: TimelineItem[] = [
  {
    period: "2026 — 2027",
    title:
      "Pós-graduação em Arquitetura de Software, Ciência de Dados e Cibersegurança",
    organization: "Pontifícia Universidade Católica do Paraná — PUCPR",
    current: true,
  },
  {
    period: "2019 — 2022",
    title: "Bacharelado em Ciência da Computação",
    organization: "Universidade Nove de Julho — UNINOVE",
  },
];

const projectsPt: Project[] = [
  {
    slug: "psi-giovanna",
    title: "Psi Giovanna",
    descriptor: "Landing page responsiva para psicologia",
    summary:
      "Experiência web para uma clínica particular, com conteúdo direto, navegação responsiva e foco em desempenho.",
    context:
      "Uma presença digital pública para apresentar o atendimento de uma profissional de psicologia em diferentes tamanhos de tela.",
    challenge:
      "Organizar informações sensíveis de forma clara e acolhedora, sem comprometer legibilidade, velocidade ou acesso mobile.",
    role: "Desenvolvimento frontend e implementação responsiva.",
    responsibilities: [
      "Estruturação da interface e da hierarquia de conteúdo.",
      "Implementação do comportamento responsivo.",
      "Ajustes de experiência e desempenho da página.",
    ],
    decisions: [
      "Fluxo editorial de página única para reduzir fricção.",
      "Layout adaptável com ações objetivas e conteúdo escaneável.",
    ],
    outcome:
      "Uma landing page pública e responsiva, orientada à apresentação clara da prática profissional.",
    technologies: ["Frontend responsivo", "Web performance", "UI"],
    image: projectImages["psi-giovanna"],
    demo: "https://giovannadias.netlify.app/",
  },
  {
    slug: "ac-labs",
    title: "André’s Lab",
    descriptor: "Base viva de conhecimento em engenharia",
    summary:
      "Documentação contínua sobre engenharia de software, arquitetura e aprendizados da pós-graduação.",
    context:
      "Um espaço público para transformar estudos e decisões técnicas em conteúdo consultável e evolutivo.",
    challenge:
      "Manter conhecimento técnico organizado, navegável e útil enquanto os temas continuam em evolução.",
    role: "Autor e mantenedor do conteúdo técnico.",
    responsibilities: [
      "Organização de temas de engenharia e arquitetura.",
      "Registro de aprendizados e referências.",
      "Publicação e evolução contínua da base.",
    ],
    decisions: [
      "Conteúdo estruturado por temas em uma publicação independente.",
      "Evolução incremental em vez de documentação estática.",
    ],
    outcome:
      "Uma base pública em desenvolvimento contínuo para compartilhar repertório e consolidar aprendizados.",
    technologies: ["Documentação", "Software Architecture", "Knowledge base"],
    image: projectImages["ac-labs"],
    article: profile.lab,
  },
  {
    slug: "ac-dogs",
    title: "ac Dogs",
    descriptor: "Rede social desenvolvida com React",
    summary:
      "Aplicação social com autenticação, feed, perfis de usuário e envio de mídia, construída como estudo completo em React.",
    context:
      "Um produto de estudo que reúne os fluxos principais de uma rede social em uma experiência integrada.",
    challenge:
      "Combinar acesso autenticado, publicação de conteúdo, perfis e mídia sem perder a coerência entre os estados da interface.",
    role: "Desenvolvimento frontend da aplicação.",
    responsibilities: [
      "Implementação dos fluxos de autenticação.",
      "Construção de feed, perfis e envio de mídia.",
      "Integração dos diferentes estados da experiência social.",
    ],
    decisions: [
      "React como base para a interface orientada a componentes.",
      "Separação dos fluxos de acesso, conteúdo e perfil.",
    ],
    outcome:
      "Um projeto de estudo funcional que integra autenticação, conteúdo e mídia em uma única aplicação.",
    technologies: ["React", "Autenticação", "Integração de API"],
    image: projectImages["ac-dogs"],
    demo: "https://ac-dogs.netlify.app",
  },
];

const projectsEn: Project[] = projectsPt.map((project) => {
  const translations: Record<
    ProjectSlug,
    Omit<Project, "slug" | "image" | "demo" | "article">
  > = {
    "psi-giovanna": {
      title: "Psi Giovanna",
      descriptor: "Responsive psychology landing page",
      summary:
        "A web experience for a private practice, with direct content, responsive navigation, and a performance focus.",
      context:
        "A public digital presence presenting a psychology professional’s services across different screen sizes.",
      challenge:
        "Organize sensitive information clearly and thoughtfully without compromising readability, speed, or mobile access.",
      role: "Frontend development and responsive implementation.",
      responsibilities: [
        "Interface and content hierarchy structure.",
        "Responsive behavior implementation.",
        "Page experience and performance refinements.",
      ],
      decisions: [
        "A single-page editorial flow to reduce friction.",
        "An adaptable layout with direct actions and scannable content.",
      ],
      outcome:
        "A public, responsive landing page focused on clearly presenting the professional practice.",
      technologies: ["Responsive frontend", "Web performance", "UI"],
    },
    "ac-labs": {
      title: "André’s Lab",
      descriptor: "A living engineering knowledge base",
      summary:
        "Continuous documentation about software engineering, architecture, and postgraduate learning.",
      context:
        "A public space that turns technical study and decisions into useful, evolving content.",
      challenge:
        "Keep technical knowledge organized, navigable, and useful while the subject matter continues to evolve.",
      role: "Technical content author and maintainer.",
      responsibilities: [
        "Organization of engineering and architecture topics.",
        "Documentation of learning and references.",
        "Publishing and continuous evolution of the knowledge base.",
      ],
      decisions: [
        "Topic-based content in an independent publication.",
        "Incremental evolution instead of static documentation.",
      ],
      outcome:
        "A continuously evolving public base for sharing knowledge and consolidating learning.",
      technologies: [
        "Documentation",
        "Software Architecture",
        "Knowledge base",
      ],
    },
    "ac-dogs": {
      title: "ac Dogs",
      descriptor: "A social network built with React",
      summary:
        "A social application with authentication, feed, user profiles, and media upload, built as an end-to-end React study.",
      context:
        "A study product combining the primary flows of a social network in one integrated experience.",
      challenge:
        "Combine authenticated access, content publishing, profiles, and media while keeping interface states coherent.",
      role: "Application frontend development.",
      responsibilities: [
        "Authentication flow implementation.",
        "Feed, profile, and media upload development.",
        "Integration of the different social experience states.",
      ],
      decisions: [
        "React as the component-driven interface foundation.",
        "Separation of access, content, and profile flows.",
      ],
      outcome:
        "A functional study project integrating authentication, content, and media in one application.",
      technologies: ["React", "Authentication", "API integration"],
    },
  };

  return { ...project, ...translations[project.slug] };
});

export const content = {
  "pt-BR": {
    localeName: "Português",
    alternateLocaleName: "English",
    skip: "Pular para o conteúdo",
    navLabel: "Navegação principal",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    themeLight: "Usar tema claro",
    themeDark: "Usar tema escuro",
    nav: {
      home: "Início",
      projects: "Projetos",
      expertise: "Especialidades",
      experience: "Experiência",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Frontend Specialist · Software Architecture",
      title: profile.name,
      subtitle:
        "Desenvolvo experiências digitais escaláveis, Design Systems e arquiteturas frontend integradas a serviços e plataformas modernas.",
      support:
        "Experiência com React, Angular, React Native, TypeScript, Node.js, testes automatizados, CI/CD e cloud.",
      projects: "Ver projetos",
      contact: "Falar comigo",
      resume: "Baixar currículo (PDF)",
      imageAlt:
        "Retrato profissional de André Leite Carvalho, especialista em Frontend",
      availability: "São Paulo, Brasil · Aberto a oportunidades e projetos",
    },
    projectsSection: {
      eyebrow: "Trabalho selecionado",
      title: "Projetos explicados como decisões, não apenas como telas.",
      description:
        "Uma seleção de produtos e estudos que mostram contexto, responsabilidade técnica e aprendizado.",
      caseStudy: "Ler estudo de caso",
      demo: "Ver demonstração",
      article: "Ler artigos",
    },
    expertise: {
      eyebrow: "Especialidades",
      title: "Profundidade em frontend, visão do sistema completo.",
      description:
        "Competências aplicadas para tornar interfaces consistentes, integrações confiáveis e entregas sustentáveis.",
      items: [
        {
          title: "Frontend Architecture",
          description:
            "Arquiteturas orientadas a componentes, Design Systems, microfrontends, desempenho e acessibilidade.",
          technologies: [
            "React",
            "Angular",
            "TypeScript",
            "React Native",
            "Design Systems",
            "Microfrontends",
          ],
        },
        {
          title: "Backend & Integrations",
          description:
            "Serviços Node.js e Python, integração com APIs, autenticação, BFFs e suporte a aplicações frontend.",
          technologies: [
            "Node.js",
            "Python",
            "REST APIs",
            "BFF",
            "Authentication",
          ],
        },
        {
          title: "Cloud & Delivery",
          description:
            "CI/CD, containers, publicação e integração com ambientes AWS e Azure DevOps.",
          technologies: ["AWS", "Docker", "Jenkins", "Azure DevOps", "CI/CD"],
        },
        {
          title: "Software Architecture",
          description:
            "Arquitetura modular, qualidade, escalabilidade, documentação e decisões guiadas por trade-offs.",
          technologies: [
            "Modular Architecture",
            "Monorepos",
            "Component Standards",
            "Scalable Systems",
          ],
        },
      ],
    },
    impact: {
      eyebrow: "Experiência e impacto",
      title: "Engenharia conectada ao produto e à operação.",
      description:
        "Mais de cinco anos entregando soluções em ambientes bancários, fintech e corporativos, com atuação que conecta interface, integração e entrega.",
      items: [
        {
          title: "Produtos digitais",
          text: "Aplicações web e mobile com React, Angular e React Native em contextos de negócio complexos.",
        },
        {
          title: "Consistência em escala",
          text: "Design Systems, padrões de componentes, microfrontends e arquitetura modular.",
        },
        {
          title: "Qualidade e integração",
          text: "Testes automatizados, APIs, autenticação e camadas BFF próximas à experiência frontend.",
        },
        {
          title: "Entrega contínua",
          text: "Pipelines CI/CD, containers e fluxos de publicação em AWS e Azure DevOps.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre André",
      title:
        "Especialização construída entre interface, arquitetura e entrega.",
      paragraphs: [
        "Atuo como especialista em Frontend na construção de experiências escaláveis para ambientes bancários, fintech e produtos corporativos.",
        "Minha base está em arquitetura frontend, integração com serviços e criação de padrões que ajudam times a evoluir produtos com consistência.",
        "Hoje amplio essa atuação em direção à Arquitetura de Software, conectando decisões de interface, backend, cloud, qualidade e operação.",
      ],
      principles: ["Clareza", "Qualidade", "Trade-offs", "Evolução contínua"],
    },
    journey: {
      eyebrow: "Formação e trajetória",
      title: "Uma jornada contínua entre prática e aprofundamento técnico.",
      education: "Educação",
      experience: "Experiência",
      current: "Em andamento",
      educationItems: sharedEducation,
      experienceItems: sharedExperience,
    },
    lab: {
      eyebrow: "André’s Lab",
      title: "Aprender, registrar e compartilhar.",
      description:
        "Notas e conteúdos sobre engenharia de software, arquitetura e os aprendizados da pós-graduação, publicados em uma base viva.",
      action: "Explorar o Lab",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar?",
      description:
        "Estou aberto a oportunidades, projetos e conversas sobre frontend, produtos digitais e Arquitetura de Software.",
      email: "Enviar e-mail",
      linkedin: "Conversar no LinkedIn",
      github: "Ver GitHub",
      whatsapp: "Conversar no WhatsApp",
      resume: "Baixar currículo",
    },
    footer: {
      role: "Frontend Specialist · Software Architecture",
      rights: "Todos os direitos reservados.",
      top: "Voltar ao topo",
    },
    projectPage: {
      back: "Voltar aos projetos",
      overview: "Visão geral",
      context: "Contexto",
      challenge: "Desafio",
      role: "Papel",
      responsibilities: "Responsabilidades",
      decisions: "Decisões técnicas",
      outcome: "Resultado e aprendizado",
      stack: "Tecnologias e práticas",
      demo: "Ver demonstração",
      article: "Explorar o Lab",
      next: "Próximo projeto",
    },
    notFound: {
      eyebrow: "Erro 404",
      title: "Esta página não foi encontrada.",
      description:
        "O endereço pode ter mudado ou não existe. Você pode voltar ao início, explorar os projetos ou falar comigo.",
      home: "Ir para o início",
      projects: "Ver projetos",
      contact: "Falar comigo",
    },
    projects: projectsPt,
  },
  en: {
    localeName: "English",
    alternateLocaleName: "Português",
    skip: "Skip to content",
    navLabel: "Primary navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeLight: "Use light theme",
    themeDark: "Use dark theme",
    nav: {
      home: "Home",
      projects: "Projects",
      expertise: "Expertise",
      experience: "Experience",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Frontend Specialist · Software Architecture",
      title: profile.name,
      subtitle:
        "I build scalable digital experiences, Design Systems, and frontend architectures integrated with modern services and platforms.",
      support:
        "Experience with React, Angular, React Native, TypeScript, Node.js, automated testing, CI/CD, and cloud.",
      projects: "View projects",
      contact: "Talk to me",
      resume: "Download resume (PDF)",
      imageAlt:
        "Professional portrait of André Leite Carvalho, Frontend Specialist",
      availability: "São Paulo, Brazil · Open to opportunities and projects",
    },
    projectsSection: {
      eyebrow: "Selected work",
      title: "Projects explained through decisions, not just screens.",
      description:
        "A selection of products and studies showing context, technical responsibility, and learning.",
      caseStudy: "Read case study",
      demo: "View demo",
      article: "Read articles",
    },
    expertise: {
      eyebrow: "Expertise",
      title: "Frontend depth with a complete system perspective.",
      description:
        "Applied capabilities that make interfaces consistent, integrations reliable, and delivery sustainable.",
      items: [
        {
          title: "Frontend Architecture",
          description:
            "Component-driven architectures, Design Systems, microfrontends, performance, and accessibility.",
          technologies: [
            "React",
            "Angular",
            "TypeScript",
            "React Native",
            "Design Systems",
            "Microfrontends",
          ],
        },
        {
          title: "Backend & Integrations",
          description:
            "Node.js and Python services, API integration, authentication, BFFs, and support for frontend applications.",
          technologies: [
            "Node.js",
            "Python",
            "REST APIs",
            "BFF",
            "Authentication",
          ],
        },
        {
          title: "Cloud & Delivery",
          description:
            "CI/CD, containers, publishing, and integration with AWS and Azure DevOps environments.",
          technologies: ["AWS", "Docker", "Jenkins", "Azure DevOps", "CI/CD"],
        },
        {
          title: "Software Architecture",
          description:
            "Modular architecture, quality, scalability, documentation, and trade-off driven decisions.",
          technologies: [
            "Modular Architecture",
            "Monorepos",
            "Component Standards",
            "Scalable Systems",
          ],
        },
      ],
    },
    impact: {
      eyebrow: "Experience and impact",
      title: "Engineering connected to product and operations.",
      description:
        "More than five years delivering solutions in banking, fintech, and enterprise environments, connecting interface, integration, and delivery.",
      items: [
        {
          title: "Digital products",
          text: "Web and mobile applications with React, Angular, and React Native in complex business contexts.",
        },
        {
          title: "Consistency at scale",
          text: "Design Systems, component standards, microfrontends, and modular architecture.",
        },
        {
          title: "Quality and integration",
          text: "Automated testing, APIs, authentication, and BFF layers close to the frontend experience.",
        },
        {
          title: "Continuous delivery",
          text: "CI/CD pipelines, containers, and publishing flows using AWS and Azure DevOps.",
        },
      ],
    },
    about: {
      eyebrow: "About André",
      title: "Expertise built across interface, architecture, and delivery.",
      paragraphs: [
        "I work as a Frontend Specialist building scalable experiences for banking, fintech, and enterprise environments.",
        "My foundation is frontend architecture, service integration, and patterns that help teams evolve products consistently.",
        "I am now expanding that work toward Software Architecture, connecting interface, backend, cloud, quality, and operational decisions.",
      ],
      principles: ["Clarity", "Quality", "Trade-offs", "Continuous learning"],
    },
    journey: {
      eyebrow: "Education and career",
      title: "A continuous journey between practice and technical depth.",
      education: "Education",
      experience: "Experience",
      current: "In progress",
      educationItems: sharedEducation.map((item, index) => ({
        ...item,
        period: index === 0 ? "2026 — 2027" : item.period,
        title:
          index === 0
            ? "Postgraduate studies in Software Architecture, Data Science, and Cybersecurity"
            : "Bachelor’s Degree in Computer Science",
      })),
      experienceItems: sharedExperience.map((item) => ({
        ...item,
        period: item.period
          .replace("atual", "present")
          .replace("Jun", "Jun")
          .replace("Ago", "Aug")
          .replace("Jan", "Jan")
          .replace("Mar", "Mar")
          .replace("Nov", "Nov"),
        title:
          item.title === "Desenvolvedor Frontend"
            ? "Frontend Developer"
            : item.title === "Estágio em DevOps"
              ? "DevOps Internship"
              : item.title,
      })),
    },
    lab: {
      eyebrow: "André’s Lab",
      title: "Learn, document, and share.",
      description:
        "Notes and articles about software engineering, architecture, and postgraduate learning, published as a living knowledge base.",
      action: "Explore the Lab",
    },
    contact: {
      eyebrow: "Contact",
      title: "Shall we talk?",
      description:
        "I am open to opportunities, projects, and conversations about frontend, digital products, and Software Architecture.",
      email: "Send an email",
      linkedin: "Connect on LinkedIn",
      github: "View GitHub",
      whatsapp: "Talk on WhatsApp",
      resume: "Download resume",
    },
    footer: {
      role: "Frontend Specialist · Software Architecture",
      rights: "All rights reserved.",
      top: "Back to top",
    },
    projectPage: {
      back: "Back to projects",
      overview: "Overview",
      context: "Context",
      challenge: "Challenge",
      role: "Role",
      responsibilities: "Responsibilities",
      decisions: "Technical decisions",
      outcome: "Outcome and learning",
      stack: "Technologies and practices",
      demo: "View demo",
      article: "Explore the Lab",
      next: "Next project",
    },
    notFound: {
      eyebrow: "Error 404",
      title: "This page could not be found.",
      description:
        "The address may have changed or does not exist. You can return home, explore the projects, or talk to me.",
      home: "Go home",
      projects: "View projects",
      contact: "Talk to me",
    },
    projects: projectsEn,
  },
} as const;

export type PortfolioContent = (typeof content)[Locale];

export const localePath = (locale: Locale) =>
  locale === "pt-BR" ? "/pt-BR/" : "/en/";

export const projectPath = (locale: Locale, slug: ProjectSlug) =>
  locale === "pt-BR" ? `/pt-BR/projetos/${slug}/` : `/en/projects/${slug}/`;

export const alternateLocale = (locale: Locale): Locale =>
  locale === "pt-BR" ? "en" : "pt-BR";
