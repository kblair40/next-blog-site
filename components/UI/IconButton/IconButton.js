import React from "react";
import classNames from "classnames";

const IconButton = ({ onClick, icon }) => {
  // const baseClasses = [
  //   "text-white text-sm text-center bg-blue-700 rounded-lg p-2.5 mr-2",
  //   "inline-flex items-center",
  //   "hover:bg-blue-800 focus-visible:outline-none",
  // ];
  const baseClasses = [
    "text-black text-sm text-center bg-transparent rounded-lg p-2.5 mr-2",
    "inline-flex items-center",
    "hover:bg-slate-200 focus-visible:outline-none duration-300",
  ];

  return (
    <button type="button" onClick={onClick} className={classNames(baseClasses)}>
      {icon}
      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default IconButton;
