import IComponent from "@/@types";

import CardFrom from "@assets/card/front.svg";
import CardBack from "@assets/card/back.svg";

import { Icon } from "@components/Icon";
import "./styles.css";

const InMind: IComponent = ({ testId = "in-mind" }) => {
  return (
    <section
      className="project section"
      aria-labelledby="label-in-mind"
      data-testid={testId}
    >
      <div className="project_bg">
        <div className="project_container grid">
          <div className="project_data">
            <h2 className="project_title">Got a new project?</h2>

            <p className="project_description">
              Contact and enjoy a 15% discount on your first project
            </p>

            <a href="#contactme" className="button button--flex button--white">
              Get in Touch
              <Icon icon="message" className="project_icon button_icon" />
            </a>
          </div>

          <div className="project_images">
            <img src={CardFrom} alt="card_from" className="project_img" />
            <img src={CardBack} alt="card_from" className="project_img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { InMind };
