import React, { useState, forwardRef, useEffect } from "react";
import classNames from "classnames";

const sizeClasses = {
  xs: "h-6",
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-14",
};

const Input = forwardRef(
  (
    {
      placeholder,
      onChange,
      submitted,
      type = "text",
      classes = [],
      size = "md",
    },
    ref
  ) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      const { value } = e.target;
      setValue(value);

      if (onChange) onChange(value);
    };

    useEffect(() => {
      if (submitted) {
        setValue("");
      }
    }, [submitted]);

    const inputClasses = [
      "block",
      "rounded-lg",
      "px-2",
      "py-1.5",
      "focus-visible:outline-0",
      "border",
      "border-slate-300",
      "hover:border-slate-400",
      "focus:border-slate-500",
      "duration-300",
      sizeClasses[size],
      ...classes,
    ];

    if (type !== "radio") {
      return (
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
          ref={ref}
          className={classNames(inputClasses)}
        />
      );
    }

    const radioClasses = ["my-2"];

    return (
      <input type="radio" value="hi" className={classNames(radioClasses)} />
    );
  }
);

Input.displayName = "Input";

export default Input;
