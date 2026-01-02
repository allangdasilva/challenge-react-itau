import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  rounded?: string;
}

const InputField = ({ label, name, rounded, ...props }: InputFieldProps) => {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        id={name}
        name={name}
        className={`${rounded} w-full p-4 outline-0 font-body text-dark placeholder:font-body placeholder:text-placeholder border-b-2 border-disabled focus:border-secondary focus:outline-none bg-light`}
      />
    </div>
  );
};

export default InputField;
