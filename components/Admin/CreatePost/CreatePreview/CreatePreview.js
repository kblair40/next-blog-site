import { createElement } from "react";
import classNames from "classnames";

// import BlogPost from "components/BlogPost";

const CreatePreview = ({ content }) => {
  const makeSpacer = (classes) => {
    // return createElement("div", {className: })
  };

  const makeElement = (el, i) => {
    const type = el.el.value;
    const classes = { className: classNames(el.classes.split(" ")), key: i };
    const innerText = type === "div" ? null : el.text;
    console.log("\nEL:", el);
    console.log("TYPE:", type);

    if (type === "div") {
      console.log("\n\n\nFOUND DIV\n\n\n");
    }
    const newElement = createElement(
      el.el.value,
      classes,
      // { className: classNames(el.classes.split(" ")), key: i },
      // el.text
      innerText
    );
    return newElement;
  };

  return (
    <div className="w-full pt-4">
      {Array.isArray(content) && content.length
        ? content.map((elObj, i) => {
            // console.log("\n\n\nelObj:", elObj);
            // console.log("\nELEMENT CLASSES:", elObj.classes.split(" "), "\n\n");
            return makeElement(elObj, i);
          })
        : null}
    </div>
  );
};

export default CreatePreview;
