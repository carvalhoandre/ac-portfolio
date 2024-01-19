import React, { Component } from "react";
import "./styles.css";

const initialState = {
  others: false,
  front: false,
  back: false,
};

export default class About extends Component {
  state = {
    ...initialState,
  };

  render() {
    return (
      <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>

        <ul className="skills_container container grid">
          <li>
            {/* skills one */}
            <div
              className={`skills_content ${
                this.state.front === true ? "skills_open" : "skills_close"
              }`}
            >
              <div className="skills_header">
                <i className="uil uil-brackets-curly skills_icon"></i>

                <div>
                  <h1 className="skills_title">Frontend Developer</h1>
                  <span className="skills_subtitle">More than 3 years</span>
                </div>

                <i
                  className="uil uil-angle-down skills_arrow"
                  onClick={() => {
                    this.state.front === true
                      ? this.setState({ front: false })
                      : this.setState({ front: true });
                  }}
                />
              </div>

              <ul className="skills_list grid">
                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">HTML and CSS</h3>
                    <span className="skills_number">95%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_html"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_js"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">TypeScript</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_type"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">React Native</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_react"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">React</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_react"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Jest</h3>
                    <span className="skills_number">80%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_jest"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Cypress</h3>
                    <span className="skills_number">80%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_cypress"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Ionic</h3>
                    <span className="skills_number">70%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_ionic"></span>
                  </div>
                </li>

                <li className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Angular</h3>
                    <span className="skills_number">70%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_angular"></span>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* skills two */}
          <li>
            <ul
              className={`skills_content ${
                this.state.others === true ? "skills_open" : "skills_close"
              }`}
            >
              <li className="skills_header">
                <i className="uil uil-swatchbook skills_icon"></i>

                <div>
                  <h1 className="skills_title">Designer</h1>
                </div>
                <i
                  className="uil uil-angle-down skills_arrow"
                  onClick={() => {
                    this.state.others === true
                      ? this.setState({ others: false })
                      : this.setState({ others: true });
                  }}
                />
              </li>

              <li className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Figma</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_figma"></span>
                  </div>
                </div>

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
                    <h3 className="skills_name">Illustrator</h3>
                    <span className="skills_number">60%</span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage skills_illustrator"></span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
}
