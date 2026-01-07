import React from "react";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder: string;
}

const SelectField = (props: SelectFieldProps) => {
  return (
    <div>
      <label className="sr-only" htmlFor={props.label}>
        {props.label}
      </label>
      <select
        id={props.label}
        className="w-full p-4 font-body border-b-2 border-disabled focus:border-secondary focus:outline-none bg-light text-dark invalid:text-placeholder"
        {...props}
      >
        <option value="" hidden>
          {props.placeholder}
        </option>

        {props.options.map((option) => (
          <option className="text-dark" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
