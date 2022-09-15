import React, { useState, useRef } from "react";
import { useRouter } from "next/router";

import api from "utils/api";
import Button from "components/UI/Button";
import Input from "components/UI/Input";
import Stack from "components/UI/Stack";
import classNames from "classnames";

const CommentInput = () => {
  const [saving, setSaving] = useState(false);

  const { query } = useRouter();

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

    if (!data.name || !data.email || !data.comment) {
      // Todo: set error here instead
      return null;
    }

    if (!query.id) {
      // Todo: set generalized error - make sure user is aware the issue is on our end, not their's
      return null;
    }

    try {
      // post comment to db
      const response = await api.post("/comments", {
        postId: query.id,
        ...data,
      });

      console.log("RESPONSE:", response);
    } catch (e) {
      console.error("FAILED TO POST COMMENT:", e);
    }

    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  const textareaClasses = classNames([
    "block",
    "border",
    "rounded-lg",
    "w-full",
    "mt-4",
    "p-2",
    "border-slate-300",
    "hover:border-slate-400",
    "focus-visible:outline-0",
    "focus:border-slate-500",
    "duration-300",
  ]);

  return (
    <div className="mt-10">
      <Stack direction="column">
        <Input ref={nameRef} placeholder="Name (required)" />
        <Input ref={emailRef} placeholder="Email (required)" />
      </Stack>

      <textarea
        ref={commentRef}
        className={textareaClasses}
        placeholder="Write a comment..."
        rows={2}
      />

      <div className="mt-2 flex justify-end">
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
