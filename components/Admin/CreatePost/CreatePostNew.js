import React, { useState, useRef } from "react";
import classNames from "classnames";

import ContentInput from "./ContentInput";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const CreatePostNew = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedEl, setSelectedEl] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);

  const contentRef = useRef();

  const handleSubmit = async () => {
    console.log("CONTENT VALUE:", contentRef.current.value);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center w-screen">
        <div className="flex flex-col space-y-4 items-center w-4/5">
          <div className="flex items-center justify-center space-x-2 w-full">
            <p className="font-medium">Title:</p>
            <Input onChange={(val) => setPostTitle(val)} />
          </div>

          <ContentInput ref={contentRef} />

          <div className="w-full">
            <Button onClick={handleSubmit}>Add Content</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePostNew;
