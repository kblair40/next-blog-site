import React from "react";
import classNames from "classnames";

const Stack = ({ direction = "row", children }) => {
  const classes = [
    direction === "row" ? "flex-row" : "flex-col",
    direction === "row" ? "space-x-4" : "space-y-4",
    "w-full",
  ];

  return <div className={classNames(classes)}>{children}</div>;
};

export default Stack;
