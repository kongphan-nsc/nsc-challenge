import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css";

type CarouselProps = {
  slides: React.ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
