import { ClockLoader } from "react-spinners";
import IComponent from "@/@types";

import "./styles.css";

const Loader: IComponent = ({ testId = "loader" }) => {
  return (
    <div
      className="loader"
      aria-labelledby="label-loading"
      data-testid={testId}
    >
      <ClockLoader size={100} color="hsl(0%, 0%, 7%)" />
    </div>
  );
};

export { Loader };
