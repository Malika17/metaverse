import React from "react";

export const DotButton = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={`${className} w-3 h-3 rounded-full`}
    type="button"
  />
);

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const onDotButtonClick = (index) => emblaApi && emblaApi.scrollTo(index);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
