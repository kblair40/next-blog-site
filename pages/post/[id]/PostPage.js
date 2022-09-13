import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import api from "utils/api";
import md from "utils/md";
import styles from "./PostPage.module.scss";
import Comments from "components/Comments";

const PostPage = () => {
  const [loading, setLoading] = useState(true);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const router = useRouter();
  // const postId = router.query.id;

  useEffect(() => {
    const fetchPost = async (id) => {
      try {
        const res = await api.get("/posts/", {
          params: { id },
        });
        console.log("RES:", res);
        setPostContent("<div>" + res.data.post.content + "</div>");
        setPostTitle(res.data.post.title);
      } catch (err) {
        console.error("\nFAILED TO FETCH POST:", err);
      }

      setLoading(false);
    };

    if (router.query && router.query.id) {
      fetchPost(router.query.id);
    }
  }, [router]);

  if (postContent && postTitle && loading) {
    let style = { height: "400px", display: "flex", alignItems: "center" };
    return (
      <div style={style}>
        <p style={{ textAlign: "center", width: "100%" }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.post_page}>
      <div className={styles.post_page__content_container}>
        <h1 className={styles.post_page__title}>{postTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: md.render(postContent) }} />

        <Comments postId={router.query.id} />
      </div>
    </div>
  );
};

export default PostPage;
