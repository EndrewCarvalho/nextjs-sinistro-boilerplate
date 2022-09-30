import React from "react";
interface ButtonInterface {
  children: string;
  className: string;
}

const Button = ({ children, className }: ButtonInterface) => {
  return (
    <button
      className={`${className} bg-gray-500 px-20 py-2 block m-2 hover:bg-gray-400 ring-2 ring-gray-600 text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
