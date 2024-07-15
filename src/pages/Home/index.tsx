import { useState, useEffect } from "react";
import { isDarkTheme, setTheme } from "@utils/theme";

import Header from "@components/Header";

import IComponent from "@/@types";
import Emphasis from "@/components/Emphasis";

const Home: IComponent = ({ testId = "home" }) => {
  const [isDarkMode, setIsDarkMode] = useState(isDarkTheme());

  useEffect(() => {
    setTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <section className={isDarkMode ? "dark-theme" : ""} data-testid={testId}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <Emphasis />
    </section>
  );
};

export default Home;
