import React from "react";

import IComponent from "@/@types";

import "./styles.css";

const Loader: IComponent = ({ testId = "loader" }) => {
  const [step, setStep] = React.useState(0);

  const displayStep = (i: number) => {
    return { display: step === i ? "block" : "none" };
  };

  React.useEffect(() => {
    const updateStep = () => {
      setStep((step) => {
        if (step < 2) return step + 1;

        return 0;
      });
    };

    const interval = setInterval(updateStep, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="wrapper"
      aria-labelledby="label-loading"
      data-testid={testId}
    >
      <div className="loading">
        <svg
          width="63"
          height="64"
          viewBox="0 0 43 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={displayStep(1)}>
            <path
              d="M17.987 19.3851L11.4793 29.9065L21.3071 30.0777M17.987 19.3851L21.3144 14.0347L30.4979 30.2378L24.2645 30.1292L17.987 19.3851Z"
              stroke="#333"
              strokeWidth="2"
            />
          </g>

          <g style={displayStep(2)}>
            <path
              d="M33.426 10.4345L33.0173 8.06352L32.1286 9.18081L31.7936 6.97074L30.8341 8.27068L30.5355 6.30081L29.6576 7.49016L29.3736 5.61637L28.4141 6.91636L28.1446 5.13867L27.2871 6.30035L27.0395 4.6668L25.9656 5.86122L25.7107 4.17962L24.8007 5.64413L23.8897 3.6931L23.2867 5.23409L21.8216 3.68626L20.9043 5.10274L20.2179 3.65838L19.5761 5.10692L18.7285 3.73607L18.1809 5.31784L17.0686 3.98699L17.1515 5.67002L15.4065 4.38567L15.6359 5.89912L14.1956 4.83902L14.425 6.35246L13.0401 5.33314L13.2914 6.99072L11.9342 5.99178L12.1709 7.55327L10.8967 6.6155L11.1225 8.10492L9.95918 7.24869L10.2068 8.88224L9.04348 8.02601L9.31295 9.8037L8.03298 8.98968L8.29517 10.7193L7.11871 9.9388L7.40275 11.8126L6.03891 11.257L6.63568 13.0835L4.94156 12.9464L5.71258 14.6237L4.14239 14.4925L5.18609 15.8582L3.47806 16.1164L4.72448 17.0338L3.13674 17.2738C3.60908 17.5219 4.45754 18.0325 4.45754 18.0325L2.79762 18.2834L4.25614 19.4636L2.53056 20.0931L3.87101 21.1437L2.40343 22.1765L4.11135 22.7292L2.67655 23.9782L4.19642 24.2645L2.89868 25.4436L4.4404 25.874L3.18636 27.3414L4.84329 27.5578L3.86336 28.8855L5.37894 28.6564L4.25831 30.0299L5.822 29.7935L4.76041 31.2318L6.63683 30.9481L5.73558 32.6325L7.37144 32.3852L6.76472 33.9022L8.59303 33.6258L8.16486 35.5089L9.91085 34.8518L9.46083 36.5909L11.0406 35.8114L10.8253 37.6378L12.188 36.3998L12.0762 38.2597L13.4716 37.2378L13.3933 38.9944L14.8427 37.8415L15.1195 39.6672L16.1606 38.2566L16.6189 39.9812L17.6061 38.7016L18.5193 40.5048L19.4016 39.0199L20.3949 40.5408L21.3975 39.0377L22.6314 40.5222L23.0661 39.0066L24.2914 40.2712L24.4855 38.7921L26.1197 39.9949L25.872 38.3613L27.3955 39.4826L27.1478 37.849L28.6712 38.9703L28.4309 37.3847L29.7605 38.3633L29.5383 36.8979L30.8124 37.8357L30.5466 36.082L32.5227 36.6188L32.1235 34.959L34.0429 35.2832L33.5401 33.5899L35.3873 33.925L34.5229 32.6059L36.3753 32.3259L35.2251 31.3939L37.294 31.0812L36.0475 30.1638L37.8277 29.8947L36.6593 28.8427L38.4636 28.5699L37.1618 27.6118L38.9201 27.1985L37.5017 26.2826L39.2907 25.4224L37.8627 24.6061L39.5264 23.5683L37.968 22.3786L39.5858 21.2003L37.9114 20.5442L39.2799 19.1824L37.6092 18.5503L38.8333 17.2103L37.4307 17.3732L38.5127 15.9072L36.8769 16.1545L37.9997 14.6332L36.3879 14.8769L37.1988 13.0833L35.6351 13.3197L36.2032 11.7103L34.7838 11.9248L35.0436 10.0671L33.426 10.4345ZM33.426 10.4345L34.3724 9.21023"
              stroke="#333"
              strokeWidth="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export { Loader };
