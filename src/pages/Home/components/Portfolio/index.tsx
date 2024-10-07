import { useEffect, useState } from "react";

import IComponent from "@/@types";

import usePortfolios from "./hook";

import { SectionHeader, SliderDots, SliderControls } from "@components/index";
import "./styles.css";
import { useTranslation } from "react-i18next";

const TEN_SECONDS = 10000;

const Portfolio: IComponent = ({ testId = "portfolio" }) => {
  const { t } = useTranslation();

  const { portfolioItems } = usePortfolios();

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? portfolioItems.length - 1 : prevSlide - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === portfolioItems.length - 1 ? 0 : prevSlide + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === portfolioItems.length - 1 ? 0 : prevSlide + 1,
      );
    }, TEN_SECONDS);

    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  return (
    <section
      className="portfolio section"
      id="portfolio"
      aria-labelledby="label-portfolio"
      data-testid={testId}
    >
      <SectionHeader
        title={t("portfolio.title")}
        subTitle={t("portfolio.subTitle")}
      />

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
                    {t("portfolio.go")}
                    <i className="uil uil-arrow-right button_icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SliderDots
          currentSlide={currentSlide}
          itemsArray={portfolioItems}
          setCurrentSlide={setCurrentSlide}
        />

        <SliderControls
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />
      </div>
    </section>
  );
};

export { Portfolio };
