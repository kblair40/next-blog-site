import { createElement } from "react";
import classNames from "classnames";

import BlogPost from "components/BlogPost";

const CreatePreview = ({ content }) => {
  return (
    <div>
      {Array.isArray(content) && content.length
        ? content.map((elObj, i) => {
            return createElement(
              elObj.el.value,
              { className: classNames(elObj.classes), key: i },
              elObj.text
            );
          })
        : null}

      {/*  */}

      {/* {contentRef.current.map((El, i) => {
        return <El key={i} />;
      })} */}
      {/* <h1 ref={otherRef}>TEST ELEMENT</h1> */}
    </div>
  );
};

export default CreatePreview;
