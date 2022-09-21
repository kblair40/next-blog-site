import { createElement } from "react";
import classNames from "classnames";

import BlogPost from "components/BlogPost";

const CreatePreview = ({ content }) => {
  return (
    <div className="w-full pt-4">
      {Array.isArray(content) && content.length
        ? content.map((elObj, i) => {
            console.log("\n\n\nelObj:", elObj);
            console.log("\nELEMENT CLASSES:", elObj.classes.split(" "), "\n\n");
            const newElement = createElement(
              elObj.el.value,
              { className: classNames(elObj.classes.split(" ")), key: i },
              // { className: String(elObj.classes.split(" ")), key: i },
              // { className: "font-bold", key: i },
              elObj.text
            );

            return newElement;
          })
        : null}
    </div>
  );
};

export default CreatePreview;
