import React, { useRef, useEffect } from "react";
import Script from "next/script";

import Button from "components/UI/Button";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

const UPLOAD_URL = () => `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

const FileInput = ({ onChange }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    console.log("E.TARGET:", e.target.files);
    onChange();
  };

  const uploader = useRef();
  useEffect(() => {
    uploader.current = cloudinary.createUploadWidget(
      {
        cloudName: "erinsblog",
        uploadPreset: "zdniolnp",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
  }, []);

  // uploadFile('https://res.cloudinary.com/demo/image/upload/sample.jpg')

  return (
    <div className="block">
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        // type="text/javascript"
        // strategy="beforeInteractive"
      />

      {/* <Button onClick={handleClick} classes={["ml-4"]}> */}
      <Button
        onClick={() => {
          if (uploader.current) {
            uploader.current.open();
          }
        }}
        classes={["ml-4"]}
      >
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
