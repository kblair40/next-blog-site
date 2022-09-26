import React from "react";
import classNames from "classnames";
import Image from "next/image";

// import Loading from "components/UI/Loading";

const BlogPost = ({ postContent, postImage }) => {
  postContent = JSON.parse(postContent);

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
    "no-border": true,
  });

  const previewClasses = classNames({
    "w-full pt-6": true,
    "flex flex-col items-center text-justify": true,
    // "max-w-3xl lg:max-w-4xl": true,
  });

  return (
    <div className={classes}>
      <div className={previewClasses}>
        <div className="relative h-60 w-full md:h-80 md:w-3/4 rounded-sm overflow-hidden mb-6 md:mb-8">
          <Image
            src={postImage}
            alt="post image"
            layout="fill"
            objectFit="cover"
          />
        </div>

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
