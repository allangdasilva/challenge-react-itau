import React from "react";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}

const Button = ({ type, children }: Button) => {
  return (
    <button
      className="py-4 px-8 font-body font-bold cursor-pointer text-light rounded-lg bg-secondary hover:bg-light hover:text-secondary focus:bg-light focus:text-secondary focus:outline-2 focus:outline-secondary transition-colors"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
