import React from "react";

const SelectField = ({
  label,
  name,
  options,
  placeholder,
  ...props
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" {...props} name={name} id={name}>
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
