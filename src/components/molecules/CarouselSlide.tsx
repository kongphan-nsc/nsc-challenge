import React from "react";
import Text from "@/components/atoms/Text";

type CarouselSlideProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="relative h-96 w-full text-white flex items-center justify-center text-center p-8 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
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
