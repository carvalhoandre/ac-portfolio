import React, { Component } from "react";
import "./styles.css";

import LogoWhite from "../../assets/logo/white.svg";
import LogoBlack from "../../assets/logo/black.svg";

import { getTheme, setTheme } from "../../services/theme";

const initialState = {
  nav: false,
  theme: getTheme(),
};

export default class Header extends Component {
  state = {
    ...initialState,
  };

  isDark = this.state.theme === "dark";

  render() {
    return (
      <header className="header" id="header">
        <nav className="nav" aria-label="primary">
          <div
            className={`nav_menu ${
              this.state.nav === true ? "show-menu" : "close-menu"
            }`}
            id="nav-menu"
          >
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className={`uil uil-estate nav_icon`} />
                  Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className={`uil uil-user nav_icon`} />
                  About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className={`uil uil-file-alt nav_icon`} />
                  Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className={`uil uil-bag nav_icon`} />
                  Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className={`uil uil-scenery nav_icon`} />
                  Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#contactme" className="nav_link">
                  <i className={`uil uil-message nav_icon`} />
                  Get in Touch
                </a>
              </li>
            </ul>
            <div>
              <i
                className="uil uil-times nav_close nav_icon"
                onClick={() => this.setState({ nav: false })}
              />
            </div>
          </div>

          <div
            className={`nav_header ${
              this.state.nav === true ? "close-menu" : "show-menu"
            }`}
            id="nav-menu"
          >
            <a href="/" className="nav_logo">
              {this.isDark ? (
                <img src={LogoWhite} alt="logo" className="logo-ac" />
              ) : (
                <img src={LogoBlack} alt="logo" className="logo-ac" />
              )}
            </a>

            <div className="nav_btns">
              {/* theme change button */}
              <i
                className={`change-theme uil uil-${
                  this.isDark ? "sun" : "moon"
                }`}
                id="theme-button"
                onClick={() => {
                  this.isDark ? setTheme("light") : setTheme("dark");
                  window.location.reload();
                }}
              />
              <div className="nav_toggle nav_icon" id="nav-toggle">
                <i
                  className="uil uil-ellipsis-v"
                  onClick={() => this.setState({ nav: true })}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
