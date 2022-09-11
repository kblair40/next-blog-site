import React, { useRef, useState } from "react";
import md from "utils/md";

import TextareaMarkdownEditor from "react-textarea-markdown-editor";

import Button from "components/UI/Button";
import styles from "./Editor.module.scss";

const Editor = () => {
  const [htmlPreview, setHtmlPreview] = useState("");

  const textareaRef = useRef();
  console.log("MD:", console.dir(md));

  const handleSubmit = () => {
    const value = textareaRef.current.state.value;
    console.log("\nVALUE:", value);

    const mdHtml = md.render(value);
    console.log("\nHTML:", mdHtml);
    setHtmlPreview(mdHtml);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <TextareaMarkdownEditor
          ref={textareaRef}
          doParse={md.render}
          // onChange={(val) => console.log("val:", val)}
          // onChange={(e) => console.log("val:", e.target.value)}
        />
        <Button onClick={handleSubmit}>Preview</Button>
      </div>

      {htmlPreview && (
        <div
          className={styles.preview}
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        />
      )}
    </React.Fragment>
  );
};

export default Editor;
