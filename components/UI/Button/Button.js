import React from "react";

import Loading from "components/UI/Loading";
import classes from "./Button.module.scss";

const Button = ({ onClick, isDisabled, loading, styles, children }) => {
  return (
    <button
      onClick={onClick}
      className={classes.button}
      style={styles ? { ...styles } : undefined}
      disabled={isDisabled}
    >
      {loading ? <Loading scale={0.6} /> : children}
    </button>
  );
};

export default Button;
