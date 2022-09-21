import React, { useState, useRef } from "react";
import classNames from "classnames";

import ContentInput from "./ContentInput";
import ContentOptions from "./ContentOptions";
import CreatePreview from "./CreatePreview";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const CreatePostNew = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedEl, setSelectedEl] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [contentArray, setContentArray] = useState([]);

  const contentRef = useRef();
  const previewRef = useRef();

  const makeTags = (el) => {
    if (!selectedClasses || !selectedClasses.length) {
      return [`<${el}>`, `</${el}>`];
    } else {
      let classes = selectedClasses.map((cls) => cls.value).join(" ");
      console.log("\n\nCLASSES:", classes, "\n\n");
      return [`<${el} className='${classes}'>`, `</${el}>`];
    }
  };

  const handleSubmit = async () => {
    console.log("CONTENT VALUE:", contentRef.current.value);
    const [open, close] = makeTags(selectedEl.value);
    console.log("OPEN/CLOSE:", { open, close });

    const newContent = [open, contentRef.current.value, close].join("");
    console.log("\n\nNEW CONTENT:", newContent, "\n");

    setPostContent(postContent + newContent);
    setContentArray((prev) => [
      ...prev,
      {
        text: contentRef.current.value,
        el: selectedEl,
        classes: classNames(selectedClasses.map((cls) => cls.value)),
      },
    ]);

    // previewRef.current.innerHTML = postContent + newContent;
  };

  const handleChangeClasses = (val) => {
    console.log("CLASSES VAL:", val);
    setSelectedClasses(val);
    // use multi-select
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

          <div className="w-full flex items-center justify-between flex-wrap space-x-4">
            <ContentOptions
              selectedEl={selectedEl}
              onChangeEl={(el) => setSelectedEl(el)}
              selectedClasses={selectedClasses}
              onChangeClasses={handleChangeClasses}
            />
            <Button onClick={handleSubmit}>Add Content</Button>
          </div>

          <CreatePreview content={contentArray} />

          {/* <div className="pt-8 w-full">
            <div ref={previewRef} dangerouslySetInnerHTML={{ __html: null }} />
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePostNew;
