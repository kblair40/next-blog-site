import { createElement } from "react";
import classNames from "classnames";

// import BlogPost from "components/BlogPost";

const classMap = {
  "text-6xl": { fontSize: "60px" },
  "text-5xl": { fontSize: "52px" },
};

const CreatePreview = ({ content }) => {
  const makeElement = (el, i) => {
    console.log("ELEMENT TO MAKE:", el);
    const type = el.el.value;
    // const innerText = type === "div" ? null : el.text;

    const createdEl = document.createElement(type);
    console.log("CREATED ELEMENT:", createdEl);

    if (type === "h1") {
      createdEl.style = classMap["text-6xl"];
    }
    console.log("WITH STYLE:", createdEl.style);

    // show background color here
    // if (type === "div") el.classes += " border border-slate-200/50";

    // const classes = { className: el.classes, key: i };
    // const classes = { className: classNames(el.classes.split(" ")), key: i };
    // console.log("EL:", el, { type, classes });

    // if (type === "div") {
    //   console.log("\n\n\nFOUND DIV\n\n\n");
    // }
    // const newElement = createElement(el.el.value, classes, innerText);
    // return newElement;
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
