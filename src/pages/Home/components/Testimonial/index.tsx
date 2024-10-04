import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import IComponent from "@/@types";

import useTestimonial from "./hook";

import { SliderDots, SliderControls, SectionHeader } from "@components/index";
import "./styles.css";

const TEN_SECONDS = 10000;

const Testimonial: IComponent = ({ testId = "testimonial" }) => {
  const { t } = useTranslation();
  const { testimonials } = useTestimonial();

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, TEN_SECONDS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="testimonial section"
      data-testid={testId}
      aria-labelledby="testimonial"
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
              aria-roledescription="testimonial"
              aria-hidden={index !== currentSlide}
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
