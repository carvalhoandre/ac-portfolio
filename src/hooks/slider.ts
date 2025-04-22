import { useEffect, useState, useCallback } from "react";

const MIN_SWIPE_DISTANCE = 50;
const TEN_SECONDS = 10000;

interface UseSliderProps {
  itemsLength: number;
}

export const useSlider = ({ itemsLength }: UseSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? itemsLength - 1 : prevSlide - 1,
    );
  }, [itemsLength]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === itemsLength - 1 ? 0 : prevSlide + 1,
    );
  }, [itemsLength]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > MIN_SWIPE_DISTANCE) {
      handleNextSlide();
    } else if (distance < -MIN_SWIPE_DISTANCE) {
      handlePrevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevSlide();
    } else if (e.key === "ArrowRight") {
      handleNextSlide();
    }
  }, [handlePrevSlide, handleNextSlide]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, TEN_SECONDS);

    return () => clearInterval(interval);
  }, [itemsLength, handleNextSlide, isPaused]);

  return {
    currentSlide,
    handlePrevSlide,
    handleNextSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setCurrentSlide,
    handleMouseEnter,
    handleMouseLeave,
  };
};
