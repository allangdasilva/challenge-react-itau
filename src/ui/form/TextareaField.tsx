import React from "react";

const TextareaField = ({
  label,
  name,
  placeholder,
  ...props
}: {
  label: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...props}
        name={name}
        id={name}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextareaField;
