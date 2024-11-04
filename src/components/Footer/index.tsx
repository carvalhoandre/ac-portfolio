import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { navItems } from "@utils/navItems";
import { getCurrentYear } from "@helper/data";

import { Icon } from "@/components/Icon";
import SocialsIcons from "../SocialsIcons";

import "./styles.css";

const Footer: IComponent = ({ testId = "footer" }) => {
  const { t } = useTranslation();

  const currentYear = useMemo(() => getCurrentYear(), []);

  return (
    <footer className="page footer" data-testid={testId}>
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">André Leite Carvalho</h1>
            <span className="footer_subtitle">{t("emphasis.developer")}</span>

            <div className="footer_socials">
              <SocialsIcons testId={testId} />
            </div>
          </div>

          <ul className="footer_links">
            {navItems.map(({ href, name }, index) => (
              <li key={index}>
                <a
                  href={`#${href}`}
                  className="footer_link"
                  aria-label={t("navbar.navigate", {
                    name: name,
                  })}
                >
                  {t(`navbar.${href}`)}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#header"
                className="footer_social"
                aria-label={t("footer.navigate")}
              >
                <Icon icon="arrow-up" />
              </a>
            </li>
          </ul>
        </div>

        <p className="footer_copy">
          &#169; {` ${currentYear} André Leite Carvalho. ${t("footer.rights")}`}
        </p>
      </div>
    </footer>
  );
};

export { Footer };
