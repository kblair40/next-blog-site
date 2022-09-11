import React, { useRef, useState } from "react";

import markdownToHtml from "utils/markdownToHtml";
import Button from "components/UI/Button";
import Modal from "components/UI/Modal";

import styles from "./Editor.module.scss";

const Editor = () => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState();
  const [markdown, setMarkdown] = useState("");

  const inputRef = useRef();
  // const previewRef = useRef();

  const handleSubmit = async () => {
    const value = inputRef.current.value;
    console.log("INPUT VALUE:", value);
    const result = await markdownToHtml(value);
    console.log("RESULT:", result);

    setMarkdown(value);

    // previewRef.current.innerHTML = result;
    setPreviewModalOpen(true);
    setPreviewContent(result);
  };

  const closePreview = () => {
    setPreviewModalOpen(false);
    setPreviewContent(undefined);
  };

  return (
    <React.Fragment>
      <textarea ref={inputRef} className={styles.text_area} />

      <Button onClick={handleSubmit}>Preview</Button>

      <Modal
        isOpen={previewModalOpen}
        onClose={closePreview}
        markdown={markdown}
        // bodyContent={previewContent}
      />

      {/* <div ref={previewRef}></div> */}
      {/* </Modal> */}
    </React.Fragment>
  );
};

export default Editor;
