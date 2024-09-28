import IComponent from "@/@types";
import { IAboutItemProps } from "./types";

const AboutItem: IComponent<IAboutItemProps> = ({
  testId = "about-item",
  number,
  title,
  subTitle,
}) => {
  return (
    <div data-testid={testId}>
      <span className="about_info-title">{`0${number}+`}</span>
      <span className="about_info-name">
        {title} <br /> {subTitle}
      </span>
    </div>
  );
};

export default AboutItem;
