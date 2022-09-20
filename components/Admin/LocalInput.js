import React from "react";
import classNames from "classnames";

const LocalInput = ({ defaultValue, onChange, type = "text" }) => {
  const inputClasses = ["rounded-md h-10 border border-slate-200 px-2 text-sm"];

  return (
    <input
      type={type}
      className={classNames(inputClasses)}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default LocalInput;
