import React from "react";
import Image from "next/image";

import bgImage from "public/assets/images/posts-bg.jpg";
import styles from "./Posts.module.scss";

const Posts = () => {
  return (
    <div className={styles.posts_container}>
      <Image src={bgImage} className={styles.posts_container__bgimage} />
    </div>
  );
};

export default Posts;
