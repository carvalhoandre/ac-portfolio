import IComponent from "@/@types";
import { IAboutItemProps } from "./components/AboutItem/types";

import Image from "@assets/photos/about.png";

import Curriculum from "@assets/cv/CVAndreLeiteCarvalho.pdf";

import { SectionHeader } from "@components/index";
import AboutItem from "./components/AboutItem";
import "./styles.css";

const aboutItems: Array<IAboutItemProps> = [
  {
    number: 3,
    title: "Years",
    subTitle: "experience",
  },
  {
    number: 8,
    title: "Completed",
    subTitle: "projects",
  },
  {
    number: 3,
    title: "Companies",
    subTitle: "worked",
  },
];

const About: IComponent = ({ testId = "about" }) => {
  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="label-about"
      data-testid={testId}
    >
      <SectionHeader title="About Me" subTitle="My introduction" />

      <div className="about_container container grid">
        <img src={Image} alt="André Leite Carvalho" className="about_img" />

        <div className="about_data">
          <p className="about_description">
            Web and Mobile Developer specializing in modern web technologies and
            UI/UX design. Committed to delivering top-notch quality in every
            project
          </p>

          <div className="about_info">
            {aboutItems.map(({ number, subTitle, title }, index) => (
              <AboutItem
                key={index}
                number={number}
                subTitle={subTitle}
                title={title}
              />
            ))}
          </div>

          <div className="about_buttons">
            <a href={Curriculum} download className="button button--flex">
              Download My CV
              <i className="uil uil-arrow-to-bottom button_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
