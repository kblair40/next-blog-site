import React from "react";
import classNames from "classnames";

import Loading from "components/UI/Loading";

const SolidButton = ({
  onClick,
  isDisabled,
  loading,
  children,
  iconLeft,
  iconRight,
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
      return isDisabled ? `${color} opacity-50` : color;
    }),
    ...classes,
  ];

  return (
    <button
      onClick={onClick}
      className={classNames(baseClasses)}
      disabled={isDisabled}
    >
      {iconLeft && iconLeft}

      {loading ? (
        <div className="scale-50">
          <Loading />
        </div>
      ) : (
        children
      )}

      {iconRight && iconRight}
    </button>
  );
};

export default SolidButton;
