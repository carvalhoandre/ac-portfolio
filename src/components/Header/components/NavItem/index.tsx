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
  return (
    <a href={`#${href}`} className="nav_link" data-testid={testId}>
      <div className="nav_icon_container">
        <Icon icon={icon} className="nav_icon" />
        <p className="icon_title">{name || href}</p>
      </div>
    </a>
  );
};

export default NavItem;
