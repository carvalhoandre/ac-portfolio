import React, { Component } from 'react'
import './styles.css'

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
import ScrollTop from '../../components/ScrollTop'

import { getTheme } from '../../services/theme'


const initialState = {
    theme: getTheme()
}

export default class Home extends Component {

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