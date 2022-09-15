import React, { useRef, useState } from "react";
import TextareaMarkdownEditor from "react-textarea-markdown-editor";

import md from "utils/md";
import { markers } from "utils/constants";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const Editor = ({ onSubmit, loading }) => {
  const [postTitle, setPostTitle] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");

  const textareaRef = useRef();

  const showPreview = () => {
    const value = textareaRef.current.state.value;

    const mdHtml = md.render(value);
    setHtmlPreview(mdHtml);
  };

  const handleSubmit = () => {
    const content = md.render(textareaRef.current.state.value);
    onSubmit({ title: postTitle, content });
  };

  return (
    <React.Fragment>
      <div className="w-full pt-4">
        <div className="flex items-center mb-4">
          <p className="mr-2 font-medium">Post Title:</p>
          <Input onChange={(val) => setPostTitle(val)} />
        </div>

        <TextareaMarkdownEditor ref={textareaRef} rows={20} markers={markers} />

        <div className="mt-4 flex space-x-4 justify-end">
          <Button onClick={showPreview}>Preview</Button>

          <Button onClick={handleSubmit} loading={loading} colorScheme="slate">
            Submit
          </Button>
        </div>
      </div>

      {htmlPreview && (
        <div
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        />
      )}
    </React.Fragment>
  );
};

export default Editor;
