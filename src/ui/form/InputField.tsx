import React from "react";

const InputField = ({
  label,
  type,
  name,
  ...props
}: {
  label: string;
  type: string;
  name: string;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...props} type={type} id={name} name={name} />
    </div>
  );
};

export default InputField;
