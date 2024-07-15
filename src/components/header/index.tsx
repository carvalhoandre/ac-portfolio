import { useState, useEffect } from "react";

import LogoWhite from "@assets/logo/white.svg";
import LogoBlack from "@assets/logo/black.svg";

import IComponent from "@/@types";
import { setTheme, isDarkTheme } from "@utils/theme";

import Icon from "@components/Icon";
import NavItem from "@components/Header/components/NavItem";
import { INavITemProps } from "./components/NavItem/types";

import "./styles.css";

const navItems: Array<INavITemProps> = [
  {
    href: "home",
    icon: "estate",
  },
  {
    href: "about",
    icon: "user",
  },
  {
    href: "skills",
    icon: "file-alt",
  },
  {
    href: "services",
    icon: "bag",
  },
  {
    href: "portfolio",
    icon: "scenery",
  },
  {
    href: "contactme",
    icon: "message",
    name: "Get in Touch",
  },
];

const Header: IComponent = ({ testId = "header" }) => {
  const [isDarkMode, setIsDarkMode] = useState(isDarkTheme());
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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

export default Header;
