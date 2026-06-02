import { useTranslation } from "react-i18next";

import IComponent from "@/@types";
import { ISkillCategoryProps } from "./types";

import { Icon } from "@components/Icon";
import SkillTag from "../Item";

const SkillCategory: IComponent<ISkillCategoryProps> = ({
  testId = "skill-category",
  title,
  description,
  icon,
  items,
}) => {
  const { t } = useTranslation();

  return (
    <li className="skills__card" data-testid={testId}>
      <div className="skills__card-header">
        <Icon icon={icon} className="skills__card-icon" />
        <div className="skills__card-heading">
          <h3 className="skills__card-title">{t(title)}</h3>
          <p className="skills__card-description">{t(description)}</p>
        </div>
      </div>

      <ul className="skills__tags" aria-label={t(title)}>
        {items.map(({ title: tagTitle }, index) => (
          <SkillTag key={index} title={tagTitle} />
        ))}
      </ul>
    </li>
  );
};

export default SkillCategory;

