/* eslint-disable react/jsx-no-target-blank */
import './styles.css'
import Blob from '../../assets/perfil.png'

export default function HomeSection() {
    return (
        <>

            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home_content grid">
                        <div className="home_social">
                            <a href="https://www.linkedin.com/in/carvalhoandree/" target="_blank" className="home_social-icon">
                                <i className="uil uil-linkedin-alt" />
                            </a>

                            <a href="https://github.com/carvalhoandre" target="_blank" className="home_social-icon">
                                <i className="uil uil-github-alt" />
                            </a>

                            <a href="https://dribbble.com/andre_carvalho" target="_blank" className="home_social-icon">
                                <i className="uil uil-dribbble" />
                            </a>
                        </div>

                        <div className="home_img">
                            <img src={Blob} alt="back" className="home home_perfil" />
                        </div>
                    </div>

                    <div className="home_data">
                        <h1 className="home_title">Hi there! I'm André</h1>
                        <h3 className="home_subtitle">Mobile and Frontend developer</h3>
                        <p className="home_descption">Forever producing quality work.</p>
                        <a href="#contactme" className="button button--flex">
                            Contact Me <i className="uil uil-message button_icon"></i>
                        </a>
                    </div>

                    <div className="home_scroll">
                        <a href="#about" className="home_scroll-button button--flex">
                            <i className="uil uil-mouse-alt home_scroll-mouse" />
                            <span className="home_scroll-name">Scroll down</span>
                            <i className="uil uil-arrow-down home_scroll-arrow" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}