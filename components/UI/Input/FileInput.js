import React, { useRef, useEffect } from "react";
import Script from "next/script";

import Button from "components/UI/Button";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
// const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
// const API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

const FileInput = ({ onChange }) => {
  const uploader = useRef();

  useEffect(() => {
    uploader.current = cloudinary.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: "zdniolnp",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
  }, []);

  return (
    <div className="block">
      <Script src="https://upload-widget.cloudinary.com/global/all.js" />

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

      {/* <input
        ref={inputRef}
        type="file"
        accept="image/jpg image/jpeg image/png image/webp"
        onChange={handleChange}
        hidden
      /> */}
    </div>
  );
};

export default FileInput;
