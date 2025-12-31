import React from "react";

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  placeholder: string;
  rounded?: string;
}

const TextareaField = ({
  label,
  name,
  placeholder,
  rounded,
  ...props
}: TextareaFieldProps) => {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...props}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`${rounded} w-full p-4 font-body border-t-2 resize-none  text-dark border-disabled bg-light placeholder:font-body placeholder:text-placeholder focus:border-secondary focus:outline-none`}
      ></textarea>
    </div>
  );
};

export default TextareaField;
