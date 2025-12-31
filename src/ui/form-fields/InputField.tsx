import React from "react";

const InputField = ({
  label,
  type,
  name,
  placeholder,
  rounded,
  ...props
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  rounded?: string;
}) => {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${rounded} w-full p-4 outline-0 font-body text-dark placeholder:font-body placeholder:text-placeholder border-b-2 border-disabled focus:border-secondary focus:outline-none bg-light`}
      />
    </div>
  );
};

export default InputField;
