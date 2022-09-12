import React, { useRef, useState } from "react";
import TextareaMarkdownEditor from "react-textarea-markdown-editor";

import md from "utils/md";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import markers from "./markers";
import styles from "./Editor.module.scss";

const Editor = ({ onSubmit, loading }) => {
  const [postTitle, setPostTitle] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");

  const textareaRef = useRef();

  const showPreview = () => {
    const value = textareaRef.current.state.value;
    console.log("\nVALUE:", value);

    const mdHtml = md.render(value);
    console.log("\nHTML:", mdHtml);
    setHtmlPreview(mdHtml);
  };

  const handleSubmit = () => {
    const content = md.render(textareaRef.current.state.value);
    onSubmit({ title: postTitle, content });
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.container__title_input}>
          <p className={styles.container__title_input__label}>Post Title:</p>
          <Input onChange={(val) => setPostTitle(val)} />
        </div>

        <TextareaMarkdownEditor
          ref={textareaRef}
          className={styles.container__editor}
          rows={20}
          markers={markers}
        />

        <div className={styles.container__buttons}>
          <Button onClick={showPreview} styles={{ width: "50%" }}>
            Preview
          </Button>

          <Button
            onClick={handleSubmit}
            styles={{ width: "50%", marginLeft: "1rem" }}
            loading={loading}
          >
            Submit
          </Button>
        </div>
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
