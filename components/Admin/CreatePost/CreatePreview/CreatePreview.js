import { createElement } from "react";
import classNames from "classnames";

import BlogPost from "components/BlogPost";

const CreatePreview = ({ content }) => {
  return (
    <BlogPost>
      {Array.isArray(content) && content.length
        ? content.map((elObj, i) => {
            console.log("\nELEMENT CLASSES:", elObj.classes.split(" "), "\n\n");
            const newElement = createElement(
              elObj.el.value,
              // { className: classNames(elObj.classes), key: i },
              { className: String(elObj.classes.split(" ")), key: i },
              // { className: "font-bold", key: i },
              elObj.text
            );

            return newElement;
          })
        : null}

      {/*  */}

      {/* {contentRef.current.map((El, i) => {
        return <El key={i} />;
      })} */}
      {/* <h1 ref={otherRef}>TEST ELEMENT</h1> */}
    </BlogPost>
  );
};

export default CreatePreview;
