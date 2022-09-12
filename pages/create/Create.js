import React from "react";

import Editor from "./Editor";
import styles from "./Create.module.scss";
import api from "utils/api";

const Create = () => {
  const handleSubmit = async ({ title, content }) => {
    console.log("HANDLE SUBMIT RCVD:", { title, content });

    try {
      const res = await api.post("/posts", { title, content });
      console.log("RESPONSE:", res);
    } catch (err) {
      console.error("FAILED TO POST:", err);
    }
    //
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Editor onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Create;
