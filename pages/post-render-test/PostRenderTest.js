import React, { useEffect, useState } from "react";

import api from "utils/api";
import Loading from "components/UI/Loading";

const PostRenderTest = () => {
  // const [postContent, setPostContent] = useState("");
  // const [postTitle, setPostTitle] = useState("");
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get("/posts/", {
          params: { id: "632c3ae3b41655811a865e89" },
        });
        console.log("RESPONSE:", response.data);
        const post = response.data.post;
        // setPostContent(post.content);

        setPostData({
          content: post.content,
          title: post.title,
          date: post.createdAt,
          _id: post._id,
        });
      } catch (e) {
        console.error("ERROR FETCHING POST:", e);
      }

      setLoading(false);
    };

    fetchPost();
  }, []);

  if (!postData || loading) return <Loading fullScreen />;

  return <div>PostRenderTest</div>;
};

export default PostRenderTest;
