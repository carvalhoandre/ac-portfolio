import { useTranslation } from "react-i18next";

import { useState } from "react";

import IComponent from "@/@types";
import { ISkillListProps } from "./types";

import { Icon } from "@components/Icon";
import SkillItem from "../Item";

const SkillList: IComponent<ISkillListProps> = ({
  testId = "skill-list",
  subTitle,
  title,
  icon,
  items,
}) => {
  const { t } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevMode) => !prevMode);
  };

  return (
    <li data-testid={testId}>
      <div
        className={`skills_content ${isOpen ? "skills_open" : "skills_close"}`}
      >
        <div className="skills_header" onClick={toggleOpen}>
          <Icon icon={icon} className="skills_icon" />

          <div>
            <h3 className="skills_title">{t(title)}</h3>
            {!!subTitle && <h4 className="skills_subtitle">{t(subTitle)}</h4>}
          </div>

          <Icon icon="chevron-down" className="uil uil-angle-down skills_arrow" />
        </div>

        {isOpen && (
          <ul className="skills_list grid">
            {items.map(({ className, percentage, title }, index) => (
              <SkillItem
                key={index}
                className={className}
                percentage={percentage}
                title={title}
              />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default SkillList;
