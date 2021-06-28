import React, { Component } from 'react'
import './styles.css'
import Image from '../../assets/project.png'

export default class InMind extends Component {

    render() {
        return (
            <>
                <section className="project section">
                    <div className="project_bg">
                        <div className="project_container container grid">
                            <div className="project_data">
                                <h2 className="project_titlep">You have a new project</h2>
                                <p className="project_description">
                                    Contact me now and get a 30% discount on your new project.
                                </p>
                                <a href="#contact" className="button button--flex button--white">
                                    Contact Me
                                    <i className="uil uil-message project_icon button_icon" />
                                </a>
                            </div>

                            <img src={Image} alt="my_photo" className="project_img" />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}