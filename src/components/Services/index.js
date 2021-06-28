import React, { Component } from 'react'
import './styles.css'

const initialState = {
    more: false
}

export default class Services extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <>
                <section className="services section" id="services">
                    <h2 className="section_title">Services</h2>
                    <span className="section_subtitle">What i offer</span>

                    <div className="services_container container grid">
                        {/* services one */}
                        <div className="services_content">
                            <div>
                                <i className="uil uil-web-grid services_icon" />
                                <h3 className="services_title">Ui/Ux <br /> Designer</h3>
                            </div>

                            <span
                                className="button button--flex button--small button--link services_button"
                                onClick={(() => {
                                    this.state.more === true ? this.setState({ more: false }) : this.setState({ more: true })
                                })}
                            >
                                View More
                                <i className="uil uil-arrow-right button_icon" />
                            </span>

                            <div className={`services_modal ${this.state.more === true ? 'active-modal' : ''}`}>
                                <div className="services_modal-content">
                                    <h4 className="services_modal">Ui/Ux <br /> Designer</h4>
                                    <i
                                        className="uil uil-times services_modal-close"
                                        onClick={(() => {
                                            this.state.more === true ? this.setState({ more: false }) : this.setState({ more: true })
                                        })}
                                    />
                                    <ul className="services_modal-services grid">
                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I develop the user interface.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>Web page development.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I create ux element interactions.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I position your company brand.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* services two */}
                        <div className="services_content">
                            <div>
                                <i className="uil uil-arrow services_icon" />
                                <h3 className="services_title">Frontend <br /> Developer</h3>
                            </div>

                            <span
                                className="button button--flex button--small button--link services_button"
                                onClick={(() => {
                                    this.state.more === true ? this.setState({ more: false }) : this.setState({ more: true })
                                })}
                            >
                                View More
                                <i className="uil uil-arrow-right button_icon" />
                            </span>

                            <div className={`services_modal ${this.state.more === true ? 'active-modal' : ''}`}>
                                <div className="services_modal-content">
                                    <h4 className="services_modal">Frontend <br /> Developer</h4>
                                    <i
                                        className="uil uil-times services_modal-close"
                                        onClick={(() => {
                                            this.state.more === true ? this.setState({ more: false }) : this.setState({ more: true })
                                        })}
                                    />

                                    <ul className="services_modal-services grid">
                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I develop the user interface.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>Web page development.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I create ux element interactions.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I position your company brand.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* services three */}
                        <div className="services_content">
                            <div>
                                <i className="uil uil-pen services_icon" />
                                <h3 className="services_title">Branding <br /> Designer</h3>
                            </div>

                            <span
                                className="button button--flex button--small button--link services_button"
                                onClick={(() => {
                                    this.state.more === true ? this.setState({ more: false }) : this.setState({ more: true })
                                })}
                            >
                                View More
                                <i className="uil uil-arrow-right button_icon" />
                            </span>

                            <div className={`services_modal ${this.state.more === true ? 'active-modal' : ''}`}>
                                <div className="services_modal-content">
                                    <h4 className="services_modal-title">Branding <br /> Designer</h4>
                                    <i
                                        className="uil uil-times services_modal-close"
                                        onClick={(() => {
                                            this.state.more === true ? this.setState({ more: false }) : this.setState({ more: true })
                                        })}
                                    />

                                    <ul className="services_modal-services grid">
                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I develop the user interface.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>Web page development.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I create ux element interactions.</p>
                                        </li>

                                        <li className="services_modal-service">
                                            <i className="uil uil-check-circle services_modal-icon" />
                                            <p>I position your company brand.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}