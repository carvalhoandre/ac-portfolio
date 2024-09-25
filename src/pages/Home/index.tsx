import { useState, useEffect } from "react";

import IComponent from "@/@types";
import { isDarkTheme, setTheme } from "@utils/theme";

import Header from "@components/Header";
import {
  About,
  Emphasis,
  Qualifications,
  Skills,
  InMind,
  Services,
  Portfolio,
  Testimonial,
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
    <body className={isDarkMode ? "dark-theme" : ""} data-testid={testId}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <Emphasis />

      <About />

      <Skills />

      <Qualifications />

      <InMind />

      <Services />

      <Portfolio />

      <Testimonial />
    </body>
  );
};

export default Home;
