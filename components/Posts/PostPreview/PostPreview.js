import React from "react";
import Link from "next/link";

const PostPreview = ({ title, postId, children }) => {
  return (
    <div className="w-1/2 p-4 relative drop-shadow-sm border rounded-lg">
      <h2 className="mt-2 mb-4 font-medium">{title}</h2>

      <div className="pb-10">
        <div className="line-clamp-4">{children}</div>

        <div className="text-lg absolute right-0 bottom-4 pr-6 font-cursive whitespace-nowrap">
          <Link href={`/post/${postId}`}>See More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
