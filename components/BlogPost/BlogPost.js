import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { makeElement } from "utils/create-post";
// import Loading from "components/UI/Loading";

const BlogPost = ({ postContent, postImage, postTitle }) => {
  postContent = JSON.parse(postContent);

  const classes = classNames({
    "w-full mt-4": true,
    "px-4 sm:px-8 flex justify-center": true,
    "no-border live-blog-post": true,
  });

  const previewClasses = classNames({
    "w-full pt-6": true,
    "max-w-[460px] md:max-w-[740px] lg:max-w-[940px]": true,
  });

  return (
    <div className={classes}>
      <div className={previewClasses}>
        <div className="relative h-60 w-full md:h-80 md:w-3/4 rounded-sm overflow-hidden mb-6 md:mb-8 mx-auto">
          <Image
            src={postImage}
            alt="post image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1>{postTitle}</h1>

        {Array.isArray(postContent) && postContent.length
          ? postContent.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null}
      </div>
    </div>
  );
};

export default BlogPost;
