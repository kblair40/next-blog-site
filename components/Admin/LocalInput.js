import React from "react";
import classNames from "classnames";

const LocalInput = ({
  defaultValue,
  onChange,
  min = "1",
  max = "3",
  type = "text",
  classes = [],
}) => {
  const inputClasses = [
    "rounded-md h-8 border border-slate-200 px-2 text-sm block",
    ...classes,
  ];
  if (type === "text") {
    return (
      <input
        type="text"
        className={classNames(inputClasses)}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    );
  } else if (type === "number") {
    return (
      <input
        type="number"
        className={classNames(inputClasses)}
        defaultValue={defaultValue}
        onChange={onChange}
        min={min}
        max={max}
        step="1"
      />
    );
  }
};

export default LocalInput;
