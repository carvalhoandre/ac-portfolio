import React, { Component } from 'react'
import './styles.css'

const initialState = {
    others: false,
    front: false,
    back: false
}

export default class About extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <>
                <section className="skills section" id="skills">
                    <h2 className="section_title">Skills</h2>
                    <span className="section_subtitle">My technical level</span>

                    <div className="skills_container container grid">
                        <div>
                            {/* skills one */}
                            <div className={`skills_content ${this.state.front === true ? 'skills_open' : 'skills_close'}`}>
                                <div className="skills_header">
                                    <i className="uil uil-brackets-curly skills_icon"></i>

                                    <div>
                                        <h1 className="skills_title">Frontend developer</h1>
                                    </div>

                                    <i
                                        className="uil uil-angle-down skills_arrow"
                                        onClick={(() => {
                                            this.state.front === true ? this.setState({ front: false }) : this.setState({ front: true })
                                        })}
                                    />

                                </div>

                                <div className="skills_list grid">
                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">HTML and CSS</h3>
                                            <span className="skills_number">90%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_html"></span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">React Native</h3>
                                            <span className="skills_number">85%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_react"></span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">React</h3>
                                            <span className="skills_number">85%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_react"></span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">JavaScript</h3>
                                            <span className="skills_number">80%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_js"></span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">TypeScript</h3>
                                            <span className="skills_number">75%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_type"></span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">Ionic</h3>
                                            <span className="skills_number">70%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_ionic"></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* skills two */}
                        <div className={`skills_content ${this.state.back === true ? 'skills_open' : 'skills_close'}`}>
                            <div className="skills_header">
                                <i className="uil uil-server-network skills_icon"></i>

                                <div>
                                    <h1 className="skills_title">Backend developer</h1>
                                </div>

                                <i
                                    className="uil uil-angle-down skills_arrow"
                                    onClick={(() => {
                                        this.state.back === true ? this.setState({ back: false }) : this.setState({ back: true })
                                    })}
                                />
                            </div>

                            <div className="skills_list grid">
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Java</h3>
                                        <span className="skills_number">80%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_java"></span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Node Js</h3>
                                        <span className="skills_number">60%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_node"></span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">PHP</h3>
                                        <span className="skills_number">55%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_php"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* skills 3 */}
                        <div>
                            <div className={`skills_content ${this.state.others === true ? 'skills_open' : 'skills_close'}`}>
                                <div className="skills_header">
                                    <i className="uil uil-swatchbook skills_icon"></i>

                                    <div>
                                        <h1 className="skills_title">Designer</h1>
                                    </div>
                                    <i
                                        className="uil uil-angle-down skills_arrow"
                                        onClick={(() => {
                                            this.state.others === true ? this.setState({ others: false }) : this.setState({ others: true })
                                        })}
                                    />
                                </div>

                                <div className="skills_list grid">
                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">Photoshop</h3>
                                            <span className="skills_number">80%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_photoshop"></span>
                                        </div>
                                    </div>

                                    <div className="skills_data">
                                        <div className="skills_titles">
                                            <h3 className="skills_name">Figma</h3>
                                            <span className="skills_number">60%</span>
                                        </div>
                                        <div className="skills_bar">
                                            <span className="skills_percentage skills_figma"></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}