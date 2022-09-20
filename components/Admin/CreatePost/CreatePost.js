import React, { useState } from "react";
import classNames from "classnames";

import LocalInput from "components/Admin/LocalInput";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import FileInput from "components/Admin/FileInput";
import GoogleTest from "components/Admin/GoogleTest";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [status, setStatus] = useState("2");
  const [postFile, setPostFile] = useState(null);

  const labelClasses = classNames([
    "font-medium whitespace-nowrap w-24 text-right",
  ]);

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="flex flex-col space-y-4 items-center w-80">
          <div className="flex items-center space-x-2 w-full">
            <p className={labelClasses}>Title:</p>
            <Input onChange={(val) => setPostTitle(val)} />
          </div>

          <div className="flex items-center space-x-2 w-full">
            <p className={labelClasses}>Image URL:</p>
            <Input onChange={(val) => setPostImageUrl(val)} />
          </div>

          <div className="w-80">
            <div className="flex items-center space-x-2 w-full">
              <p className={labelClasses}>Status:</p>
              <LocalInput
                defaultValue={2}
                type="number"
                onChange={(val) => setStatus(val)}
              />
            </div>

            <div className="flex justify-end mt-1 space-x-4 text-sm text-slate-600">
              <p>1 = show immediately</p>
              <p>2 = hidden</p>
            </div>
          </div>

          <div>
            <FileInput onChange={(file) => setPostFile(file)} />
            {postFile ? (
              <div className="flex space-x-2 mt-1">
                <p className="font-medium">File Name:</p>
                <p>{postFile}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="max-w-3xl">
          <GoogleTest />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePost;
