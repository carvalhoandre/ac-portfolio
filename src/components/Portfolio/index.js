
import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import './styles.css'

import ImageOne from '../../assets/portfolio1.jpg'
import ImageTwo from '../../assets/portfolio2.jpg'
import ImageThree from '../../assets/portfolio3.jpg'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


export default class Portfolio extends Component {

    render() {

        return (
            <>
                <section className="portfolio section" id="portfolio">
                    <h2 className="section_title">Portfolio</h2>
                    <span className="section_subtitle">Most recent  work</span>

                    <div className="portfolio_container container">
                        <div>
                            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
                                <SwiperSlide>
                                    {/* Portfolio one */}
                                    <div className="portfolio_content grid">
                                        <img src={ImageOne} alt="portfolio_image" className="portfolio_img" />

                                        <div className="portfolio_data">
                                            <h3 className="portfolio_title">Modern Website</h3>
                                            <p className="portfolio_description">Website adaptable to all devices,
                                                witch ui components and animated interactions.
                                            </p>
                                            <a href="/" className="button button--flex button--samll portfolio_button">
                                                Demo
                                                <i className="uil uil-arrow-right button_icon" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* Portfolio two */}
                                    <div className="portfolio_content grid">
                                        <img src={ImageTwo} alt="portfolio_image" className="portfolio_img" />

                                        <div className="portfolio_data">
                                            <h3 className="portfolio_title">Brand Website</h3>
                                            <p className="portfolio_description">Website adaptable to all devices,
                                                witch ui components and animated interactions.
                                            </p>
                                            <a href="/" className="button button--flex button--samll portfolio_button">
                                                Demo
                                                <i className="uil uil-arrow-right button_icon" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* Portfolio trhee */}
                                    <div className="portfolio_content grid">
                                        <img src={ImageThree} alt="portfolio_image" className="portfolio_img" />

                                        <div className="portfolio_data">
                                            <h3 className="portfolio_title">Online Store</h3>
                                            <p className="portfolio_description">Website adaptable to all devices,
                                                witch ui components and animated interactions.
                                            </p>
                                            <a href="/" className="button button--flex button--samll portfolio_button">
                                                Demo
                                                <i className="uil uil-arrow-right button_icon" />
                                            </a>
                                        </div>
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