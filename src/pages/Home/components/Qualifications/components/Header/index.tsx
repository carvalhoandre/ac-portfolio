import IComponent from "@/@types";
import { IQualificationsHeaderProps } from "./types";
import { ISelected } from "../../types";

import Icon from "@/components/Icon";

const QualificationsHeader: IComponent<IQualificationsHeaderProps> = ({
  testId = "skill-header",
  title,
  icon,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div
      className={`qualification_button ${
        isOpen ? "qualification_button_active" : ""
      }`}
      data-testid={testId}
      onClick={() => toggleOpen(title.toLowerCase() as ISelected)}
    >
      <Icon icon={icon} className="qualification_icon" />

      {title}
    </div>
  );
};

export default QualificationsHeader;
