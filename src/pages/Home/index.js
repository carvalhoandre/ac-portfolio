/* eslint-disable react/jsx-no-target-blank */
import './styles.css'

import Header from '../../components/Header'
import HomeSection from '../../components/HomeSection'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Qualification from '../../components/Qualification'
import Services from '../../components/Services'
import Portfolio from '../../components/Portfolio'

export default function Home() {
    return (
        <>
            <Header />

            <main className="main">
                
                <HomeSection />

                <About />

                <Skills />

                <Qualification />

                <Services />

                <Portfolio />

            </main>
        </>
    )
}