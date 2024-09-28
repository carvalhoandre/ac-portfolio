import { useState } from "react";

import { IHeaderProps } from "./types";

import { navItems } from "@utils/navItems";

import LogoWhite from "@assets/logo/white.svg";
import LogoBlack from "@assets/logo/black.svg";

import IComponent from "@/@types";

import { Icon } from "@components/Icon";
import NavItem from "@components/Header/components/NavItem";

import "./styles.css";

const Header: IComponent<IHeaderProps> = ({
  testId = "header",
  isDarkMode,
  toggleTheme,
}) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="header" id="header" data-testid={testId}>
      <nav className="nav" aria-label="primary">
        <div
          className={`nav_menu ${isNavVisible ? "show-menu" : "close-menu"}`}
          id="nav-menu"
        >
          <ul className="nav_list grid">
            {navItems.map(({ href, icon, name }, key) => (
              <NavItem href={href} icon={icon} name={name} key={key} />
            ))}
          </ul>

          <div>
            <Icon
              className="nav_close nav_icon"
              icon="times"
              onClick={() => setIsNavVisible(false)}
              aria-label="Close Navigation"
            />
          </div>
        </div>

        <div
          className={`nav_header ${isNavVisible ? "close-menu" : "show-menu"}`}
        >
          <a href="/" className="nav_logo">
            {isDarkMode ? (
              <img src={LogoWhite} alt="logo" className="logo-ac" />
            ) : (
              <img src={LogoBlack} alt="logo" className="logo-ac" />
            )}
          </a>

          <div className="nav_btns">
            <Icon
              className="change-theme"
              icon={isDarkMode ? "sun" : "moon"}
              onClick={toggleTheme}
              id="theme-button"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            />

            <div className="nav_toggle nav_icon" id="nav-toggle">
              <Icon
                icon="ellipsis-v"
                onClick={() => setIsNavVisible(true)}
                aria-label="Open Navigation"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
