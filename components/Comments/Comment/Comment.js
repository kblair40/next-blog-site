import React from "react";

import styles from "./Comment.module.scss";
import { getRelativeTime } from "utils/dateHelpers";

const Comment = ({ comment }) => {
  console.log("\nCOMMENT:", comment);
  return (
    <div className={styles.comment}>
      <div className={styles.comment__name_and_time}>
        <p className={styles.comment__name}>{comment.name}</p>
        <p className={styles.comment__time}>
          {getRelativeTime(new Date(comment.createdAt).getTime() / 1000)}
        </p>
      </div>

      <p className={styles.comment__text}>{comment.comment}</p>
    </div>
  );
};

export default Comment;
