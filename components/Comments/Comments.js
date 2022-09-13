import React, { useEffect, useState } from "react";

import Comment from "./Comment";
import Loading from "components/UI/Loading";
import styles from "./Comments.module.scss";

const Comments = ({ postId }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // fetch comments, then set in state and set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <CommentsLoading />;
  }

  return (
    <div className={styles.comments}>
      {loading ? (
        <CommentsLoading />
      ) : !loading && !comments.length ? (
        <NoComments />
      ) : (
        <div>Map over all comments here</div>
      )}

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Comments;

const CommentsLoading = () => {
  return (
    <div className={styles.comments__loading}>
      <Loading stroke="#000" />
    </div>
  );
};

const NoComments = () => {
  return (
    <div className={styles.comments__none}>
      <p>No Comments Yet</p>
    </div>
  );
};
