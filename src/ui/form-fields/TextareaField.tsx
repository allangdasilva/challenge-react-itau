import React from "react";

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  placeholder: string;
  rounded?: string;
}

const TextareaField = (props: TextareaFieldProps) => {
  return (
    <div>
      <label className="sr-only" htmlFor={props.label}>
        {props.label}
      </label>
      <textarea
        {...props}
        id={props.label}
        className={`${props.rounded} w-full p-4 font-body border-t-2 resize-none  text-dark border-disabled bg-light placeholder:font-body placeholder:text-placeholder focus:border-secondary focus:outline-none`}
      ></textarea>
    </div>
  );
};

export default TextareaField;
