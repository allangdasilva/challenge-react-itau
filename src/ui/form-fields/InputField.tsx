import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rounded?: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <>
      <label className="sr-only" htmlFor={props.label}>
        {props.label}
      </label>
      <input
        id={props.label}
        className={`${props.rounded} w-full p-4 outline-0 font-body text-dark placeholder:font-body placeholder:text-placeholder border-b-2 border-disabled focus:border-secondary focus:outline-none bg-light`}
        {...props}
      />
    </>
  );
};

export default InputField;
