import { useEffect, useState } from "react";

import IComponent from "@/@types";
import { ITestimonial } from "./types";

import Icon from "@components/Icon";
import SectionHeader from "@components/SectionHeader";

import "./styles.css";

const testimonials: Array<ITestimonial> = [
  {
    name: "Ian Charlesson Gomes Santana",
    client:
      "Senior Test Analyst - Was working with me on the same team at Hyperlocal.",
    description:
      "On August 10, 2023, Ian Charlesson was working with André on the same team. It's a pleasure to work with and recommend André Leite, a developer with immense potential in Front-End and Mobile. In the moments we worked together, he demonstrated a remarkable passion for learning and growing in the field. With knowledge in technologies such as HTML, CSS, JavaScript, ReactJS, and React Native, André Leite has the ability to create attractive and responsive interfaces. His proactive collaboration, attention to detail, and problem-solving skills make him a valuable member of any development team. His positive attitude and constant pursuit of learning are inspiring. André Leite not only delivers high-quality results but also contributes to a constructive team environment.",
  },
  {
    name: "Bruno Elias de Souza",
    client:
      "Software Developer - Was working with me on the same team at Hyperlocal.",
    description:
      "Working and sharing knowledge with André has always been very productive. He is dedicated to learning/teaching and implementing logical solutions for the business.",
  },
];

const Testimonial: IComponent = ({ testId = "testimonial" }) => {
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
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="testimonial section"
      data-testid={testId}
      aria-labelledby="testimonial"
    >
      <SectionHeader title="Testimonial" />

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

                  <div className="testimonial_rating">
                    {Array(5)
                      .fill("")
                      .map((_, starIndex) => (
                        <Icon
                          key={starIndex}
                          icon="star"
                          className="testimonial_icon-star"
                        />
                      ))}
                  </div>
                </div>

                <p className="testimonial_description">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dots_container">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
              role="button"
              aria-label={`Go to testimonial ${index + 1}`}
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
      </div>
    </section>
  );
};

export default Testimonial;
