import React, { Component } from "react";

import { getCurrentYear } from "../../helper/data";

import "./styles.css";

export default class Footer extends Component {
  render() {
    const currentYear = getCurrentYear();

    return (
      <footer className="footer">
        <div className="footer_bg">
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">André Carvalho</h1>
              <span className="footer_subtitle">Frontend Developer</span>

              <div className="footer_socials">
                <a
                  href="https://www.linkedin.com/in/carvalhoandree/"
                  className="footer_social"
                  target="_new"
                  rel="external"
                >
                  <i className="uil uil-linkedin-alt" />
                </a>

                <a
                  href="https://github.com/carvalhoandre/"
                  className="footer_social"
                  target="_new"
                  rel="external"
                >
                  <i className="uil uil-github-alt" />
                </a>
              </div>
            </div>

            <ul className="footer_links">
              <li>
                <a href="#services" className="footer_link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer_link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer_link">
                  Contact Me
                </a>
              </li>
              <li>
                <a href="#home" className="footer_social">
                  <i className="uil uil-arrow-up" />
                </a>
              </li>
            </ul>
          </div>

          <p className="footer_copy">
            &#169; {` ${currentYear} André Carvalho. All right reserved`}
          </p>
        </div>
      </footer>
    );
  }
}
