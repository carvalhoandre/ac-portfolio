import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { ListsSkills } from "./skills";

import { SectionHeader } from "@components/index";
import SkillList from "./components/List";
import "./styles.css";

const Skills: IComponent = ({ testId = "skills" }) => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills" data-testid={testId}>
      <SectionHeader
        title={t("skills.title")}
        subTitle={t("skills.subTitle")}
      />

      <ul className="skills_container container grid">
        {ListsSkills.map(({ icon, items, title, subTitle }, index) => (
          <SkillList
            key={index}
            icon={icon}
            items={items}
            title={title}
            subTitle={subTitle}
          />
        ))}
      </ul>
    </section>
  );
};

export { Skills };
