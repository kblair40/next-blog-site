import React from "react";
import Image from "next/image";

import styles from "./IconButton.module.scss";

const IconButton = ({ onClick, icon }) => {
  return (
    <button className={styles.iconbutton} onClick={onClick}>
      <Image alt="icon button" src={icon} />
    </button>
  );
};

export default IconButton;
