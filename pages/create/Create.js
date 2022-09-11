import React from "react";

import Editor from "./Editor";
import styles from "./Create.module.scss";

const Create = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Editor />
      </div>
    </div>
  );
};

export default Create;
