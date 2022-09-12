import React from "react";

import Editor from "./Editor";
import Input from "components/UI/Input";
import styles from "./Create.module.scss";

const Create = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Editor />
      </div>

      <div className={styles.container__input}>
        <Input />
      </div>
    </div>
  );
};

export default Create;
