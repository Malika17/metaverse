import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback(() => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector(".embla__slide__tween"));
  }, [emblaApi]);

  const setTweenFactor = useCallback(() => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, [emblaApi]);

  const tweenScale = useCallback(
    (eventName) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes();
    setTweenFactor();
    tweenScale("scroll");

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

  return (
    <div className="overflow-hidden w-screen h-screen relative bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              className="embla__slide min-w-0 flex-[0_0_100%] flex justify-center items-center px-1"
              key={index}
            >
              <div className="embla__slide__tween transition-transform duration-[900ms] ease-out flex flex-col md:flex-row items-center justify-center w-full max-w-[90rem] gap-6 px-4 text-center">
                {/* Mobile Heading (Above Image) */}
                <p className="block md:hidden text-xl font-semibold text-black font-poppins leading-snug">
                  {slide.leftText}
                </p>

                {/* Phone Image */}
                <div className="w-[70vw] max-w-[300px] md:max-w-[400px] aspect-[9/16] overflow-hidden rounded-2xl bg-white border-white">
                  <div className="sm:w-[350px]  aspect-[11/20] sm:h-[700px] rounded-[3rem] sm:rounded-[3.5em] overflow-hidden bg-white">
                    <img
                      src={slide.imageSrc}
                      alt={`Slide ${index + 1}`}
                      className="sm:object-contain object-co w-full h-full rounded-2xl overflow-hidden"
                    />
                  </div>
                </div>

                {/* Desktop Text Block */}
                <div className="hidden md:flex flex-col w-1/2 text-left pl-4">
                  <p className="text-2xl sm:m-2 sm:p-6 md:text-6xl font-semibold text-black font-poppins ">
                    {slide.leftText}
                  </p>
                  <p className="text-xl sm:m-2 sm:p-6 md:text-3xl font-normal text-black font-poppins mt-2">
                    {slide.rightText}
                  </p>
                </div>

                {/* Mobile Caption (Below Image) */}
                <p className="block md:hidden text-lg text-black font-poppins leading-snug">
                  {slide.rightText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <div className="absolute top-[35vh] sm:top-3/4 left-0 right-0 sm:px-12 px-3 flex justify-between items-center transform -translate-y-1/2 z-10">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
