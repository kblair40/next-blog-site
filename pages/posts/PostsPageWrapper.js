import React from "react";
import classNames from "classnames";

const PostsPageWrapper = ({ children }) => {
  const wrapperClasses = classNames({
    // "border border-red-400": true,
    "w-screen px-6": true,
    "flex justify-center": true,
  });

  const innerWrapperClasses = classNames({
    // "border border-blue-400": true,
    "w-full": true,
    "max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl": true,
    "pt-6": true,
  });

  return (
    <div className={wrapperClasses}>
      <div className={innerWrapperClasses}>{children}</div>
    </div>
  );
};

export default PostsPageWrapper;
