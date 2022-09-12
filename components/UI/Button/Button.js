import React from "react";

import classes from "./Button.module.scss";

const Button = ({ onClick, styles, children }) => {
  return (
    <button
      onClick={onClick}
      className={classes.button}
      style={styles ? { ...styles } : undefined}
      disabled
    >
      {children}
    </button>
  );
};

export default Button;
