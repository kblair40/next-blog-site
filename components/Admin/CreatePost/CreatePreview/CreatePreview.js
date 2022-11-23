import React, { useState } from "react";
import classNames from "classnames";
import { Button } from "@chakra-ui/react";

// import Button from "components/UI/Button";
import { makeElement } from "utils/create-post";

// import BlogPost from "components/BlogPost";

const CreatePreview = ({ content, postTitle }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const btnClasses = {
    "fixed bottom-1 left-1": isFullScreen,
  };

  const classes = classNames({
    "w-full": true,
    "fixed top-12 right-0 bottom-0 left-0 h-screen-nav w-screen bg-white":
      isFullScreen,
    "flex justify-center": isFullScreen,
    "no-border pt-8": isFullScreen,
    "live-blog-post": true,
    "px-4 md:px-6": true,
  });

  const previewClasses = classNames({
    "w-full pt-2": true,
    "pt-8": !isFullScreen,
    "max-w-[460px] md:max-w-[740px] lg:max-w-[940px]": true,
    "mx-auto": true,
  });

  return (
    <div className={classes}>
      <Button
        mt="1px"
        onClick={() => setIsFullScreen((prev) => !prev)}
        isDisabled={!content.length}
      >
        Full Screen
      </Button>

      <div className={previewClasses}>
        <h1>{postTitle}</h1>
        {Array.isArray(content) && content.length
          ? content.map((elObj, i) => {
              return makeElement(elObj, i);
            })
          : null}
      </div>
    </div>
  );
};

export default CreatePreview;
