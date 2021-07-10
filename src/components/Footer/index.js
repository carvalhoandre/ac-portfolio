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
                                <span className="footer_subtitle">Mobile and Frontend developer</span>
                            </div>

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