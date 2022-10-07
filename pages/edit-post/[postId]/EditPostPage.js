import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";

import api from "utils/api";
import Loading from "components/UI/Loading";
import styles from "./EditPostPage.module.css";
import { makeElement } from "utils/create-post";
import EditModal from "./EditModal";

const EditPostPage = ({ content, postId, imageUrl, title }) => {
  const [selectedSection, setSelectedSection] = useState();
  const [loading, setLoading] = useState(false);

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

  const handleClick = (i) => {
    setSelectedSection(i);
  };

  const handleSaveChanges = async (newValue, contentIdx) => {
    setLoading(true);
    console.log("NEW VALUE:", newValue);
    console.log("CONTENT INDEX:", contentIdx);
    const contentCopy = [...content];
    const contentItemCopy = { ...contentCopy[contentIdx] };
    console.log("\n\nCOPY AND ITEM:", { contentCopy, contentItemCopy });
    contentItemCopy.text = newValue;

    contentCopy[contentIdx] = contentItemCopy;

    try {
      const response = await api.patch(`/posts/${postId}`, {
        content: JSON.stringify(contentCopy),
      });
      console.log("\nRESPONSE:", response);
    } catch (e) {
      console.error("FAILED TO PATCH POST:", e);
    }

    setLoading(false);
  };

  return (
    <>
      <div className={classes}>
        <div className={previewClasses}>
          <div className="relative h-60 w-full md:h-80 md:w-3/4 rounded-sm overflow-hidden mb-6 md:mb-8 mx-auto">
            <Image
              src={imageUrl}
              alt="post image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <h1>{title}</h1>

          {content
            ? content.map((item, i) => {
                return (
                  <div
                    onClick={() => handleClick(i)}
                    className={styles.editable}
                    key={i}
                  >
                    {makeElement(item)}
                  </div>
                );
              })
            : null}
        </div>
      </div>

      {loading && <FullScreenSaving />}

      <EditModal
        // if 0, still want modal to open
        contentIndex={selectedSection}
        onSaveChanges={handleSaveChanges}
        isOpen={selectedSection !== undefined}
        onClose={() => setSelectedSection(undefined)}
        content={content[selectedSection]}
      />
    </>
  );
};

export default EditPostPage;

const FullScreenSaving = () => {
  return (
    <div className="fixed text-xl font-semibold flex-col top-0 left-0 right-0 bottom-0 w-screen h-screen bg-slate-300/50 flex justify-center items-center">
      Saving
      <Loading />
    </div>
  );
};
