import React from "react";
import Image from "next/image";

import Post from "./Post";
import bgImage from "public/assets/images/posts-bg.jpg";
import styles from "./Posts.module.scss";
import posts from "./data";

const Posts = () => {
  return (
    <div className={styles.posts_container}>
      <Image
        alt="bg-image"
        src={bgImage}
        className={styles.posts_container__bgimage}
      />

      <div className={styles.posts_container__posts}>
        {posts.map((post, i) => {
          return (
            <div
              key={i}
              className={`${styles.posts_container__posts__card} ${
                i % 2 ? styles.mr : ""
              }`}
            >
              <Post title={post.title}>{post.body}</Post>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
