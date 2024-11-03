import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import { useSlider } from "@hooks/slider";
import useTestimonial from "./hook";

import { SliderDots, SliderControls, SectionHeader } from "@components/index";
import "./styles.css";

const Testimonial: IComponent = ({ testId = "testimonial" }) => {
  const { t } = useTranslation();
  const { testimonials } = useTestimonial();

  const {
    currentSlide,
    handlePrevSlide,
    handleNextSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setCurrentSlide,
  } = useSlider({ itemsLength: testimonials.length });

  return (
    <section
      className="testimonial section"
      data-testid={testId}
      aria-labelledby="testimonial"
      id="testimonial"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <SectionHeader title={t("testimonial.title")} />

      <div className="testimonial_container container">
        <div className="slider" aria-live="polite">
          {testimonials.map(({ client, description, name }, index) => (
            <div
              key={index}
              className={`testimonial_content ${
                index === currentSlide ? "active-slide" : "hidden-slide"
              }`}
              role="group"
            >
              <div className="testimonial_inner">
                <div className="testimonial_data">
                  <div className="testimonial_header">
                    <div className="testimonial_slider_header">
                      <h3 className="testimonial_name">{name}</h3>
                      <span className="testimonial_client">{client}</span>
                    </div>
                  </div>
                </div>

                <p className="testimonial_description">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <SliderDots
          itemsArray={testimonials}
          currentSlide={currentSlide}
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

export { Testimonial };
