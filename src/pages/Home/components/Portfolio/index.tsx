import { useEffect, useState } from "react";

import IComponent from "@/@types";

import Bikcraft from "@assets/portfolio/bikcraft.svg";
import Store from "@assets/portfolio/store.svg";
import Countries from "@assets/portfolio/countries.svg";

import SectionHeader from "@components/SectionHeader";
import Icon from "@components/Icon";
import "./styles.css";

const portfolioItems = [
  {
    image: Store,
    title: "ac Store",
    description: "Discover modern watches blending style and function.",
    link: "https://acstore.netlify.app/",
  },
  {
    image: Bikcraft,
    title: "ac Bikcraft",
    description:
      "Passionate team crafting unique bicycles for exceptional experiences.",
    link: "https://acbikcraft.netlify.app/",
  },
  {
    image: Countries,
    title: "ac Countries",
    description:
      "Querying and presenting information about countries using the RestCountries API.",
    link: "https://accountries.netlify.app/",
  },
];

const Portfolio: IComponent = ({ testId = "portfolio" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? portfolioItems.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === portfolioItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === portfolioItems.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="portfolio section"
      id="portfolio"
      aria-labelledby="label-portfolio"
      data-testid={testId}
    >
      <SectionHeader title="Portfolio" subTitle="Most recent work" />

      <div className="portfolio_container container">
        <div className="slider">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio_slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="portfolio_content grid">
                <img
                  src={item.image}
                  alt="portfolio_image"
                  className="portfolio_img"
                />

                <div className="portfolio_data">
                  <h3 className="portfolio_title">{item.title}</h3>

                  <p className="portfolio_description">{item.description}</p>

                  <a
                    href={item.link}
                    className="button button--flex button--samll portfolio_button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go!
                    <i className="uil uil-arrow-right button_icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dots_container">
          {portfolioItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="slider_controls">
          <button
            className="prev_button"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <Icon icon="angle-left" className="arrow_icon" />
          </button>

          <button
            className="next_button"
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <Icon icon="angle-right" className="arrow_icon" />
          </button>
        </div>

        <div className="coming">
          <p className="portfolio_description">
            Coming soon apps demo on Play Store and App Store
          </p>

          <div className="coming_icons">
            <Icon icon="google-play" className="coming_icon" />
            <Icon icon="apple-alt" className="coming_icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
