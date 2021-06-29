import React, { Component } from 'react'
import './styles.css'

const initialState = {
    nav: false,
    id: null
}

export default class Header extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <>
                {this.state.nav === true ? (
                    <header className="header" id="header">
                        <nav className="nav container">

                            <div className={`nav_menu ${this.state.nav === true ? 'show-menu' : ''}`} id="nav-menu">
                                <ul className="nav_list grid" onClick={() => this.setState({ nav: false })}>
                                    <li className="nav_item">
                                        <a href="#home" className="nav_link">
                                            <i
                                                className={`uil uil-estate nav_icon ${this.state.id === 'home' ? 'active-link' : ''}`}
                                            />
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#about" className="nav_link">
                                            <i
                                                className={`uil uil-user nav_icon ${this.state.id === 'about' ? 'active-link' : ''}`}
                                            />
                                            About
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#skills" className="nav_link">
                                            <i
                                                className={`uil uil-file-alt nav_icon ${this.state.id === 'skills' ? 'active-link' : ''}`}
                                            />
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#services" className="nav_link">
                                            <i
                                                className={`uil uil-bag nav_icon ${this.state.id === 'services' ? 'active-link' : ''}`}
                                            />
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#portfolio" className="nav_link">
                                            <i
                                                className={`uil uil-scenery nav_icon ${this.state.id === 'portfolio' ? 'active-link' : ''}`}
                                            />
                                            Portfolio
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#contactme" className="nav_link">
                                            <i
                                                className={`uil uil-message nav_icon ${this.state.id === 'contactme' ? 'active-link' : ''}`}
                                            />
                                            Contactme
                                        </a>
                                    </li>
                                </ul>
                                <div onClick={() => this.setState({ nav: false })}>
                                    <i className="uil uil-times nav_close nav_icon" id="nav-close"></i>
                                </div>
                            </div>

                        </nav>
                    </header>
                ) : (
                    <header className="header" id="header">
                        <nav className="nav container">
                            <div className={`nav_header ${this.state.nav === true ? 'close-menu' : 'show-menu'}`} id="nav-menu">
                                <a href="/" className="nav_logo">André</a>
                                <div className="nav_btns" onClick={() => this.setState({ nav: true })}>
                                    <div className="nav_toggle nav_icon" id="nav-toggle">
                                        <i className="uil uil-apps"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                )}
            </>
        )
    }
}