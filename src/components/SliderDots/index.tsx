import IComponent from "@/@types";
import { ISliderDotsProps } from "./types";

const SliderDots: IComponent<ISliderDotsProps> = ({
  testId = "slider-dots",
  itemsArray,
  currentSlide,
  setCurrentSlide,
}) => {
  return (
    <div className="dots_container" data-testid={testId}>
      {itemsArray.map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentSlide ? "active-dot" : ""}`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  );
};

export default SliderDots;
