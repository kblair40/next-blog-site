import React, { useRef, useState } from "react";

import Button from "components/UI/Button";

const FileInput = ({ onChange }) => {
  const [file, setFile] = useState(null);

  const inputRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
    setFile(file);
  };

  const handleClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="mt-4">
      <input
        ref={inputRef}
        onChange={handleChange}
        type="file"
        accept=""
        hidden
      />
      <Button onClick={handleClick}>Upload Post File</Button>
    </div>
  );
};

export default FileInput;
