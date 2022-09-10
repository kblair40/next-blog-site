import React from "react";
import Link from "next/link";

import styles from "./Post.module.scss";

const Post = ({ title, children }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.post__title}>{title}</h3>

      <div className={styles.post__body}>
        <div className={styles.post__body__text}>{children}</div>
        <div className={styles.post__body__link}>
          <Link href="#!">See More</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
