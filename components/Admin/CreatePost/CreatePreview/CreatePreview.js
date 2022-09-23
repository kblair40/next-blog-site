import React, { useState } from "react";
import classNames from "classnames";

import Button from "components/UI/Button";

// import BlogPost from "components/BlogPost";

const CreatePreview = ({ content }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const makeElement = (el, i) => {
    const type = el.el.value; // ex. "h2", "p", "div", "img" etc...
    // content in input at time of submission
    const innerText = ["div", "img"].includes(type) ? null : el.text;

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
    "w-full pt-4": true,
    "fixed top-10 right-0 bottom-0 left-0 h-screen-nav w-screen bg-white":
      isFullScreen,
    border: isFullScreen,
  });

  return (
    <div className={classes}>
      <Button onClick={() => setIsFullScreen((prev) => !prev)}>
        Full Screen
      </Button>
      {/* <h2 className="text-5xl font-medium">test</h2> */}
      {Array.isArray(content) && content.length
        ? content.map((elObj, i) => {
            return makeElement(elObj, i);
          })
        : null}
    </div>
  );
};

export default CreatePreview;
