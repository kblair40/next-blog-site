import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import api from "utils/api";
import Loading from "components/UI/Loading";
import EditPostPage from "./EditPostPage";

const Wrapper = () => {
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const [imageUrl, setImageUrl] = useState();

  const { query } = useRouter();

  console.log("QUERY:", query);

  const handleChangeContent = (newContent) => {
    setContent(newContent);
  };

  useEffect(() => {
    const fetchPost = async (postId) => {
      try {
        const response = await api.get("/posts", {
          params: { id: postId },
        });

        console.log("\nRESPONSE:", response);

        if (response.data && response.data.post) {
          const post = response.data.post;
          setContent(JSON.parse(post.content));
          setTitle(post.title);
          setImageUrl(post.image_url);
        }
      } catch (e) {
        console.log("FAILED FETCHING POST:", e);
      }
    };

    if (query && query.postId) {
      fetchPost(query.postId);
    }
  }, [query]);

  if (!content) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <EditPostPage
        handleChangeContent={handleChangeContent}
        postId={query.postId}
        content={content}
        title={title}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Wrapper;
