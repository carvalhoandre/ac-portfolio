import './styles.css'
import Image from '../../assets/about.png'
import Curriculum from '../../assets/CVAndreLeiteCarvalho.pdf';

export default function About() {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section_title">About Me</h2>
                <span className="section_subtitle">My introduction</span>

                <div className="about_container container grid">
                    <img src={Image} alt="profile" className="about_img" />

                    <div className="about_data">
                        <p className="about_description">
                            Web developer, working in web, technologies and Ui / Ux design, delivering quality work.
                        </p>

                        <div className="about_info">
                            <div>
                                <span className="about_info-title">02+</span>
                                <span className="about_info-name">Years <br /> experience</span>
                            </div>

                            <div>
                                <span className="about_info-title">08+</span>
                                <span className="about_info-name">Completed <br /> project</span>
                            </div>

                            <div>
                                <span className="about_info-title">02+</span>
                                <span className="about_info-name">Companies <br /> worked</span>
                            </div>
                        </div>

                        <div className="about_buttons">
                            <a href={Curriculum} download alt="curriculum" className="button button--flex">
                                Download CV<i className="uil uil-arrow-to-bottom button_icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
