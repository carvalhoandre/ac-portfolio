import IComponent from "@/@types";

import { ListsSkills } from "./skills";

import SectionHeader from "@components/SectionHeader";
import SkillList from "./components/List";
import "./styles.css";

const Skills: IComponent = ({ testId = "skills" }) => {
  return (
    <section className="skills section" id="skills" data-testid={testId}>
      <SectionHeader title="Skills" subTitle="My technical level" />

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

export default Skills;
