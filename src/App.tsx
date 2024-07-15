import { getTheme } from "@utils/theme";

import "./App.css";
import Header from "@components/Header";

const App = () => {
  const currentTheme = getTheme();

  return (
    <section className={`${currentTheme === "light" ? "" : "dark-theme"}`}>
      <Header />
    </section>
  );
};

export default App;
