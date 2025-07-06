import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-300";

  const variantStyles = {
    primary:
      "bg-primary text-on-primary hover:bg-opacity-80 focus:ring-primary",
    secondary:
      "bg-surface text-on-surface hover:bg-opacity-80 focus:ring-gray-500 border border-primary",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
