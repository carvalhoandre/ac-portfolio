/* eslint-disable react/jsx-no-target-blank */
import './styles.css'
import Blob from '../../assets/blob.svg'

export default function HomeSection() {
    return (
        <>

            <section className="home" id="home">
                <div className="home_container container grid">
                    <div className="home_content grid">
                        <div className="home_social">
                            <a href="https://www.linkedin.com/in/carvalhoandree/" target="_blank" className="home_social-icon">
                                <i class="uil uil-linkedin-alt"></i>
                            </a>

                            <a href="https://github.com/carvalhoandre" target="_blank" className="home_social-icon">
                                <i class="uil uil-github-alt"></i>
                            </a>
                        </div>

                        <div className="home_img">
                            <img src={Blob} alt="back" className="home" />
                        </div>
                    </div>

                    <div className="home_data">
                        <h1 className="home_title">Hi, I'm André</h1>
                        <h3 className="home_subtitle">Frontend developer</h3>
                        <p className="home_descption">High level experience in web design and development knowledge,
                            producing quality work.</p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <i className="uil uil-message button_icon"></i>
                        </a>
                    </div>

                    <div className="home_scroll">
                        <a href="#about" className="home_scroll-button button--flex">
                            <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                            <span className="home_scroll-name">Scroll down</span>
                            <i className="uil uil-arrow-down home_scroll-arrow"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}