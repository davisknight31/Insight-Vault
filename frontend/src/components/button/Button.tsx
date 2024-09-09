import React from "react";

interface ButtonProps {
  label: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  handleClick = () => {},
}: ButtonProps) => {
  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        onClick={() => {
          handleClick();
        }}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
