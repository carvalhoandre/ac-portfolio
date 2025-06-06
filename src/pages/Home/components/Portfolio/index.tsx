import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { useSlider } from "@hooks/slider";
import usePortfolios from "./hook";

import {
  Image,
  SliderDots,
  SectionHeader,
  SliderControls,
  Icon,
} from "@components/index";
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
    handleMouseEnter,
    handleMouseLeave,
  } = useSlider({ itemsLength: portfolioItems.length });

  // Calculate previous and next slide indices for transition effects
  const prevSlideIndex = currentSlide === 0 ? portfolioItems.length - 1 : currentSlide - 1;
  const nextSlideIndex = currentSlide === portfolioItems.length - 1 ? 0 : currentSlide + 1;

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

      <div
        className="portfolio_container container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slider">
          {portfolioItems.map((item, index) => {
            let slideClass = "portfolio_slide";

            if (index === currentSlide) {
              slideClass += " active";
            } else if (index === prevSlideIndex) {
              slideClass += " prev";
            } else if (index === nextSlideIndex) {
              slideClass += " next";
            }

            return (
              <div
                key={index}
                className={slideClass}
              >
                <div className="portfolio_content grid">
                  <Image
                    src={item.image ?? ""}
                    alt="portfolio_image"
                    className="portfolio_img"
                  />

                  <div className="portfolio_data">
                    <h3 className="portfolio_title">{item.title}</h3>

                    <p className="portfolio_description">{item.description}</p>

                    <div className="portfolio_button_container">
                      <button
                        onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                        className="portfolio_button"
                        aria-label={`Visit ${item.title}`}
                      >
                        <span className="button_text">{t("portfolio.go")}</span>
                        <Icon icon="arrow-right" className="button_icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
