import React from "react";

interface BtnProps {
  text: string;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const Btn: React.FC<BtnProps> = ({
  text,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${className} ${textColor}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Btn;
