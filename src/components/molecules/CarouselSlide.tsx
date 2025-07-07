import React from "react";
import Text from "@/components/atoms/Text";
import Image from "@/components/atoms/Image";
import { urlFor } from "@/sanity/client";
import type { Image as SanityImage } from "@sanity/types";

type CarouselSlideProps = {
  title: string;
  description: string;
  image: SanityImage;
};

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="relative h-96 w-full text-white flex items-center justify-center text-center p-8 rounded-lg overflow-hidden">
      <Image
        src={urlFor(image).width(1200).format("webp").quality(85).url()}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10">
        <Text as="h2" className="mb-4">
          {title}
        </Text>
        <Text as="p">{description}</Text>
      </div>
    </div>
  );
};

export default CarouselSlide;
