import React from "react";

// EmblaCarouselArrowButtons.jsx

export const PrevButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className=" text-black sm:text-[150px] text-[50px] sm:w-36 w-8 sm:h-36 h-8 rounded-full 
               flex items-center justify-center 
               hover:scale-110 transition disabled:opacity-50"
  >
    ‹
  </button>
);

export const NextButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className=" text-black sm:text-[150px] text-[50px] sm:w-36 w-8 sm:h-36 h-8 rounded-full 
               flex items-center justify-center 
               hover:scale-110 transition disabled:opacity-50"
  >
    ›
  </button>
);

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick: () => emblaApi && emblaApi.scrollPrev(),
    onNextButtonClick: () => emblaApi && emblaApi.scrollNext(),
  };
};
