import React from "react";
import classNames from "classnames";
import Image from "next/image";

import post from "utils/posts/love-10-7-22.json";
import { elementOptions } from "utils/constants";

console.log("\n\nPOST:", post, typeof post, "\n\n");

// import Loading from "components/UI/Loading";

const BlogPost = () => {
  let postContent = post.content;
  let postTitle = post.title;
  let postImage = post.image_url;
  // return null;

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

  const makeElement = (elObj, i) => {
    const type = elObj.el; // ex. "h2", "p", "div", "img" etc...
    let classes = elObj.classes;
    console.log("\n\nEL TYPE:", type, "\n\n");
    // content in input when submitted
    const innerText = ["div", "img"].includes(type) ? null : elObj.text;

    if (["ol", "ul"].includes(type)) {
      return makeList(innerText, type, elObj.classes.split(" "));
    }

    // show border for spacers (div) while editing
    if (type === "div") elObj.classes += " border border-slate-200/50";

    const extraProps = {};

    /* Add classes depending on value of 'type' */
    if (type === "img") {
      let style = {};
      if (classes.includes("w-1/4")) style["width"] = "25%";
      if (classes.includes("w-3/4")) style["width"] = "75%";

      extraProps["style"] = style;
    }
    /* END ADDING CLASSES */

    const props = { className: classNames(classes), key: i, ...extraProps };

    if (type === "img") props["src"] = elObj.image_url;

    const newElement = React.createElement(type, props, innerText);
    return newElement;
  };

  const classes = classNames({
    "w-full mt-4": true,
    "px-4 sm:px-8 flex justify-center": true,
    "no-border live-blog-post": true,
  });
  const previewClasses = classNames({
    "w-full pt-6": true,
    "max-w-[460px] md:max-w-[740px] lg:max-w-[940px]": true,
  });

  return (
    <div className={classes}>
      <div className={previewClasses}>
        <div className="relative h-60 w-full md:h-80 md:w-3/4 rounded-sm overflow-hidden mb-6 md:mb-8 mx-auto">
          <Image
            src={postImage}
            alt="post image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1>{postTitle}</h1>

        {Array.isArray(postContent)
          ? postContent.map((elObj, i) => {
              console.log("EL OBJ:", elObj);
              if (elObj.el === "inline") {
                // return makeInlineElement(elObj, i)
                console.log("INLINE ELEMENT:", elObj);
              } else {
                return makeElement(elObj, i);
              }
            })
          : null}

        {/* {Array.isArray(postContent) && postContent.length
          ? postContent.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null} */}
      </div>
    </div>
  );
};

export default BlogPost;
