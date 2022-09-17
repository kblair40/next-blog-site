import React, { useRef, useState } from "react";
import TextareaMarkdownEditor from "react-textarea-markdown-editor";
import Image from "next/image";

import md from "utils/md";
import { markers } from "utils/constants";
import Input from "components/UI/Input";
import FileInput from "components/UI/Input/FileInput";
import Button from "components/UI/Button";

const Editor = ({ onSubmit, loading }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const textareaRef = useRef();
  const postImageUrlRef = useRef();

  const showPreview = () => {
    const value = textareaRef.current.state.value;

    if (!value) return;

    const mdHtml = md.render(value);
    setHtmlPreview(mdHtml);
  };

  const handleSubmit = () => {
    if (
      !textareaRef ||
      !textareaRef.current ||
      !textareaRef.current.state ||
      !textareaRef.current.state.value
    ) {
      console.log("\nNO CONTENT!");
      return;
    }

    const content = md.render(textareaRef.current.state.value);
    onSubmit({ title: postTitle, content, imageUrl: postImageUrl });
  };

  const handleChangeTitle = (val) => {
    console.log("NEW VALUE:", val);
    setPostTitle(val);

    if (val && submitDisabled) {
      setSubmitDisabled(false);
    } else if (!val && !submitDisabled) {
      setSubmitDisabled(true);
    }
  };

  const handleChangeImageUrl = (val) => {
    setPostImageUrl(val);
  };

  return (
    <React.Fragment>
      <div className="w-full pt-4">
        <div className="flex items-center mb-4 space-x-6">
          <Input
            classes={["w-1/2"]}
            placeholder="Post Title"
            onChange={handleChangeTitle}
          />
          <Input
            classes={["w-1/2"]}
            placeholder="Post Image URL"
            onChange={handleChangeImageUrl}
          />

          {/* <FileInput placeholder="Upload Image" onChange={handleChangeImage} /> */}
        </div>

        <TextareaMarkdownEditor ref={textareaRef} rows={18} markers={markers} />

        <div className="mt-4 flex space-x-4 justify-end">
          <Button onClick={showPreview} colorScheme="primary">
            Preview
          </Button>

          <Button
            isDisabled={submitDisabled}
            onClick={handleSubmit}
            loading={loading}
            colorScheme="primary"
          >
            Submit
          </Button>
        </div>
      </div>

      {htmlPreview && (
        <>
          <h1 className="text-xl font-semibold mt-4">{postTitle}</h1>

          <div
            className="mt-4 post-preview"
            dangerouslySetInnerHTML={{ __html: htmlPreview }}
          />

          <Image height={150} width={150} src={postImageUrl} />
        </>
      )}
    </React.Fragment>
  );
};

export default Editor;
