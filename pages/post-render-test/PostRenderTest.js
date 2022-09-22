import React, { useEffect, useState, createElement } from "react";
import classNames from "classnames";

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
          params: { id: "632cd991d0db8f968b340aab" },
        });
        console.log("RESPONSE:", response.data);
        const post = response.data.post;
        // setPostContent(post.content);

        setPostData({
          content: JSON.parse(post.content),
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

  const makeElement = (el, i) => {
    const type = el.el.value;
    const innerText = type === "div" ? null : el.text;

    // show background color here
    if (type === "div") el.classes += " border border-slate-200/50";

    const classes = { className: classNames(el.classes.split(" ")), key: i };

    const newElement = createElement(el.el.value, classes, innerText);
    return newElement;
  };

  const content = postData.content;

  return (
    <div className="w-full pt-12 sm:pt-20 px-8 blog-post-test flex justify-center">
      <div className="max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        {Array.isArray(content) && content.length
          ? content.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null}
      </div>
    </div>
  );
};

export default PostRenderTest;
