import React from "react";
import Image from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import { urlFor } from "@/sanity/client";
import type { Image as SanityImage } from "@sanity/types";

type ImageAndTextProps = {
  image: SanityImage;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  onCtaClick?: () => void;
};

const ImageAndTextComponent: React.FC<ImageAndTextProps> = ({
  image,
  title,
  description,
  imagePosition = "left",
  ctaText,
  onCtaClick,
}) => {
  const imageEl = (
    <Image
      src={urlFor(image)
        .width(800)
        .height(600)
        .format("webp")
        .quality(80)
        .url()}
      alt={title}
      className="rounded-lg shadow-lg object-cover w-full h-full"
      loading="lazy"
    />
  );
  const textContent = (
    <div className="flex flex-col justify-center p-8">
      <Text as="h2" className="mb-4">
        {title}
      </Text>
      <Text as="p" className="mb-6">
        {description}
      </Text>
      {ctaText && onCtaClick && (
        <div className="mt-4">
          <Button onClick={onCtaClick}>{ctaText}</Button>
        </div>
      )}
    </div>
  );

  const gridClasses =
    "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface rounded-lg overflow-hidden shadow-xl";

  return (
    <div className={gridClasses}>
      {imagePosition === "left" ? (
        <>
          <div>{imageEl}</div>
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          <div className="order-first">{imageEl}</div>
        </>
      )}
    </div>
  );
};

export const ImageAndText = React.memo(ImageAndTextComponent);
export default ImageAndText;
