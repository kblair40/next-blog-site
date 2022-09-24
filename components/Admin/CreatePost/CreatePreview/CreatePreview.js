import React, { useState } from "react";
import classNames from "classnames";

import Button from "components/UI/Button";

// import BlogPost from "components/BlogPost";

const CreatePreview = ({ content }) => {
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

  const makeElement = (el, i) => {
    const type = el.el.value; // ex. "h2", "p", "div", "img" etc...
    console.log("\n\nEL TYPE:", type, "\n\n");
    // content in input at time of submission
    const innerText = ["div", "img"].includes(type) ? null : el.text;

    if (["ol", "ul"].includes(type)) {
      return makeList(innerText, type, el.classes.split(" "));
      // const list = makeList(innerText, type);
      // console.log("LIST:", list);
      // return;
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

  const btnClasses = {
    "fixed bottom-1 left-1": isFullScreen,
  };

  const classes = classNames({
    "w-full": true,
    "fixed top-10 right-0 bottom-0 left-0 h-screen-nav w-screen bg-white":
      isFullScreen,
    "border px-12 flex justify-center": isFullScreen,
    "no-border pt-4": isFullScreen,
  });

  const previewClasses = classNames({
    "w-full pt-2": true,
    "max-w-3xl lg:max-w-4xl": isFullScreen,
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
