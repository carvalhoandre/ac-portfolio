import { ISkillListProps } from "@/pages/Home/components/Skills/components/List/types";

export const ListsSkills: Array<ISkillListProps> = [
  {
    icon: "code",
    title: "emphasis.developer",
    subTitle: "skills.time",
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
    title: "emphasis.backend",
    items: [
      {
        className: "java",
        percentage: 80,
        title: "Java",
      },
      {
        className: "python",
        percentage: 60,
        title: "Python",
      },
    ],
  },
  {
    icon: "swatchbook",
    title: "emphasis.designer",
    items: [
      {
        className: "figma",
        percentage: 90,
        title: "Figma",
      },
      {
        className: "photoshop",
        percentage: 80,
        title: "Photoshop",
      },
      {
        className: "illustrator",
        percentage: 60,
        title: "Illustrator",
      },
    ],
  },
];
