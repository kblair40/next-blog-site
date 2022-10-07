import React, { useState } from "react";
import classNames from "classnames";

import Button from "components/UI/Button";

// import BlogPost from "components/BlogPost";

const CreatePreview = ({ content, postTitle }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

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
    let classes = elObj.classes;
    // content in input at time of submission
    const innerText = ["div", "img"].includes(type) ? null : elObj.text;

    if (["ol", "ul"].includes(type)) {
      return makeList(innerText, type, elObj.classes.split(" "));
    }

    const props = { className: classNames(classes), key: i };

    if (type === "img") props["src"] = elObj.text;

    const newElement = React.createElement(type, props, innerText);
    return newElement;
  };

  const btnClasses = {
    "fixed bottom-1 left-1": isFullScreen,
  };

  const classes = classNames({
    "w-full": true,
    "fixed top-12 right-0 bottom-0 left-0 h-screen-nav w-screen bg-white":
      isFullScreen,
    "flex justify-center": isFullScreen,
    "no-border pt-8": isFullScreen,
    "live-blog-post": true,
    "px-4 md:px-6": true,
  });

  const previewClasses = classNames({
    "w-full pt-2": true,
    "pt-8": !isFullScreen,
    "max-w-[460px] md:max-w-[740px] lg:max-w-[940px]": true,
    "mx-auto": true,
  });

  return (
    <div className={classes}>
      <Button
        classes={[btnClasses]}
        onClick={() => setIsFullScreen((prev) => !prev)}
        isDisabled={!content.length}
      >
        Full Screen
      </Button>

      <div className={previewClasses}>
        <h1>{postTitle}</h1>
        {Array.isArray(content) && content.length
          ? content.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null}
      </div>
    </div>
  );
};

export default CreatePreview;
