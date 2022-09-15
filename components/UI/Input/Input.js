import React, { useState, forwardRef } from "react";
import classNames from "classnames";

const sizeClasses = {
  xs: "h-6",
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-14",
};

const Input = forwardRef(
  ({ placeholder, styles, onChange, size = "md" }, ref) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      const { value } = e.target;
      setValue(value);

      if (onChange) onChange(value);
    };

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
    ];

    return (
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        ref={ref}
        className={classNames(inputClasses)}
        style={styles ? styles : undefined}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
