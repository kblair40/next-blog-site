import React, { useState } from "react";

import styles from "./Input.module.scss";

const Input = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);

    onChange(value);
  };

  return (
    <input value={value} onChange={handleChange} className={styles.input} />
  );
};

export default Input;
