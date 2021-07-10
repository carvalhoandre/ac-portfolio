import React, { useState } from 'react'
import './styles.css'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import { withRouter } from 'react-router-dom'
import ClockLoader from "react-spinners/ClockLoader";
import * as yup from 'yup'
import { setLocale } from 'yup';
import { toast } from 'react-toastify';

import { message } from '../../services/api'

setLocale({
    mixed: {
        required: 'Campo obrigatório',
    },
    string: {
        email: "Formato de e-mail enválido",
    },
});

function Contact() {

    const [loading, setLoading] = useState(false);

    const handleSubimit = data => {
        setLoading(true)
        message(data)
            .then((response) => {
                console.log(response)
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
            <div>
                {loading ? (
                    <div className="loader">
                        <ClockLoader size={50} color={'#hsl(var(--hue-color), 69%, 61%)'} loading={loading} />
                    </div>
                ) : (
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
                                                href="mailto:andre_cavalho0@live.com?Subject=Olá André"
                                                target="_new"
                                                rel="external"
                                                className="contact_email"
                                            >
                                                andre_cavalho0@live.com
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
                            >
                                <Form className="contact_form grid">
                                    <div className="contact_inputs grid">
                                        <div className="contact_content">
                                            <label for={null} className="contact_label">Name</label>
                                            <Field
                                                name="name"
                                                className="contact_input"
                                            />
                                            <ErrorMessage
                                                component="span"
                                                name="name"
                                                className="form-error"
                                            />
                                        </div>
                                    </div>
                                    <div className="contact_content">
                                        <label for={null} className="contact_label">Email</label>
                                        <Field
                                            name="email"
                                            className="contact_input"
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="email"
                                            className="form-error"
                                        />
                                    </div>
                                    <div className="contact_content">
                                        <label for={null} className="contact_label">Project</label>
                                        <Field
                                            name="project"
                                            className="contact_input"
                                        />
                                    </div>
                                    <div className="contact_content">
                                        <label for={null} className="contact_label">Message</label>
                                        <Field
                                            name="message"
                                            className="contact_input"
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="button button--flex button_send">
                                            Send Message
                                            <i className="uil uil-message button_icon" />
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </section>
                )}
            </div>
        </>
    )
}

export default withRouter(Contact);