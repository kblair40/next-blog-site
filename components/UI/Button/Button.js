import React from "react";
import classNames from "classnames";

import Loading from "components/UI/Loading";

const Button = ({
  onClick,
  isDisabled,
  loading,
  children,
  colorScheme = "primary",
  classes = [],
}) => {
  const colorClasses = {
    slate: ["bg-slate-600", "hover:bg-slate-700", "active:bg-slate-800"],
    emerald: [
      "bg-emerald-600",
      "hover:bg-emerald-700",
      "active:bg-emerald-800",
    ],
    primary: [
      "bg-primary-600",
      "hover:bg-primary-700",
      "active:bg-primary-800",
    ],
  };

  const btnState = isDisabled ? "disabled" : "enabled";

  const baseClasses = [
    "duration-200",
    "rounded-lg",
    "px-3",
    "h-10",
    "text-white",
    "font-medium",
    "flex",
    "items-center",
    "justify-center",
    ...colorClasses[colorScheme].map((color) => {
      return isDisabled ? `${color}/50` : color;
    }),
    ...classes,
  ];
  // console.log("\n\nBASE CLASSES:", baseClasses);

  return (
    <button
      onClick={onClick}
      className={classNames(baseClasses)}
      disabled={isDisabled}
    >
      {loading ? (
        <div className="scale-50">
          <Loading />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
