import React, { useRef, useState } from "react";

import markdownToHtml from "utils/markdownToHtml";
import Button from "components/UI/Button";
import PreviewModal from "components/PreviewModal";

import styles from "./Editor.module.scss";

const Editor = () => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [markdown, setMarkdown] = useState("");

  const inputRef = useRef();

  const handleSubmit = async () => {
    const value = inputRef.current.value;
    console.log("INPUT VALUE:", value);
    const result = await markdownToHtml(value);
    console.log("RESULT:", result);

    setMarkdown(value);
    setPreviewModalOpen(true);
  };

  const closePreview = () => {
    setPreviewModalOpen(false);
    setMarkdown("");
  };

  return (
    <React.Fragment>
      <textarea ref={inputRef} className={styles.text_area} />

      <Button onClick={handleSubmit}>Preview</Button>

      <PreviewModal
        isOpen={previewModalOpen}
        onClose={closePreview}
        markdown={markdown}
      />
    </React.Fragment>
  );
};

export default Editor;
