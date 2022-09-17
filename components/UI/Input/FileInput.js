import React, { useRef } from "react";

import Button from "components/UI/Button";

const FileInput = ({ onChange }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    console.log("E.TARGET:", e.target.files);
    onChange();
  };

  return (
    <div className="block">
      <Button onClick={handleClick} classes={["ml-4"]}>
        Upload Image
      </Button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpg image/jpeg image/png image/webp"
        onChange={handleChange}
        hidden
      />
    </div>
  );
};

export default FileInput;
