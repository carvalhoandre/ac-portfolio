import React, { useState } from "react";
import "./styles.css";

import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
import HomeSection from "../../components/HomeSection";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Qualification from "../../components/Qualification";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Footer from "../../components/Footer";
import InMind from "../../components/InMind";
import Contact from "../../components/Contact";
import Loader from "../../components/Loader";

import { getTheme } from "../../services/theme";

function Home() {
  const [loading, setLoading] = useState(false);

  const [theme] = useState(getTheme());

  return (
    <body className={`${theme === "light" ? "" : "dark-theme"}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <main className="main">
            <HomeSection />
            <About />
            <Skills />
            <Qualification />
            <InMind />
            <Services />
            <Portfolio />

            <Contact setLoading={setLoading} />
          </main>

          <Footer />
        </>
      )}
    </body>
  );
}

export default withRouter(Home);
