export type ISliderDotsProps = {
  currentSlide: number;
  itemsArray: Array<any>;
  setCurrentSlide: (value: React.SetStateAction<number>) => void;
};
