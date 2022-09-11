import React, { useRef } from "react";

import markdownToHtml from "utils/markdownToHtml";
import Button from "components/UI/Button";

import styles from "./Editor.module.scss";

const Editor = () => {
  const inputRef = useRef();
  const previewRef = useRef();

  const handleSubmit = async () => {
    const value = inputRef.current.value;
    console.log("INPUT VALUE:", value);
    const result = await markdownToHtml(value);
    console.log("RESULT:", result);

    previewRef.current.innerHTML = result;
  };

  return (
    <React.Fragment>
      <textarea ref={inputRef} className={styles.text_area} />

      <Button onClick={handleSubmit}>Preview</Button>

      <div ref={previewRef}></div>
    </React.Fragment>
  );
};

export default Editor;
