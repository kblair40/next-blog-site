import React, { useEffect, useState } from "react";

import PostPreview from "./PostPreview";

const Posts = ({ posts, category }) => {
  const [formattedPosts, setFormattedPosts] = useState();

  useEffect(() => {
    console.log("POSTS:", posts);
    if (posts && posts.length) {
      let postComponents = [];
      for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let postComponent = (
          <PostPreview key={i} post={post} category={category} />
        );
        postComponents.push(postComponent);
      }

      setFormattedPosts(postComponents);
    }
  }, [posts]);

  if (formattedPosts) {
    return (
      <div className="flex justify-center px-1 sm:px-2 md:px-3">
        <div className="w-full grid auto-rows-min grid-cols-2 md:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-6">
          {formattedPosts.concat(formattedPosts)}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Posts;
