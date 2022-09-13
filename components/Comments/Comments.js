import React, { useEffect, useState } from "react";

import Comment from "./Comment";
import styles from "./Comments.module.scss";

const Comments = ({ postId }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // fetch comments, then set in state and set loading to false
  }, []);

  return (
    <div className={styles.comments}>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Comments;
