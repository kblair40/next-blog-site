import React, { useState } from "react";

import Button from "components/UI/Button";
import styles from "./CommentInput.module.scss";

const CommentInput = () => {
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    setSaving(true);
    try {
      // post comment to db
    } catch (e) {
      console.error("FAILED TO POST COMMENT:", e);
    }
    setSaving(false);
  };

  return (
    <div className={styles.comment_input}>
      <textarea placeholder="Write a comment..." rows={3} />

      <div className={styles.comment_input__submit_btn}>
        <Button
          onClick={handleSubmit}
          styles={{
            width: "fit-content",
            // paddingLeft: ".5rem",
            // paddingRight: ".5rem",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
