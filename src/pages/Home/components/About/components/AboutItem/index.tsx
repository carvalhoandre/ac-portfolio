import IComponent from "@/@types";
import { IAboutItemProps } from "./types";

const AboutItem: IComponent<IAboutItemProps> = ({
  testId = "about-item",
  number,
  title,
  subtitle,
}) => {
  return (
    <div data-testid={testId}>
      <span className="about_info-title">{`0${number}+`}</span>
      <span className="about_info-name">{title}</span>

      {subtitle && <span className="about_info-name">{subtitle}</span>}
    </div>
  );
};

export default AboutItem;
