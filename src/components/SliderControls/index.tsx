import IComponent from "@/@types";
import { ISliderControlsProps } from "./types";

import { Icon } from "@components/Icon";

const SliderControls: IComponent<ISliderControlsProps> = ({
  testId = "slider-controls",
  handleNextSlide,
  handlePrevSlide,
}) => {
  return (
    <div className="slider_controls" data-testid={testId}>
      <button
        className="prev_button"
        onClick={handlePrevSlide}
        aria-label="Previous slide"
      >
        <Icon icon="angle-left" className="arrow_icon" />
      </button>

      <button
        className="next_button"
        onClick={handleNextSlide}
        aria-label="Next slide"
      >
        <Icon icon="angle-right" className="arrow_icon" />
      </button>
    </div>
  );
};

export { SliderControls };
