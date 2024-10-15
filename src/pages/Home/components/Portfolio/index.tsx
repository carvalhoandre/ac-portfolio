import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { useSlider } from "@hooks/slider";
import usePortfolios from "./hook";

import { SectionHeader, SliderDots, SliderControls } from "@components/index";
import "./styles.css";

const Portfolio: IComponent = ({ testId = "portfolio" }) => {
  const { t } = useTranslation();

  const { portfolioItems } = usePortfolios();

  const {
    currentSlide,
    handlePrevSlide,
    handleNextSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setCurrentSlide,
  } = useSlider({ itemsLength: portfolioItems.length });

  return (
    <section
      className="portfolio section"
      id="portfolio"
      aria-labelledby="label-portfolio"
      data-testid={testId}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
                  loading="lazy"
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
