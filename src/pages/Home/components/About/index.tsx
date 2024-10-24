import { useTranslation } from "react-i18next";

import IComponent from "@/@types";
import { IAboutItemProps } from "./components/AboutItem/types";

import { getLanguage } from "@utils/language";

import Image from "@assets/photos/about.png";

import CurriculumPt from "@assets/cv/CVAndreLeiteCarvalho.pdf";
import CurriculumEng from "@assets/cv/CVAndreCarvalhoENG.pdf";

import { SectionHeader } from "@components/index";
import AboutItem from "./components/AboutItem";
import "./styles.css";

const aboutItems: Array<IAboutItemProps> = [
  {
    number: 3,
    title: "experience",
  },
  {
    number: 8,
    title: "projects",
  },
  {
    number: 3,
    title: "companies",
  },
];

const About: IComponent = ({ testId = "about" }) => {
  const { t } = useTranslation();
  const currentLang = getLanguage() || "en";

  const href = currentLang === "en" ? CurriculumEng : CurriculumPt;

  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="label-about"
      data-testid={testId}
    >
      <SectionHeader title={t("about.title")} subTitle={t("about.subTitle")} />

      <div className="about_container container grid">
        <img
          src={Image}
          alt="André Leite Carvalho"
          className="about_img"
          loading="lazy"
        />

        <div className="about_data">
          <p className="about_description">{t("about.description")}</p>

          <div className="about_info">
            {aboutItems.map(({ number, title }, index) => (
              <AboutItem
                key={index}
                number={number}
                title={t(`about.${title}`)}
              />
            ))}
          </div>

          <div className="about_buttons">
            <a href={href} download className="button button--flex">
              {t("about.download")}
              <i className="uil uil-arrow-to-bottom button_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
