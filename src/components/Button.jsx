import React from "react";

function Button({
  children,
  type,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className,
  ...props
}) {
  return (
    <button
      className={`p-2 rounded-md ${bgColor} ${className} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
