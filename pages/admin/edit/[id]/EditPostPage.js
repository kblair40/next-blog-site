import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";

import Button from "components/UI/Button";
import api from "utils/api";

const EditPostPage = () => {
  const [postContent, setPostContent] = useState();
  const [postImage, setPostImage] = useState();
  const [postTitle, setPostTitle] = useState();
  const [curIndex, setCurIndex] = useState(0);

  const router = useRouter();
  const postId = router.query.id;
  console.log("\n\nPOST ID:", postId, "\n\n");

  const fetchedPost = useRef(false);
  useEffect(() => {
    if (fetchedPost.current) return;

    const fetchPost = async () => {
      try {
        const response = await api.get("/posts", {
          params: { id: postId },
        });

        console.log("RESPONSE:", response.data);
        if (response.data && response.data.post) {
          const { content, title, image_url } = response.data.post;
          setPostContent(JSON.parse(content));
          setPostImage(image_url);
          setPostTitle(title);
        }
      } catch (e) {
        console.error("FAILED FETCHING POST:", e);
      }

      fetchedPost.current = true;
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const makeListItems = (textArray) => {
    const listItems = [];
    for (let textItem of textArray) {
      let li = React.createElement("li", null, textItem);
      listItems.push(li);
    }

    console.log("\nLIST ITEMS:", listItems, "\n");
    return listItems;
  };

  const makeList = (text, type, classes = []) => {
    console.log("\nLIST VALS:", { text, type, classes });
    // removes all newlines (\n)
    text = text.replace(/\n/g, "");
    // console.log("text after:", { text });
    if (text.startsWith("#")) text = text.slice(1);
    // console.log("TEXT DOUBLE AFTER:", { text });
    const textArr = text.split("#").map((t) => t.trim());
    // console.log("TEXT ARR:", textArr, "\n\n");
    const listItems = makeListItems(textArr);
    const list = React.createElement(
      type,
      { className: classNames(classes) },
      listItems
    );
    return list;
  };

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
    "w-full mt-4": true,
    "px-4 sm:px-8 flex justify-center": true,
    "no-border live-blog-post": true,
  });

  const previewClasses = classNames({
    "w-full pt-6": true,
    // "blog-post-content": true,
    "max-w-[460px] md:max-w-[740px] lg:max-w-[940px]": true,
    // "flex flex-col items-center text-justify": true,
    // "max-w-3xl lg:max-w-4xl": true,
  });

  return (
    <React.Fragment>
      <div className={classes}>
        <div className={previewClasses}>
          <div className="relative h-60 w-full md:h-80 md:w-3/4 rounded-sm overflow-hidden mb-6 md:mb-8 mx-auto">
            {postImage && (
              <Image
                src={postImage}
                alt="post image"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>

          <h1>{postTitle}</h1>

          {Array.isArray(postContent) && postContent.length
            ? makeElement(postContent[curIndex])
            : null}
          {/* {Array.isArray(postContent) && postContent.length
          ? postContent.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null} */}
        </div>
      </div>

      <div className="flex space-x-4 items-center fixed top-4 right-4 mx-auto">
        <Button
          onClick={() => {
            if (curIndex >= 0) setCurIndex((prev) => prev - 1);
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            if (curIndex < postContent.length - 1) {
              setCurIndex((prev) => prev + 1);
            }
          }}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
};

export default EditPostPage;
