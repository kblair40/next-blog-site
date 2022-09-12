import React, { useEffect, useState } from "react";
import Image from "next/image";

import PostPreview from "./PostPreview";
import bgImage from "public/assets/images/posts-bg.jpg";
import styles from "./Posts.module.scss";
import api from "utils/api";
import md from "utils/md";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await api.get("/posts");
        console.log("ALL POSTS:", allPosts.data.posts);

        setAllPosts(
          allPosts.data.posts.map((post, i) => {
            return {
              ...post,
              content: "<div>" + post.content.trim() + "</div>",
            };
          })
        );
      } catch (e) {
        console.error("FAILED TO FETCH POSTS:");
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.posts_container}>
      <Image
        alt="bg-image"
        src={bgImage}
        className={styles.posts_container__bgimage}
      />

      <div className={styles.posts_container__posts}>
        {allPosts.map((post, i) => {
          console.log("POST CONTENT:", md.render(post.content));
          return (
            <div
              key={i}
              className={`${styles.posts_container__posts__card} ${
                i % 2 ? styles.mr : ""
              }`}
            >
              <PostPreview title={post.title} postId={post._id}>
                <div
                  dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
                />
              </PostPreview>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
