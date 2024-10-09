import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import IComponent from "@/@types";
import { IHeaderProps } from "./types";

import { navItems } from "@utils/navItems";

import LogoWhite from "@assets/logo/white.svg";
import LogoBlack from "@assets/logo/black.svg";

import { Icon } from "@components/Icon";
import { Locale } from "./components/Locale";
import { NavItem } from "./components/NavItem";

import "./styles.css";

const Header: IComponent<IHeaderProps> = ({
  testId = "header",
  isDarkMode,
  toggleTheme,
}) => {
  const { t } = useTranslation();

  const [isNavVisible, setIsNavVisible] = useState(false);

  const navMenuItems = useMemo(() => {
    return navItems.map(({ href, icon }, key) => (
      <NavItem href={href} icon={icon} name={t(`navbar.${href}`)} key={key} />
    ));
  }, [t]);

  return (
    <header className="header" id="header" data-testid={testId}>
      <nav className="nav" aria-label="primary">
        <div
          className={`nav_menu ${isNavVisible ? "show-menu" : "close-menu"}`}
          id="nav-menu"
        >
          <ul className="nav_list grid">{navMenuItems}</ul>

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
          <a
            href="/"
            className="nav_logo"
            aria-label={t("navbar.navigate", {
              name: "home",
            })}
          >
            {isDarkMode ? (
              <img src={LogoWhite} alt="logo" className="logo-ac" />
            ) : (
              <img src={LogoBlack} alt="logo" className="logo-ac" />
            )}
          </a>

          <div className="nav_btns">
            <Locale />

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
