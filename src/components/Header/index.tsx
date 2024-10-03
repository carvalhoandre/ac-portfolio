import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { navItems } from "@utils/navItems";
import { getLanguage, setLanguage } from "@utils/language";

import LogoWhite from "@assets/logo/white.svg";
import LogoBlack from "@assets/logo/black.svg";

import IComponent from "@/@types";

import { Icon } from "@components/Icon";
import NavItem from "@components/Header/components/NavItem";

import "./styles.css";

type IHeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const Header: IComponent<IHeaderProps> = ({
  testId = "header",
  isDarkMode,
  toggleTheme,
}) => {
  const { i18n, t } = useTranslation();

  const lng = getLanguage() || "en";

  const [isNavVisible, setIsNavVisible] = useState(false);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

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
          <a href="/" className="nav_logo">
            {isDarkMode ? (
              <img src={LogoWhite} alt="logo" className="logo-ac" />
            ) : (
              <img src={LogoBlack} alt="logo" className="logo-ac" />
            )}
          </a>

          <div className="nav_btns">
            <select
              value={lng}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-selector"
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>

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
