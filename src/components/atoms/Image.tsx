import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`max-w-full h-auto ${className}`}
      {...props}
    />
  );
};

export default Image;
