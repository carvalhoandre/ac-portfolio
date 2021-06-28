
import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

//images
import One from '../../assets/testimonial1.jpg'
import Two from '../../assets/testimonial2.jpg'
import Three from '../../assets/testimonial3.jpg'

// install Swiper modules
SwiperCore.use([Pagination]);


export default class Testimonial extends Component {


    render() {
        return (
            <>
                <section className="testimonial section" id="services">
                    <h2 className="section_title">Testimonial</h2>
                    <span className="section_subtitle">My client saying</span>

                    <div className="testimonial_container container">
                        <div>
                            <Swiper pagination={{ "dynamicBullets": true }} className="mySwiper">
                                <SwiperSlide>
                                    {/* Testimonial one */}
                                    <div className="testimonial_content">
                                        <div className="testimonial_data">
                                            <div className="testimonial_header">
                                                <img src={One} alt="client_image" className="testimonial_img" />

                                                <div>
                                                    <h3 className="testimonial_name">Sara Smith</h3>
                                                    <span className="testimonial_client">Client</span>
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
                                            I get a good impression, I carry out my project with all the possible quality
                                            and attention and support 24 hours a day.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* Testimonial two */}
                                    <div className="testimonial_content">
                                        <div className="testimonial_data">
                                            <div className="testimonial_header">
                                                <img src={Two} alt="client_image" className="testimonial_img" />

                                                <div>
                                                    <h3 className="testimonial_name">João Neves</h3>
                                                    <span className="testimonial_client">Client</span>
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
                                            I get a good impression, I carry out my project with all the possible quality
                                            and attention and support 24 hours a day.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* Testimonial three */}
                                    <div className="testimonial_content">
                                        <div className="testimonial_data">
                                            <div className="testimonial_header">
                                                <img src={Three} alt="client_image" className="testimonial_img" />

                                                <div>
                                                    <h3 className="testimonial_name">Raul Harris</h3>
                                                    <span className="testimonial_client">Client</span>
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
                                            I get a good impression, I carry out my project with all the possible quality
                                            and attention and support 24 hours a day.
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}