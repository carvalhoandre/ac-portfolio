import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { socials } from "@utils/socials";

import SocialIcon from "./components/SocialIcon";

import Blob from "@assets/photos/perfil.png";

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
            {socials.map(({ link, icon }, index) => (
              <SocialIcon link={link} icon={icon} key={index} />
            ))}
          </div>

          <div className="home_img">
            <img
              src={Blob}
              className="home home_perfil"
              alt="André Carvalho's Profile"
            />
          </div>
        </div>

        <div className="home_data">
          <h1 className="home_title">{t("emphasis.welcome")}</h1>

          <h3 className="home_subtitle">{t("emphasis.developer")}</h3>

          <p className="home_descption">{t("emphasis.description")}</p>

          <a href="#contactme" className="button button--flex">
            {t("contact.title")} <i className="uil uil-message button_icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Emphasis };
