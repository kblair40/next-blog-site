import React from "react";
import { useRouter } from "next/router";

// import api from "utils/api";
// import md from "utils/md";
// import Comments from "components/Comments";
// import CommentInput from "components/CommentInput";
import GoBack from "components/GoBack";
import BlogPost from "components/BlogPost";

const PostPageNew = () => {
  const router = useRouter();

  return (
    <div className="px-4 overflow-x-hidden overflow-y-auto flex flex-col items-center max-w-screen">
      {/* max-w = 896px;  min-h = 300px; */}
      <div className="w-full max-w-4xl">
        <GoBack route="/" label="Back" />
      </div>

      <BlogPost postId={router.query.id} />
    </div>
  );
};

export default PostPageNew;
