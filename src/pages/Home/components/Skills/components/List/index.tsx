import IComponent from "@/@types";
import { ISkillListProps } from "./types";
import Icon from "@/components/Icon";
import SkillItem from "@/pages/Home/components/Skills/components/Item";
import { useState } from "react";

const SkillList: IComponent<ISkillListProps> = ({
  testId = "skill-list",
  subTitle,
  title,
  icon,
  items,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevMode) => !prevMode);
  };

  return (
    <li data-testid={testId}>
      <div
        className={`skills_content ${isOpen ? "skills_open" : "skills_close"}`}
      >
        <div className="skills_header">
          <Icon icon={icon} className="skills_icon" />

          <div>
            <h3 className="skills_title">{title}</h3>
            {!!subTitle && <h4 className="skills_subtitle">{subTitle}</h4>}
          </div>

          <i className="uil uil-angle-down skills_arrow" onClick={toggleOpen} />
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
