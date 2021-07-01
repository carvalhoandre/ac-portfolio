import React, { Component } from 'react'
import './styles.css'

import { withRouter } from "react-router-dom"

import Header from '../../components/Header'
import HomeSection from '../../components/HomeSection'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Qualification from '../../components/Qualification'
import Services from '../../components/Services'
import Portfolio from '../../components/Portfolio'
import InMind from '../../components/InMind'
import Testimonial from '../../components/Testimonial'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

import { getTheme } from '../../services/theme'


const initialState = {
    theme: getTheme()
}

class Home extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <>
                <body className={`${this.state.theme === 'light' ? '' : 'dark-theme'}`}>
                    <Header />
                    <main className="main">
                        <HomeSection />
                        <About />
                        <Skills />
                        <Qualification />
                        <Services />
                        <Portfolio />
                        <InMind />
                        <Testimonial />
                        <Contact />
                    </main>
                </body>
                <Footer />
            </>
        )
    }
}

export default withRouter(Home);