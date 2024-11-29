import React from "react";

type LoaderProps = {
  size?: "small" | "medium" | "large"; // Allows specifying the loader size
  color?: string; // Optional color prop
};

const Loading: React.FC<LoaderProps> = ({
  size = "medium",
  color = "#007bff",
}) => {
  const sizeStyles = {
    small: "20px",
    medium: "40px",
    large: "60px",
  };

  return (
    <div className="loader-container">
      <div
        className="loader"
        style={{
          width: sizeStyles[size],
          height: sizeStyles[size],
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
    </div>
  );
};

export default Loading;
