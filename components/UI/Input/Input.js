import React, { useState } from "react";
import classNames from "classnames";

import classes from "./Input.module.scss";

const Input = ({ placeholder, styles, onChange, size = "md" }) => {
  const [value, setValue] = useState("");

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
      className={inputClasses}
      // className={classNames(classes.input, classes.input_md)}
      style={styles ? styles : undefined}
    />
  );
};

export default Input;
