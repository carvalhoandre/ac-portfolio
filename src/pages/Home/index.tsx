import { useState, useEffect } from "react";

import IComponent from "@/@types";
import { isDarkTheme, setTheme } from "@utils/theme";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import {
  About,
  Skills,
  InMind,
  Contact,
  Emphasis,
  Portfolio,
  Qualifications,
} from "./components";

const Home: IComponent = ({ testId = "home" }) => {
  const [isDarkMode, setIsDarkMode] = useState(isDarkTheme());

  useEffect(() => {
    setTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div
        className={`page ${isDarkMode ? "dark-theme" : ""}`}
        data-testid={testId}
      >
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        <main>
          <Emphasis />

          <About />

          <Skills />

          <Qualifications />

          <InMind />

          <Portfolio />

          <Contact />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
