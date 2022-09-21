/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { toast } from "react-toastify";

import Statuses from "components/Admin/Statuses";

import api from "utils/api";
import LocalInput from "components/Admin/LocalInput";
import { formatDateToLocale } from "utils/dateHelpers";
import Button from "components/UI/Button";
import Loading from "components/UI/Loading";

const AllComments = () => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [checkedStatuses, setCheckedStatuses] = useState([1, 2, 3]);

  const fetchComments = async (updatedStatuses = null) => {
    try {
      const response = await api.get("/comments", {
        params: {
          statuses: updatedStatuses ? updatedStatuses : checkedStatuses,
        },
      });

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

  useEffect(() => {
    fetchComments();
  }, []);

  const handleStatusesChange = async (statuses) => {
    setLoading(true);

    let newStatuses = [];
    statuses.forEach((status, i) => {
      const [val, checked] = Object.entries(status)[0];
      if (checked) newStatuses.push(parseInt(val));
    });

    setCheckedStatuses(newStatuses);
    await fetchComments(newStatuses);
    setLoading(false);
  };

  if (!loading && error) {
    return (
      <div className="flex justify-center">
        <p className="text-red-600 font-medium text-lg">
          Error fetching comments
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="mb-4">
        <Statuses statusOptions={[1, 2, 3]} onChange={handleStatusesChange} />
      </div>
      <div className="flex flex-col mb-4">
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

      {loading ? (
        <Loading fullScreen />
      ) : !loading && !allComments.length && !error ? (
        <div className="flex justify-center">
          <p>No Comments</p>
        </div>
      ) : (
        <div className="space-y-2">
          {allComments.map((cmt, i) => {
            return <CommentCard comment={cmt} key={i} />;
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default AllComments;

const CommentCard = ({ comment }) => {
  const [status, setStatus] = useState(comment ? comment.status : undefined);

  // compare with value of status (state) and only allow patch if they are different
  const initialStatus = useRef(comment.status);

  const handleSubmit = async () => {
    const toastConfig = {
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: false,
      autoClose: 8000,
    };

    if (initialStatus.current == status) {
      let msg =
        "No changes found, so not updating.  Let me know if you did actually change the status, because you shouldn't be seeing this if you did.";
      toast.error(msg, toastConfig);
      return;
    }
    try {
      const response = await api.patch("/comments", {
        status,
        commentId: comment._id,
      });

      toast.success("Updated status!", toastConfig);
      console.log("\n\nPATCH RESPONSE:", response.data);
    } catch (e) {
      console.error("FAILED PATCHING COMMENT" + comment._id + ":", e);
    }
  };

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
        <LocalInput
          onChange={(e) => setStatus(e.target.value)}
          defaultValue={status}
          type="number"
        />
      </div>

      <div className={classNames(["flex space-x-2 pb-4"])}>
        <p className={labelClasses}>Comment:</p>
        <p className="leading-snug">
          {comment.comment}
          {comment.comment}
          {comment.comment}
        </p>
      </div>

      <Button size="sm" onClick={handleSubmit}>
        Save Changes
      </Button>
    </div>
  );
};
