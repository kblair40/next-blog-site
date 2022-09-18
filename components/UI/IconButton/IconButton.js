import React from "react";
import classNames from "classnames";

const IconButton = ({ onClick, icon, classes = [], padding = "p-2.5" }) => {
  const baseClasses = [
    "text-black text-sm text-center bg-transparent rounded-lg mr-2",
    "inline-flex items-center",
    "hover:bg-slate-200 focus-visible:outline-none duration-300",
  ];

  baseClasses = [...baseClasses, ...classes, padding];

  return (
    <button type="button" onClick={onClick} className={classNames(baseClasses)}>
      {icon}
      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default IconButton;
