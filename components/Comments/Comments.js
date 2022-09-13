import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Comment from "./Comment";
import api from "utils/api";
import Loading from "components/UI/Loading";
import styles from "./Comments.module.scss";

const Comments = ({ postId }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const { query } = useRouter();

  useEffect(() => {
    // fetch comments, then set in state and set loading to false
    const fetchComments = async () => {
      if (query && query.id) {
        try {
          let comments = await api.get(`/comments/${postId}`);

          console.log("\n\nCOMMENTS RCVD:", comments, "\n\n");
          setComments(comments.data.data);
        } catch (e) {
          console.error("FAILED FETCHING COMMENTS:", comments);
        }
      }

      setLoading(false);
    };

    fetchComments();
  }, [query]);

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
        <React.Fragment>
          {comments.map((cmt, i) => {
            return <Comment key={i} comment={cmt} />;
          })}
        </React.Fragment>
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
