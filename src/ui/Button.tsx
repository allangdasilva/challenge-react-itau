import React from "react";

const Button = ({
  type,
  children,
}: {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}) => {
  return <button type={type}>{children}</button>;
};

export default Button;
