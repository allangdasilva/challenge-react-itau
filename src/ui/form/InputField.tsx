import React from "react";

const InputField = ({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} />
    </div>
  );
};

export default InputField;
