import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import SocialsIcons from "@components/SocialsIcons";

import Blob from "@assets/photos/perfil.webp";

import { Icon, Image } from "@/components";
import "./styles.css";

const Emphasis: IComponent = ({ testId = "emphasis" }) => {
  const { t } = useTranslation();

  return (
    <section
      className="home section"
      id="home"
      aria-labelledby="label-social"
      data-testid={testId}
    >
      <div className="home_container container grid">
        <div className="home_content grid">
          <div className="home_social">
            <SocialsIcons testId={testId} />
          </div>

          <div className="home_img">
            <Image
              src={Blob}
              className="home home_perfil"
              alt={t("emphasis.profileAlt", {
                name: "André Leite Carvalho",
                role: t("emphasis.developer"),
              })}
            />
          </div>

          <div className="home_data">
            <h1 className="home_title">André Leite Carvalho</h1>

            <h2 className="home_subtitle">{t("emphasis.developer")}</h2>

            <p className="home_descption">{t("emphasis.description")}</p>

            <a href="#contactme" className="button button--flex">
              {t("contact.title")}

              <i className="uil uil-message button_icon" />
            </a>
          </div>
        </div>

        <div className="home_scroll">
          <a
            href="#about"
            className="home_scroll-button button--flex"
            aria-label={t("emphasis.scroll")}
          >
            <Icon icon="mouse-alt" className="home_scroll-mouse" />

            <span className="home_scroll-name">{t("emphasis.scroll")}</span>

            <Icon icon="arrow-down" className="home_scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Emphasis };
