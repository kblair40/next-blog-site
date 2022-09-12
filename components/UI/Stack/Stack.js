import React from "react";

import styles from "./Stack.module.scss";

const Stack = ({ direction = "row", children }) => {
  return (
    <div className={direction === "row" ? styles.stack_row : styles.stack_col}>
      {children}
    </div>
  );
};

export default Stack;
