import React from "react";
import Link from "next/link";

import styles from "./PostPreview.module.scss";

const PostPreview = ({ title, children }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.post__title}>{title}</h2>

      <div className={styles.post__body}>
        <div className={styles.post__body__text}>{children}</div>
        <div className={styles.post__body__link}>
          <Link href="#!">See More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
