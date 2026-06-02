import { ISkillCategoryProps } from "@/pages/Home/components/Skills/components/List/types";

export const SkillsData: Array<ISkillCategoryProps> = [
  {
    icon: "code",
    title: "skills.frontend",
    description: "skills.frontendDesc",
    items: [
      { title: "React" },
      { title: "Angular" },
      { title: "TypeScript" },
      { title: "React Native" },
      { title: "Design Systems" },
      { title: "Microfrontends" },
      { title: "JavaScript" },
    ],
  },
  {
    icon: "server-network",
    title: "skills.backend",
    description: "skills.backendDesc",
    items: [
      { title: "Node.js" },
      { title: "Python" },
      { title: "REST APIs" },
      { title: "BFF Architecture" },
      { title: "Authentication Flows" },
      { title: "API Integrations" },
    ],
  },
  {
    icon: "cog",
    title: "skills.devops",
    description: "skills.devopsDesc",
    items: [
      { title: "AWS" },
      { title: "Docker" },
      { title: "Linux" },
      { title: "Jenkins" },
      { title: "Azure DevOps" },
      { title: "CI/CD" },
    ],
  },
  // {
  //   icon: "web-grid",
  //   title: "skills.architecture",
  //   description: "skills.architectureDesc",
  //   items: [
  //     { title: "Scalable Systems" },
  //     { title: "Modular Architecture" },
  //     { title: "Monorepo Strategies" },
  //     { title: "Component Standards" },
  //     { title: "Frontend Architecture" },
  //   ],
  // },
  {
    icon: "bag",
    title: "skills.openFinance",
    description: "skills.openFinanceDesc",
    items: [
      { title: "Banking Ecosystems" },
      { title: "Secure Integrations" },
      { title: "Consent-Based Flows" },
      { title: "Distributed Systems" },
      { title: "Auth & Security" },
    ],
  },
];

