import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import api from "utils/api";
import md from "utils/md";
import Comments from "components/Comments";
import CommentInput from "components/CommentInput";
import GoBack from "components/GoBack";

const PostPage = () => {
  const [loading, setLoading] = useState(true);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchPost = async (id) => {
      try {
        const res = await api.get("/posts/", {
          params: { id },
        });
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
    <div className="px-4 overflow-x-hidden overflow-y-auto flex flex-col items-center max-w-screen">
      POST PAGE
      {/* max-w = 896px;  min-h = 300px; */}
      <div className="w-full mt-4 max-w-4xl min-h-75">
        <GoBack route="/" label="Back to all posts" />

        <h1 className="mb-4 text-3xl font-semibold">{postTitle}</h1>

        <div dangerouslySetInnerHTML={{ __html: md.render(postContent) }} />

        <CommentInput />
        <Comments postId={router.query.id} />
      </div>
    </div>
  );
};

export default PostPage;

// return (
//   <div className={styles.post_page}>
//     <div className={styles.post_page__content_container}>
//       <GoBack route="/" label="Back to all posts" />

//       <h1 className={styles.post_page__title}>{postTitle}</h1>
//       <div dangerouslySetInnerHTML={{ __html: md.render(postContent) }} />

//       <CommentInput />
//       <Comments postId={router.query.id} />
//     </div>
//   </div>
// );
