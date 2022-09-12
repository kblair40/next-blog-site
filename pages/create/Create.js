import React from "react";

import Editor from "./Editor";
// import Input from "components/UI/Input";
// import Button from "components/UI/Button";
import styles from "./Create.module.scss";
import api from "utils/api";

const Create = () => {
  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Editor />
      </div>

      {/* <div className={styles.container__input}>
        <Input />
      </div> */}

      {/* <div className={styles.container__submit_btn}>
        <Button onClick={}>Submit</Button>
      </div> */}
    </div>
  );
};

export default Create;
