import React from "react";
import classNames from "classnames";

import Loading from "components/UI/Loading";

const GhostButton = ({
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
    slate: ["bg-transparent", "hover:bg-slate-50", "active:bg-slate-100"],
    emerald: ["bg-transparent", "hover:bg-emerald-50", "active:bg-emerald-100"],
    primary: ["bg-transparent", "hover:bg-primary-50", "active:bg-primary-100"],
  };

  const baseClasses = [
    "duration-200",
    "rounded-lg",
    "px-3",
    "h-10",
    "font-medium",
    "flex",
    "items-center",
    "justify-center",
    ...colorClasses[colorScheme].map((color) => {
      return isDisabled ? `${color}/50` : color;
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

export default GhostButton;
