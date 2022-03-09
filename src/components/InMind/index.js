import React, { Component } from 'react'
import './styles.css'
import One from '../../assets/inmind1.png'
import Two from '../../assets/inmind2.png'
import Three from '../../assets/inmind3.png'
import Four from '../../assets/inmind4.png'
import Five from '../../assets/inmind5.png'
import Six from '../../assets/inmind6.png'
import Seven from '../../assets/inmind7.png'
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

export default class InMind extends Component {

    render() {
        return (
            <>
                <section className="project section">
                    <div className="project_bg">
                        <div className="project_container container grid">
                            <div className="project_data">
                                <h2 className="project_title">You have a new project?</h2>
                                <p className="project_description">
                                    Contact me now and get a 15% discount on your new project.
                                </p>
                                <a href="#contactme" className="button button--flex button--white">
                                    Contact Me
                                    <i className="uil uil-message project_icon button_icon" />
                                </a>
                            </div>
                            <Swiper
                                className="mySwiper"
                                autoplay={{
                                    delay: 2500
                                }}
                            >
                                <SwiperSlide>
                                    <img src={One} alt="my_photo" className="project_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Two} alt="my_photo" className="project_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Three} alt="my_photo" className="project_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Four} alt="my_photo" className="project_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Five} alt="my_photo" className="project_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Six} alt="my_photo" className="project_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Seven} alt="my_photo" className="project_img" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}