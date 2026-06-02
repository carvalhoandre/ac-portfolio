import IComponent from "@/@types";
import { ISkillTagProps } from "./types";

const SkillTag: IComponent<ISkillTagProps> = ({
  testId = "skill-tag",
  title,
}) => {
  return (
    <li className="skills__tag" data-testid={testId}>
      {title}
    </li>
  );
};

export default SkillTag;

