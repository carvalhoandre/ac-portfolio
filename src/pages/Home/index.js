import React, { useState } from 'react'
import './styles.css'

import { withRouter } from "react-router-dom"

import Header from '../../components/Header'
import HomeSection from '../../components/HomeSection'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Qualification from '../../components/Qualification'
import Services from '../../components/Services'
import Portfolio from '../../components/Portfolio'
import Footer from '../../components/Footer'

import { getTheme } from '../../services/theme'

/* contact */
import { ErrorMessage, Formik, Form, Field } from 'formik'
import ClockLoader from "react-spinners/ClockLoader";
import * as yup from 'yup'
import { toast } from 'react-toastify';

import { message } from '../../services/api'


function Home() {

    const [loading, setLoading] = useState(false);

    const [theme] = useState(getTheme())

    const handleSubimit = data => {
        setLoading(true)
        message(data)
            .then((response) => {
                setLoading(false)
                toast('😁 Thanks! Check your email!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                });
            },
                error => {
                    setLoading(false)
                    toast.error('Unable to connect to server, please try again later', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0,
                    })
                })
    }

    const validations = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
    })

    return (
        <>
            {loading ? (
                <div className="loader">
                    <ClockLoader size={100} color={'#5022c3'} loading={loading} />
                    <h3 className="home_subtitle">One minute please, enving email...</h3>
                </div>
            ) : (
                <>
                    <body className={`${theme === 'light' ? '' : 'dark-theme'}`}>
                        <Header />
                        <main className="main">
                            <HomeSection />
                            <About />
                            <Skills />
                            <Qualification />
                            <Services />
                            <Portfolio />


                            <section className="contact section" id="contactme">
                                <h2 className="section_title">Contact Me</h2>
                                <span className="section_subtitle">Get in touch</span>

                                <div className="contact_container container grid">
                                    <div>
                                        <div className="contact_information">
                                            <i className="uil uil-phone contact_icon" />

                                            <div>
                                                <h3 className="contact_title">Call Me</h3>
                                                <span className="contact_subtitle">11 94924-5875</span>
                                            </div>
                                        </div>

                                        <div className="contact_information">
                                            <i className="uil uil-envelope contact_icon" />

                                            <div>
                                                <h3 className="contact_title">Email</h3>
                                                <span className="contact_subtitle">
                                                    <a
                                                        href="mailto:cavalho.devel@gmail.com?Subject=Olá André"
                                                        target="_new"
                                                        rel="external"
                                                        className="contact_email"
                                                    >
                                                        cavalho.devel@gmail.com
                                                    </a>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="contact_information">
                                            <i className="uil uil-map-marker contact_icon" />

                                            <div>
                                                <h3 className="contact_title">Location</h3>
                                                <span className="contact_subtitle">Brazil - São Paulo</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Formik
                                        initialValues={{}}
                                        onSubmit={handleSubimit}
                                        validationSchema={validations}
                                        enableReinitialize
                                    >
                                        {({ isValid, dirty }) => (
                                            <Form className="contact_form grid">
                                                <div className="contact_inputs grid">
                                                    <div className="contact_content">
                                                        <Field
                                                            name="name"
                                                            className="contact_input"
                                                        />
                                                        <label className="contact_label">Name</label>
                                                    </div>
                                                </div>
                                                <ErrorMessage
                                                    component="span"
                                                    name="name"
                                                    className="form-error"
                                                />
                                                <div className="contact_content">
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        id="email"
                                                        className="contact_input"
                                                    />
                                                    <label className="contact_label">Email</label>
                                                </div>
                                                <ErrorMessage
                                                    component="span"
                                                    name="email"
                                                    className="form-error"
                                                />
                                                <div className="contact_content">
                                                    <Field
                                                        name="project"
                                                        id="project"
                                                        type="text"
                                                        className="contact_input"
                                                    />
                                                    <label className="contact_label">Project</label>
                                                </div>
                                                <div className="contact_content ">
                                                    <Field
                                                        name="message"
                                                        type="text"
                                                        id="message"
                                                        className="contact_input"
                                                    />
                                                    <label className="contact_label message">Message</label>
                                                </div>
                                                <div>
                                                    <button
                                                        variant="info"
                                                        fill
                                                        wd
                                                        type="submit"
                                                        className="button button--flex button_send"
                                                        disabled={!(dirty && isValid)}
                                                    >
                                                        Send Message
                                                        <i className="uil uil-message button_icon" />
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </section>
                        </main>
                    </body>
                    <Footer />
                </>
            )}
        </>
    )
}


export default withRouter(Home);