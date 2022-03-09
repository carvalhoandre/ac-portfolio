/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import './styles.css'
import ImageTwo from '../../assets/portfolio2.png'
import ImageThree from '../../assets/portfolio3.png'
import ImageFour from '../../assets/portfolio4.png'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

export default class Portfolio extends Component {

    render() {
        return (
            <section className="portfolio section" id="portfolio">
                <h2 className="section_title">Portfolio</h2>
                <span className="section_subtitle">Most recent  work</span>

                <div className="portfolio_container container">
                    <div>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            className="mySwiper"
                            autoplay={{
                                delay: 5000
                            }}
                        >
                            {/* Portfolio one */}
                            <SwiperSlide>
                                <div className="portfolio_content grid">
                                    <img src={ImageFour} alt="portfolio_image" className="portfolio_img" />

                                    <div className="portfolio_data">
                                        <h3 className="portfolio_title">acStore</h3>
                                        <p className="portfolio_description">
                                            Demonstrative layout for your sales
                                        </p>
                                        <a href="https://acstore.netlify.app/"
                                            className="button button--flex button--samll portfolio_button"
                                            target="_blank"
                                        >
                                            Go!
                                            <i className="uil uil-arrow-right button_icon" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Portfolio two */}
                            <SwiperSlide>
                                <div className="portfolio_content grid">
                                    <img src={ImageTwo} alt="portfolio_image" className="portfolio_img" />

                                    <div className="portfolio_data">
                                        <h3 className="portfolio_title">acDelivery</h3>
                                        <p className="portfolio_description">
                                            Make requests for delivery and orders simply
                                            and quickly, with integration with the driver's app.
                                        </p>
                                        <a href="https://acdelivery.netlify.app/"
                                            className="button button--flex button--samll portfolio_button"
                                            target="_blank"
                                        >
                                            Go!
                                            <i className="uil uil-arrow-right button_icon" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Portfolio three */}
                            <SwiperSlide>
                                <div className="portfolio_content grid">
                                    <img src={ImageThree} alt="portfolio_image" className="portfolio_img" />

                                    <div className="portfolio_data">
                                        <h3 className="portfolio_title">acSales</h3>
                                        <p className="portfolio_description">
                                            Example Website to for your business,
                                            using layout minimalist in white.
                                        </p>
                                        <a href="https://acsales.netlify.app/"
                                            className="button button--flex button--samll portfolio_button"
                                            target="_blank">
                                            Go!
                                            <i className="uil uil-arrow-right button_icon" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="coming">
                        <p className="portfolio_description">Coming soon apps demo on Play Store and App Store</p>
                        <div className="coming_icons">
                            <i className="uil uil-google-play coming_icon" />
                            <i className="uil uil-apple-alt coming_icon" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}