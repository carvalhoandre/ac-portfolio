/* eslint-disable react/jsx-no-target-blank */
import './styles.css'

import Header from '../../components/Header'
import HomeSection from '../../components/HomeSection'
import About from '../../components/About'

export default function Home() {
    return (
        <>
            <Header />

            <main className="main">
                
                <HomeSection />

                <About />

            </main>
        </>
    )
}