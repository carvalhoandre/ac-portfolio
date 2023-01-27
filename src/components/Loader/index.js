import { ClockLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loader">
      <ClockLoader size={100} color={"#5022c3"} />
    </div>
  );
}

export default Loader;
