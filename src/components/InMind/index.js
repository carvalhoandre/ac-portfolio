import React, { Component } from "react";
import "./styles.css";
import CardFrom from "../../assets/card/front.svg";
import CardBack from "../../assets/card/back.svg";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

export default class InMind extends Component {
  render() {
    return (
      <section className="project section" aria-labelledby="label-in-mind">
        <div className="project_bg">
          <div className="project_container grid">
            <div className="project_data">
              <h2 className="project_title">Got a new project?</h2>
              <p className="project_description">
                Contact and enjoy a 15% discount on your first project{" "}
              </p>
              <a
                href="#contactme"
                className="button button--flex button--white"
              >
                Get in Touch
                <i className="uil uil-message project_icon button_icon" />
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
  }
}
