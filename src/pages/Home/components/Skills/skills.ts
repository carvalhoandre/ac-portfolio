import { ISkillListProps } from "@/pages/Home/components/Skills/components/List/types";

export const ListsSkills: Array<ISkillListProps> = [
  {
    icon: "code",
    title: "skills.frontend",
    items: [
      {
        className: "html",
        percentage: 95,
        title: "HTML / CSS",
      },
      {
        className: "js",
        percentage: 90,
        title: "JavaScript",
      },
      {
        className: "type",
        percentage: 90,
        title: "TypeScript",
      },
      {
        className: "react",
        percentage: 90,
        title: "React Native",
      },
      {
        className: "react",
        percentage: 90,
        title: "React",
      },
      {
        className: "angular",
        percentage: 85,
        title: "Angular",
      },
      {
        className: "jest",
        percentage: 80,
        title: "Jest",
      },
      {
        className: "jest",
        percentage: 80,
        title: "Vitest",
      },
      {
        className: "cypress",
        percentage: 80,
        title: "Cypress",
      },
      {
        className: "ionic",
        percentage: 70,
        title: "Ionic",
      },
    ],
  },
  {
    icon: "server-network",
    title: "skills.backend",
    items: [
      {
        className: "js",
        percentage: 90,
        title: "Node.js",
      },
      {
        className: "python",
        percentage: 80,
        title: "Python",
      },
    ],
  },
  {
    icon: "server-network",
    title: "skills.devops",
    items: [
      {
        className: "docker",
        percentage: 85,
        title: "Docker",
      },
      {
        className: "jenkins",
        percentage: 80,
        title: "Jenkins",
      },
      {
        className: "azure-devops",
        percentage: 80,
        title: "Azure DevOps",
      },
      {
        className: "aws",
        percentage: 75,
        title: "AWS",
      },
    ],
  },
];
