import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`max-w-full h-auto ${className}`}
      loading={loading}
      {...props}
    />
  );
};

export default Image;
