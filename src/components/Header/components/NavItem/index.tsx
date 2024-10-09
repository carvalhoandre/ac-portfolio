import { useTranslation } from "react-i18next";

import IComponent from "@/@types";
import { INavITemProps } from "./types";

import { Icon } from "@components/Icon";
import "./styles.css";

const NavItem: IComponent<INavITemProps> = ({
  testId = "nav-item",
  href,
  icon,
  name,
}) => {
  const { t } = useTranslation();

  return (
    <a
      href={`#${href}`}
      className="nav_link"
      data-testid={testId}
      aria-label={t("navbar.navigate", {
        name: name,
      })}
    >
      <div className="nav_icon_container">
        <Icon icon={icon} className="nav_icon" />

        <p className="icon_title">{name || href}</p>
      </div>
    </a>
  );
};

export { NavItem };
