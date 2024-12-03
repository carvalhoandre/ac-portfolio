import IComponent from "@/@types";
import { IErrorProps } from "./types";

import "./styles.css";

const Error: IComponent<IErrorProps> = ({ error }) => {
  if (!error) return null;

  return <p className="error">{error}</p>;
};

export { Error };
