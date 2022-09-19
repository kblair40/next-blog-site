import React from "react";
import classNames from "classnames";

const Loading = ({ scheme, fullScreen = false, size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-16 h-16",
  };

  const baseClasses = [
    "animate-spin border-t-transparent border-4 border-red-400 border-double rounded-full",
    scheme ? "fill-slate-50" : "fill-slate-900",
    scheme ? "stroke-slate-500" : "stroke-slate-300",
    sizeClasses[size],
  ];

  return (
    <div
      className={
        fullScreen ? "h-screen flex justify-center items-center" : undefined
      }
    >
      <div className={classNames(baseClasses)} />
    </div>
  );
};

export default Loading;
