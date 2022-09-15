import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import api from "utils/api";
import Comment from "./Comment";
import Loading from "components/UI/Loading";
import Stack from "components/UI/Stack";

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
    <div className="pt-8 pb-4">
      <h1 className="text-2xl font-semibold">Comments</h1>
      {loading ? (
        <CommentsLoading />
      ) : !loading && !comments.length ? (
        <NoComments />
      ) : (
        <div className="pt-4">
          <Stack direction="column">
            {comments.map((cmt, i) => {
              return <Comment key={i} comment={cmt} />;
            })}
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Comments;

const CommentsLoading = () => {
  return (
    <div className="flex justify-center items-center h-24 mb-4">
      <Loading stroke="#000" />
    </div>
  );
};

const NoComments = () => {
  return (
    <div className="flex justify-center items-center h-24 mb-4">
      <p>No Comments Yet</p>
    </div>
  );
};
