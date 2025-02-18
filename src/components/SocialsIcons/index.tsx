import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { socials } from "@utils/socials";

import { Icon } from "@components/Icon";

import FintechSVG from "@assets/icons/kaggleSVG";

import "./styles.css";

const SocialsIcons: IComponent = ({ testId = "social-icon" }) => {
  const { t } = useTranslation();

  return socials.map(({ link, icon, name }, index) => (
    <a
      key={`${testId}-${index}`}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="home_social-icon"
      data-testid={testId}
      aria-label={t(`emphasis.${name}`)}
    >
      {
        name === "kaggle" ? (
          <FintechSVG  />
        ) : (
          <Icon icon={icon} />
        )
      }
    </a>
  ));
};

export default SocialsIcons;
