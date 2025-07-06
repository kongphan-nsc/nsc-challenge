import React from "react";
import Image from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

type ImageAndTextProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  onCtaClick?: () => void;
};

const ImageAndText: React.FC<ImageAndTextProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  imagePosition = "left",
  ctaText,
  onCtaClick,
}) => {
  const imageEl = (
    <Image
      src={imageUrl}
      alt={imageAlt}
      className="rounded-lg shadow-lg object-cover w-full h-full"
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

export default ImageAndText;
