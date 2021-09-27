import React, { Component } from 'react'
import './styles.css'

const initialState = {
    work: false,
    education: false,
}

export default class Qualification extends Component {


    state = {
        ...initialState
    }

    render() {
        return (
            <>
                <section className="qualification section" id="qualification">
                    <h2 className="section_title">Qualification</h2>
                    <span className="section_subtitle">My personal journey</span>

                    <div className="qualification_container container">
                        <div className="qualification_tabs">
                            <div
                                className={`qualification_button ${this.state.education === true ? 'qualification_button_active' : ''}`}
                                onClick={(() => {
                                    console.log('education = true')
                                    this.state.education === true ? this.setState({ education: false }) :
                                        this.setState({ education: true })
                                })}
                            >
                                <i className="uil uil-graduation-cap qualification_icon" />
                                Education
                            </div>

                            <div
                                className={`qualification_button ${this.state.work === true ? 'qualification_button_active' : ''}`}
                                onClick={(() => {
                                    console.log('work click')
                                    this.state.work === true ? this.setState({ work: false }) :
                                        this.setState({ work: true })
                                })}
                            >
                                <i className="uil uil-briefcase-alt qualification_icon" />
                                Work
                            </div>
                        </div>

                        <div className="qualification_sections">
                            {/* qualification content one */}
                            <div className={`qualification_content ${this.state.education !== false ? 'qualification_active' : ''}`} data-content id="education">
                                {/* qualification one */}
                                <div className="qualification_data">
                                    <div>
                                        <h3 className="qualification_title">Computer Science</h3>
                                        <span className="qualification_subtitle">Universidade Nove de Julho - UNINOVE</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            Current
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>
                                </div>

                                {/* qualification two */}
                                <div className="qualification_data">
                                    <div></div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification_title">React Native Development</h3>
                                        <span className="qualification_subtitle">Cod3r</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            2021
                                        </div>
                                    </div>
                                </div>



                                {/* qualification three */}
                                <div className="qualification_data">

                                    <div>
                                        <h3 className="qualification_title">Java Development</h3>
                                        <span className="qualification_subtitle">Dev Superior</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            2020 - 2021
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>

                                </div>

                                {/* qualification five */}
                                <div className="qualification_data">
                                    <div></div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification_title">Scrum Certificate</h3>
                                        <span className="qualification_subtitle">CertiProf</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            2021
                                        </div>
                                    </div>
                                </div>

                                {/* qualification six */}
                                <div className="qualification_data">

                                    <div>
                                        <h3 className="qualification_title">Interface design</h3>
                                        <span className="qualification_subtitle">Udemy - André Bernardes</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            2021
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>

                                </div>

                            </div>

                            {/* qualification content two */}
                            <div className={`qualification_content ${this.state.work !== false ? 'qualification_active' : ''}`}
                                data-content id="work">
                                {/* qualification one */}
                                <div className="qualification_data">
                                    <div>
                                        <h3 className="qualification_title">Service Desk Analyst </h3>
                                        <span className="qualification_text">Internship</span>
                                        <span className="qualification_subtitle">Proative Technology</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            Jan 2020 - Jan 2021
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>
                                </div>

                                {/* qualification two */}
                                <div className="qualification_data">
                                    <div></div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification_title">DevOps</h3>
                                        <span className="qualification_text">Internship</span>
                                        <span className="qualification_subtitle">Proative Technology</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            Jan 2021 - Aug 2021
                                        </div>
                                    </div>
                                </div>

                                {/* qualification one */}
                                <div className="qualification_data">
                                    <div>
                                        <h3 className="qualification_title">Front-end Jr</h3>
                                        <span className="qualification_text">Full-time</span>
                                        <span className="qualification_subtitle">Proative Technology</span>
                                        <div className="qualification_calendar">
                                            <i className="uil uil-calendar-alt icon-calendar" />
                                            Current
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
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