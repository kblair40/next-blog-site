import React from "react";
import classNames from "classnames";

import Loading from "components/UI/Loading";

const Button = ({ onClick, isDisabled, loading, children, classes = [] }) => {
  const baseClasses = [
    "duration-200",
    "rounded-lg",
    "px-3",
    "h-10",
    "text-white",
    "font-medium",
    "flex",
    "items-center",
    "bg-emerald-600",
    "hover:bg-emerald-700",
    "active:bg-emerald-800",
    ...classes,
  ];

  return (
    <button
      onClick={onClick}
      className={classNames(baseClasses)}
      disabled={isDisabled}
    >
      {loading ? (
        <div className="scale-50">
          <Loading scheme="sky" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
