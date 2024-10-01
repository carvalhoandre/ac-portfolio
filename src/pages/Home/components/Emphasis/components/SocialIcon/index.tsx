import IComponent from "@/@types";
import { ISocialIconProps } from "./types";

import { Icon } from "@components/Icon";

const SocialIcon: IComponent<ISocialIconProps> = ({
  testId = "social-icon",
  link,
  icon,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="home_social-icon"
      data-testid={testId}
    >
      <Icon icon={icon} />
    </a>
  );
};

export default SocialIcon;
