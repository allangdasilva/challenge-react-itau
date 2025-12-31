import React from "react";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}

const SelectField = ({
  label,
  name,
  options,
  placeholder,
  ...props
}: SelectFieldProps) => {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <select
        className="w-full p-4 font-body border-b-2 border-disabled focus:border-secondary focus:outline-none bg-light text-dark invalid:text-placeholder"
        defaultValue=""
        {...props}
        name={name}
        id={name}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((option) => (
          <option className="text-dark" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
