import React from "react";
import Link from "next/link";

import styles from "./Card.module.scss";

const Post = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>

      <div className={styles.card__body}>
        <div className={styles.card__body__text}>{children}</div>
        <div className={styles.card__body__link}>
          <Link href="#!">See More</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
