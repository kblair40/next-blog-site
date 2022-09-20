/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import classNames from "classnames";

import api from "utils/api";
import LocalInput from "components/Admin/LocalInput";
import { formatDateToLocale } from "utils/dateHelpers";
// import Comments from "components/Comments";
// import Input from "components/UI/Input";
import Button from "components/UI/Button";
import Loading from "components/UI/Loading";

const AllComments = () => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const response = await api.get("/comments");
        console.log("ALL COMMENTS (CLIENT):", response);
        if (!response.data.success) {
          setError(true);
          setLoading(false);
          return;
        }

        setAllComments(response.data.data);
      } catch (e) {
        console.error("FAILED TO FETCH COMMENTS:", e);
      }

      setLoading(false);
    };

    fetchAllComments();
  }, []);

  if (!loading && !allComments.length && !error) {
    return (
      <div className="flex justify-center">
        <p>No Comments</p>
      </div>
    );
  } else if (!loading && error) {
    return (
      <div className="flex justify-center">
        <p className="text-red-600 font-medium text-lg">
          Error fetching comments
        </p>
      </div>
    );
  } else if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <div>
      <div className="flex flex-col mb-4 -mt-4">
        <p className="font-semibold text-lg">NOTE: </p>
        <p>Status = 1: Approved (will be shown on post page)</p>
        <p>
          Status = 2: Not yet approved, so it will not be shown yet (default)
        </p>
        <p>
          Status = 3: Rejected by one of us, so it also will not be shown. I'll
          have these comments deleted every few weeks.
        </p>
      </div>

      <div className="space-y-2">
        {allComments.map((cmt, i) => {
          return <CommentCard comment={cmt} key={i} />;
        })}
      </div>
    </div>
  );
};

export default AllComments;

const CommentCard = ({ comment, handleSubmit }) => {
  // console.log("CMT RCVD:", comment);
  const labelClasses = classNames([
    "font-semibold w-20 text-sm whitespace-nowrap",
  ]);

  const rowClasses = classNames(["flex space-x-2 items-center"]);

  return (
    <div className="px-4 py-2 rounded-md border border-slate-300 space-y-2">
      <div className={rowClasses}>
        <p className={labelClasses}>Created:</p>
        <p>{formatDateToLocale(comment.createdAt)}</p>
      </div>

      <div className={rowClasses}>
        <p className={labelClasses}>Post Title:</p>
        <p>{comment.postId.title}</p>
      </div>

      <div className={rowClasses}>
        <p className={labelClasses}>Email:</p>
        <p>{comment.email}</p>
      </div>

      <div className={rowClasses}>
        <p className={labelClasses}>Status:</p>
        <LocalInput defaultValue={comment.status} type="number" />
      </div>

      <div className={classNames(["flex space-x-2 pb-4"])}>
        <p className={labelClasses}>Comment:</p>
        <p className="leading-snug">
          {comment.comment}
          {comment.comment}
          {comment.comment}
        </p>
      </div>

      <Button onClick={() => handleSubmit(postVal._id)}>Save Changes</Button>
    </div>
  );
};
