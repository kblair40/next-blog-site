import React from "react";
import classNames from "classnames";
import Image from "next/image";

// import Loading from "components/UI/Loading";

const BlogPost = ({ postContent, postImage, postTitle }) => {
  postContent = JSON.parse(postContent);

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
    console.log("\n\nEL TYPE:", type, "\n\n");
    // content in input when submitted
    const innerText = ["div", "img"].includes(type) ? null : elObj.text;
    let classes = elObj.classes;

    if (["ol", "ul"].includes(type)) {
      return makeList(innerText, type, classes);
    }

    // show border for spacers (div) while editing
    if (type === "div") classes += " border border-slate-200/50";

    // convert to array

    const props = { className: classNames(classes), key: i };
    console.log("EL:", elObj, { type, props });

    if (type === "img") props["src"] = elObj.text;

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

        {Array.isArray(postContent) && postContent.length
          ? postContent.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null}
      </div>
    </div>
  );
};

export default BlogPost;
