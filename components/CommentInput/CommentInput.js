import React, { useState, useRef } from "react";

import Button from "components/UI/Button";
import Input from "components/UI/Input";
import Stack from "components/UI/Stack";
import styles from "./CommentInput.module.scss";

const CommentInput = () => {
  const [saving, setSaving] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const handleSubmit = async () => {
    setSaving(true);
    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      comment: commentRef.current?.value,
    };

    console.log("\nCOMMENT DATA:", data, "\n");

    if (!data.name || !data.email || !data.comment) {
      // Todo: set error here instead
      return null;
    }

    try {
      // post comment to db
    } catch (e) {
      console.error("FAILED TO POST COMMENT:", e);
    }

    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  return (
    <div className={styles.comment_input}>
      <Stack direction="column">
        <Input ref={nameRef} placeholder="Name (required)" />
        <Input ref={emailRef} placeholder="Email (required)" />
      </Stack>

      <textarea ref={commentRef} placeholder="Write a comment..." rows={4} />

      <div className={styles.comment_input__submit_btn}>
        <Button
          loading={saving}
          onClick={handleSubmit}
          styles={{
            width: "fit-content",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
