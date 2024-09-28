import IComponent from "@/@types";
import { ISectionHeaderProps } from "./types";

import "./styles.css";

const SectionHeader: IComponent<ISectionHeaderProps> = ({
  testId = "section-header",
  title,
  subTitle,
}) => {
  return (
    <div data-testid={testId}>
      <h2 className="section_title">{title}</h2>
      <span className="section_subtitle">{subTitle}</span>
    </div>
  );
};

export { SectionHeader };
