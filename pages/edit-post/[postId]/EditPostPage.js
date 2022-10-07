import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./EditPostPage.module.css";
import { makeElement } from "utils/create-post";

const EditPostPage = ({ content, postId, imageUrl, title }) => {
  const classes = classNames({
    "w-full mt-4": true,
    "px-4 sm:px-8 flex justify-center": true,
    "no-border": true,
    "live-blog-post": true,
  });

  const previewClasses = classNames({
    "w-full pt-6": true,
    "max-w-[460px] md:max-w-[740px] lg:max-w-[940px]": true,
    // [`${styles.border_wrapper}`]: true,
  });

  return (
    <div className={classes}>
      <div className={previewClasses}>
        <div className="relative h-60 w-full md:h-80 md:w-3/4 rounded-sm overflow-hidden mb-6 md:mb-8 mx-auto">
          <Image
            src={imageUrl}
            alt="post image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1>{title}</h1>

        {content
          ? content.map((item, i) => {
              return (
                <div className={styles.editable} key={i}>
                  {makeElement(item)}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default EditPostPage;
