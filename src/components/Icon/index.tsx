import { useEffect, useState } from "react";

import IComponent from "@/@types";
import { IIconProps } from "./types";

import "./styles.css";

const Icon: IComponent<IIconProps> = ({
  testId = "icon",
  id,
  icon,
  className = "",
  onClick,
}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);

  return (
    <div
      className={`icon-wrapper ${fontLoaded ? "loaded" : "loading"}`}
      data-testid={testId}
    >
      <i
        id={id}
        data-testid={`${testId}-${icon}`}
        className={`uil uil-${icon} ${className} icon-i`}
        onClick={onClick}
      />
    </div>
  );
};

export { Icon };
