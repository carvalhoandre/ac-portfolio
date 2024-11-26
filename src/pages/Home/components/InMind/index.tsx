import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import CardFrom from "@assets/card/front.svg";
import CardBack from "@assets/card/back.svg";

import { Icon, Image } from "@components/index";
import "./styles.css";

const InMind: IComponent = ({ testId = "in-mind" }) => {
  const { t } = useTranslation();

  return (
    <section
      className="project section"
      aria-labelledby="label-in-mind"
      data-testid={testId}
    >
      <div className="project_bg">
        <div className="project_container grid">
          <div className="project_data">
            <h2 className="project_title">{t("inMind.title")}</h2>

            <p className="project_description">{t("inMind.subTitle")}</p>

            <a href="#contactme" className="button button--flex button--white">
              {t("inMind.contact")}
              <Icon icon="message" className="project_icon button_icon" />
            </a>
          </div>

          <div className="project_images">
            <Image src={CardFrom} alt="card_from" className="project_img" />
            <Image src={CardBack} alt="card_from" className="project_img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { InMind };
