import React, { Component } from 'react'
import './styles.css'

export default class Contact extends Component {

    render() {
        return (
            <>
                <section className="contact section" id="contactme">
                    <h2 className="section_title">Contact Me</h2>
                    <span className="section_subtitle">Get in touch</span>

                    <div className="contact_container container grid">
                        <div>
                            <div className="contact_information">
                                <i className="uil uil-phone contact_icon" />

                                <div>
                                    <h3 className="contact_title">Call Me</h3>
                                    <span className="contact_subtitle">11 94924-5875</span>
                                </div>
                            </div>

                            <div className="contact_information">
                                <i className="uil uil-envelope contact_icon" />

                                <div>
                                    <h3 className="contact_title">Email</h3>
                                    <span className="contact_subtitle">
                                        <a
                                            href="mailto:andre_cavalho0@live.com?Subject=Olá André"
                                            target="_new"
                                            rel="external"
                                            className="contact_email"
                                        >
                                            andre_cavalho0@live.com
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact_information">
                                <i className="uil uil-map-marker contact_icon" />

                                <div>
                                    <h3 className="contact_title">Location</h3>
                                    <span className="contact_subtitle">Brazil - São Paulo</span>
                                </div>
                            </div>
                        </div>

                        <form action={null} className="contact_form grid">
                            <div className="contact_inputs grid">
                                <div className="contact_content">
                                    <label for={null} className="contact_label">Name</label>
                                    <input type="text" className="contact_input" />
                                </div>
                                <div className="contact_content">
                                    <label for={null} className="contact_label">Email</label>
                                    <input type="email" className="contact_input" />
                                </div>
                            </div>
                            <div className="contact_content">
                                <label for={null} className="contact_label">Project</label>
                                <input type="text" className="contact_input" />
                            </div>
                            <div className="contact_content">
                                <label for={null} className="contact_label">Message</label>
                                <textarea cols="0" rows="7" className="contact_input"></textarea>
                            </div>

                            <div>
                                <a href="/" className="button button--flex">
                                    Send Message
                                    <i className="uil uil-message button_icon" />
                                </a>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}