import IComponent from "@/@types";
import { ISkillItemProps } from "./types";

const SkillItem: IComponent<ISkillItemProps> = ({
  testId = "skill-item",
  title,
  percentage,
  className,
}) => {
  return (
    <li className="skills_data" data-testid={testId}>
      <div className="skills_titles">
        <h3 className="skills_name">{title}</h3>
        <span className="skills_number">{`${percentage}%`}</span>
      </div>

      <div className="skills_bar">
        <span className={`skills_percentage skills_${className}`}></span>
      </div>
    </li>
  );
};

export default SkillItem;
