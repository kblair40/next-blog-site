import React from "react";

import { getRelativeTime } from "utils/dateHelpers";

const Comment = ({ comment }) => {
  console.log("\nCOMMENT:", comment);
  return (
    <div className="px-2 py-4 rounded-lg bg-faint">
      <div className="flex items-end mb-3">
        <p className="text-lg font-medium mr-2 leading-none">{comment.name}</p>

        <p className="text-slate-500 text-sm leading-none">
          {getRelativeTime(new Date(comment.createdAt).getTime() / 1000)}
        </p>
      </div>

      <p className="pl-4">{comment.comment}</p>
    </div>
  );
};

export default Comment;
