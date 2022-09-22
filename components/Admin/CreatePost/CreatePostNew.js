import React, { useState, useRef } from "react";
import classNames from "classnames";

import ContentInput from "./ContentInput";
import ContentOptions from "./ContentOptions";
import CreatePreview from "./CreatePreview";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const CreatePostNew = () => {
  const [postTitle, setPostTitle] = useState("");
  const [selectedEl, setSelectedEl] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [contentArray, setContentArray] = useState([]);

  const contentRef = useRef();

  const handleSubmit = async () => {
    setContentArray((prev) => [
      ...prev,
      {
        text: contentRef.current.value,
        el: selectedEl,
        classes: classNames(selectedClasses.map((cls) => cls.value)),
      },
    ]);
  };

  const handleChangeClasses = (val) => {
    console.log("CLASSES VALUE:", val);
    setSelectedClasses(val);
  };

  const undo = () => {
    const copy = [...contentArray];
    copy.pop();
    setContentArray(copy);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center w-screen">
        <div className="flex flex-col space-y-4 items-center w-4/5">
          <div className="w-full">
            <Input
              placeholder="Post Title"
              classes={["w-60"]}
              onChange={(val) => setPostTitle(val)}
            />
          </div>

          <ContentInput ref={contentRef} />

          <div className="w-full flex items-center justify-between flex-wrap space-x-4">
            <ContentOptions
              selectedEl={selectedEl}
              onChangeEl={(el) => setSelectedEl(el)}
              selectedClasses={selectedClasses}
              onChangeClasses={handleChangeClasses}
            />

            <Button onClick={handleSubmit}>Add Content</Button>
            <Button classes={["text-sm px-1"]} onClick={undo}>
              undo
            </Button>
          </div>

          <CreatePreview content={contentArray} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePostNew;
