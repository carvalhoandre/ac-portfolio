import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default class Testimonial extends Component {
  render() {
    return (
      <>
        <section className="testimonial section">
          <h2 className="section_title">Testimonial</h2>

          <div className="testimonial_container container">
            <div>
              <Swiper
                pagination={{ dynamicBullets: true }}
                className="testimonial_swiper"

              >
                <SwiperSlide>
                  {/* Testimonial one */}
                  <div className="testimonial_content">
                    {/* Testimonial one */}
                    <div>
                      <div className="testimonial_data">
                        <div className="testimonial_header">
                          <div>
                            <a href="https://www.linkedin.com/in/ian-charlesson-gomes-santana-a78947b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BR2d50PIISx%2BDXsizoh5tJw%3D%3D">
                              <h3 className="testimonial_name">
                                Ian Charlesson Gomes Santana
                              </h3>
                            </a>
                            <span className="testimonial_client">
                              Senior Test Analyst - Was working with me on the
                              same team at Hyperlocal.
                            </span>
                          </div>
                        </div>

                        <div>
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                        </div>
                      </div>

                      <p className="testimonial_description">
                        On August 10, 2023, Ian Charlesson was working with
                        André on the same team. It's a pleasure to work with and
                        recommend André Leite, a developer with immense
                        potential in Front-End and Mobile. In the moments we
                        worked together, he demonstrated a remarkable passion
                        for learning and growing in the field. With knowledge in
                        technologies such as HTML, CSS, JavaScript, ReactJS, and
                        React Native, André Leite has the ability to create
                        attractive and responsive interfaces. His proactive
                        collaboration, attention to detail, and problem-solving
                        skills make him a valuable member of any development
                        team. His positive attitude and constant pursuit of
                        learning are inspiring. André Leite not only delivers
                        high-quality results but also contributes to a
                        constructive team environment."
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* Testimonial two */}
                  <div className="testimonial_content">
                    {/* Testimonial one */}
                    <div>
                      <div className="testimonial_data">
                        <div className="testimonial_header">
                          <div>
                            <a href="https://www.linkedin.com/in/bruno-elias-de-souza-780851161?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BTmRMtE%2BRR7C5LUtiGy3zoQ%3D%3D">
                              <h3 className="testimonial_name">
                                Bruno Elias de Souza
                              </h3>
                            </a>
                            <span className="testimonial_client">
                              Software Developer - Was working with me on the
                              same team at Hyperlocal.
                            </span>
                          </div>
                        </div>

                        <div>
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                          <i className="uil uil-star testimonial_icon-star" />
                        </div>
                      </div>

                      <p className="testimonial_description">
                        Working and sharing knowledge with André has always been
                        very productive. He is dedicated to learning/teaching
                        and implementing logical solutions for the business.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </>
    );
  }
}
