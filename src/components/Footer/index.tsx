import { useMemo } from "react";
import IComponent from "@/@types";

import { socials } from "@utils/socials";
import { navItems } from "@utils/navItems";
import { getCurrentYear } from "@helper/data";

import "./styles.css";
import { Icon } from "@/components/Icon";
import { useTranslation } from "react-i18next";

const Footer: IComponent = ({ testId = "footer" }) => {
  const { t } = useTranslation();

  const currentYear = useMemo(() => getCurrentYear(), []);

  return (
    <footer className="footer" data-testid={testId}>
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">André Carvalho</h1>
            <span className="footer_subtitle">{t("emphasis.developer")}</span>

            <div className="footer_socials">
              {socials.map(({ icon, link }, index) => (
                <a
                  href={link}
                  className="footer_social"
                  target="_new"
                  rel="external"
                  key={index}
                >
                  <Icon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          <ul className="footer_links">
            {navItems.map(({ href }, index) => (
              <li key={index}>
                <a href={`#${href}`} className="footer_link">
                  {t(`navbar.${href}`)}
                </a>
              </li>
            ))}

            <li>
              <a href="#home" className="footer_social">
                <Icon icon="arrow-up" />
              </a>
            </li>
          </ul>
        </div>

        <p className="footer_copy">
          &#169; {` ${currentYear} André Carvalho. ${t("footer.rights")}`}
        </p>
      </div>
    </footer>
  );
};

export { Footer };
