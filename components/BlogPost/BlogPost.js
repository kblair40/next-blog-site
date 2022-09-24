import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Loading from "components/UI/Loading";
import api from "utils/api";

const BlogPostNew = ({ postId }) => {
  const [postContent, setPostContent] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts`, {
          params: { id: postId },
        });
        console.log("\n\nRESPONSE:", response, "\n\n");

        if (
          response &&
          response.data &&
          response.data.post &&
          response.data.post.content
        ) {
          const postContent = JSON.parse(response.data.post.content);
          setPostContent(postContent);
        }
      } catch (e) {
        console.error("FAILED TO FETCH POST:", e);
      }

      setLoading(false);
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const makeElement = (el, i) => {
    const type = el.el.value; // ex. "h2", "p", "div", "img" etc...
    console.log("\n\nEL TYPE:", type, "\n\n");
    // content in input when submitted
    const innerText = ["div", "img"].includes(type) ? null : el.text;

    if (["ol", "ul"].includes(type)) {
      return makeList(innerText, type, el.classes.split(" "));
    }

    // show border for spacers (div) while editing
    if (type === "div") el.classes += " border border-slate-200/50";

    // convert to array
    const classes = el.classes.split(" ");
    const extraProps = {};

    /* Add classes depending on value of 'type' */
    if (type === "img") {
      // classes.push("mx-auto");
      let style = {};
      if (el.classes.includes("w-1/4")) style["width"] = "25%";
      if (el.classes.includes("w-3/4")) style["width"] = "75%";

      extraProps["style"] = style;
    }
    /* END ADDING CLASSES */

    const props = { className: classNames(classes), key: i, ...extraProps };
    console.log("EL:", el, { type, props });

    if (type === "img") props["src"] = el.text;

    const newElement = React.createElement(el.el.value, props, innerText);
    return newElement;
  };

  const classes = classNames({
    "w-full": true,
    "px-12 flex justify-center": true,
    "no-border": true,
  });

  const previewClasses = classNames({
    "w-full pt-6": true,
    "max-w-3xl lg:max-w-4xl": true,
  });

  if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <div className={classes}>
      <div className={previewClasses}>
        {Array.isArray(postContent) && postContent.length
          ? postContent.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null}
      </div>
    </div>
  );
};

export default BlogPostNew;
