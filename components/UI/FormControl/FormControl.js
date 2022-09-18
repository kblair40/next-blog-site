import React from "react";
import classNames from "classnames";

import Input from "components/UI/Input";

const FormControl = ({
  label,
  placeholder,
  onChange,
  checked,
  size = "md",
  inputType = "text",
  wrapperClasses = [],
  inputClasses = [],
}) => {
  const labelClasses = ["text-slate-700", "font-medium"];

  if (inputType === "radio") {
    labelClasses.pop();
  }

  return (
    <div className={classNames(wrapperClasses)}>
      {inputType !== "radio" ? (
        <React.Fragment>
          <label className={classNames(labelClasses)}>{label}</label>
          <Input
            onChange={onChange ? onChange : undefined}
            size={size}
            placeholder={placeholder}
            type={inputType}
            classes={inputClasses}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Input
            size={size}
            placeholder={placeholder}
            type={inputType}
            checked={checked}
          />
          <label class={classNames(labelClasses)}>{label}</label>
        </React.Fragment>
      )}
    </div>
  );
};

export default FormControl;
