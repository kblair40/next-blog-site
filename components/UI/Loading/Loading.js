import React from "react";
import classNames from "classnames";

const Loading = ({ scheme }) => {
  const baseClasses = [
    "animate-spin",
    scheme ? "fill-slate-50" : "fill-slate-900",
    scheme ? "stroke-slate-500" : "stroke-slate-300",
  ];

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(baseClasses)}
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        className={scheme ? "stroke-slate-200" : "stroke-slate-900"}
        stroke-width="4"
      />
      <path
        d="M36.9561 6.2197C39.7578 8.26126 42.0375 10.936 43.6091 14.0259C45.1808 17.1158 46 20.5334 46 24"
        stroke-width="4"
      />
    </svg>
  );
};

export default Loading;
