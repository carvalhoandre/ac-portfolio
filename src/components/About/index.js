import './styles.css'
import Image from '../../assets/about.jpg'
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
                            Web developer, with extensive knowledge and years of experience,
                            working in web, technoloies and Ui / Ux design, delivering quality work.
                        </p>

                        <div className="about_info">
                            <div>
                                <span className="about_info-title">08+</span>
                                <span className="about_info-name">Years <br /> experience</span>
                            </div>

                            <div>
                                <span className="about_info-title">20+</span>
                                <span className="about_info-name">Completed <br /> project</span>
                            </div>

                            <div>
                                <span className="about_info-title">05+</span>
                                <span className="about_info-name">Companies <br /> worked</span>
                            </div>
                        </div>

                        <div className="about_buttons">
                            <a download="" href={Curriculum} alt="curriculum" className="button button--flex">
                                Download CV<i class="uil uil-arrow-to-bottom button_icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}