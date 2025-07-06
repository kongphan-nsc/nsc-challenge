import React from "react";

type TextProps = {
  children: React.ReactNode;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  as: Component = "p",
  className = "",
}) => {
  const baseStyles = "text-on-background";

  const sizeStyles = {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold",
    p: "text-base leading-relaxed opacity-80",
    span: "text-base",
  };

  return (
    <Component
      className={`${baseStyles} ${sizeStyles[Component]} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
