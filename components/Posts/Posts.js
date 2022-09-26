import React, { useEffect, useState } from "react";

import Carousel from "components/Carousel";
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
      <div className="flex justify-center">
        <div className="w-full grid grid-rows-2 grid-cols-3 gap-y-6">
          {formattedPosts.concat(formattedPosts)}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Posts;
