import IComponent from "@/@types";
import { ISocialIconProps } from "./components/SocialIcon/types";

import SocialIcon from "./components/SocialIcon";

import Blob from "@assets/photos/perfil.png";

import "./styles.css";

const socials: Array<ISocialIconProps> = [
  {
    link: "https://www.linkedin.com/in/carvalhoandree",
    icon: "linkedin-alt",
  },
  {
    link: "https://github.com/carvalhoandre",
    icon: "github-alt",
  },
  {
    link: "https://dribbble.com/andre_carvalho",
    icon: "dribbble",
  },
];

const Emphasis: IComponent = ({ testId = "emphasis" }) => {
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
          <h1 className="home_title">Hi there! I'm André</h1>

          <h3 className="home_subtitle">Front-End Developer</h3>

          <p className="home_descption">
            committed to delivering high-quality work consistently.
          </p>

          <a href="#contactme" className="button button--flex">
            Get in Touch <i className="uil uil-message button_icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Emphasis;
