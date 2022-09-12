import React, { useState, forwardRef } from "react";
import classNames from "classnames";

import classes from "./Input.module.scss";

const Input = forwardRef(
  ({ placeholder, styles, onChange, size = "md" }, ref) => {
    const [value, setValue] = useState("");

    console.log("\n\nREF:", Boolean(ref));

    const handleChange = (e) => {
      const { value } = e.target;
      setValue(value);

      if (onChange) onChange(value);
    };

    const inputClasses = classNames({
      [classes.input]: true,
      [classes.input_xs]: size === "xs",
      [classes.input_sm]: size === "sm",
      [classes.input_md]: size === "md",
      [classes.input_lg]: size === "lg",
      [classes.input_xl]: size === "xl",
    });
    console.log("\n\nINPUT CLASSES:", inputClasses, "\n\n");

    return (
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        ref={ref}
        className={inputClasses}
        style={styles ? styles : undefined}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
