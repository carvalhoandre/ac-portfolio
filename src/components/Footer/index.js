import React, { Component } from "react";
import './styles.css'

export default class Footer extends Component {

    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer_bg">
                        <div className="footer_container container grid">
                            <div>
                                <h1 className="footer_title">André Carvalho</h1>
                                <span className="footer_subtitle">Frontend developer</span>
                            </div>

                            <ul className="footer_links">
                                <li>
                                    <a href="#services" className="footer_link">Services</a>
                                </li>
                                <li>
                                    <a href="#portfolio" className="footer_link">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#contact" className="footer_link">Contactme</a>
                                </li>
                            </ul>

                            <div className="footer_socials">
                                <a href="https://www.instagram.com/slc_andre" className="footer_social">
                                    <i className="uil uil-instagram" />
                                </a>
                            </div>
                        </div>

                        <p className="footer_copy">
                            &#169; André Carvalho. All right reserved
                        </p>
                    </div>
                </footer>
            </>
        )
    }
}