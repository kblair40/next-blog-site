import React from "react";

import styles from "./Card.module.scss";

const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>

      <div className={styles.card__body}>{children}</div>
    </div>
  );
};

export default Card;
