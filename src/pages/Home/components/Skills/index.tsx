import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { SkillsData } from "./skills";

import { SectionHeader } from "@components/index";
import SkillCategory from "./components/List";
import "./styles.css";

const Skills: IComponent = ({ testId = "skills" }) => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills" data-testid={testId}>
      <SectionHeader
        title={t("skills.title")}
        subTitle={t("skills.subTitle")}
      />

      <ul className="skills__container container grid">
        {SkillsData.map(({ icon, items, title, description }, index) => (
          <SkillCategory
            key={index}
            icon={icon}
            items={items}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export { Skills };

