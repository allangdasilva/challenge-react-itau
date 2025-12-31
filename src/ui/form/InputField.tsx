import React from "react";

const InputField = ({
  label,
  type,
  name,
  placeholder,
  ...props
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
