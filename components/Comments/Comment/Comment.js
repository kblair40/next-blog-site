import React from "react";

import { getRelativeTime } from "utils/dateHelpers";

const Comment = ({ comment }) => {
  return (
    <div className="px-2 py-4 rounded-lg bg-slate-50">
      <div className="flex items-end mb-3">
        <p className="text-lg font-medium mr-2 leading-none">{comment.name}</p>

        <p className="text-slate-500 text-sm leading-none">
          {getRelativeTime(new Date(comment.createdAt).getTime() / 1000)}
        </p>
      </div>

      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
