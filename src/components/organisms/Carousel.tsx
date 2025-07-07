import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType } from "embla-carousel";
import "./carousel.css";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
      <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-200 ${
              index === selectedIndex ? "bg-background" : "bg-skeleton"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// Sub-components for controls
const DotButton: React.FC<{ onClick: () => void; className: string }> = ({
  onClick,
  className,
}) => <div onClick={onClick} className={className} />;

const PrevButton: React.FC<{ onClick: () => void; disabled: boolean }> = ({
  onClick,
  disabled,
}) => (
  <button
    className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center disabled:opacity-50"
    onClick={onClick}
    disabled={disabled}>
    &#x2190;
  </button>
);

const NextButton: React.FC<{ onClick: () => void; disabled: boolean }> = ({
  onClick,
  disabled,
}) => (
  <button
    className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center disabled:opacity-50"
    onClick={onClick}
    disabled={disabled}>
    &#x2192;
  </button>
);
