// src/components/UI/Button.jsx

import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses = "font-semibold rounded-lg transition shadow-md";

  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-purple-100 text-purple-900 hover:bg-purple-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
