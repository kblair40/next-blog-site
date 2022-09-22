import { createElement } from "react";
import classNames from "classnames";

// import BlogPost from "components/BlogPost";

const CreatePreview = ({ content }) => {
  const makeElement = (el, i) => {
    const type = el.el.value;
    const innerText = type === "div" ? null : el.text;

    // show background color here
    if (type === "div") el.classes += " border border-slate-200/50";

    const classes = { className: classNames(el.classes.split(" ")), key: i };
    console.log("EL:", el, { type, classes });
    // console.log("\nEL:", el);
    // console.log("TYPE:", type);

    if (type === "div") {
      console.log("\n\n\nFOUND DIV\n\n\n");
    }
    const newElement = createElement(el.el.value, classes, innerText);
    return newElement;
  };

  return (
    <div className="w-full pt-4">
      {Array.isArray(content) && content.length
        ? content.map((elObj, i) => {
            return makeElement(elObj, i);
          })
        : null}
    </div>
  );
};

export default CreatePreview;
