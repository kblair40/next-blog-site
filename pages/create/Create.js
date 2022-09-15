import React, { useState } from "react";

import Editor from "./Editor";
import api from "utils/api";

const Create = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ title, content }) => {
    setLoading(true);
    console.log("HANDLE SUBMIT RCVD:", { title, content });

    try {
      const res = await api.post("/posts", { title, content });
      // console.log("RESPONSE:", res);
    } catch (err) {
      console.error("FAILED TO POST:", err);
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="pt-4 flex flex-col items-center justify-center">
      <div className="w-[80vw]">
        <Editor onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
};

export default Create;
