import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

import api from "utils/api";
import Loading from "components/UI/Loading";
import styles from "./EditPostPage.module.css";
import { makeElement } from "utils/create-post";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const EditPostPage = ({
  content,
  postId,
  imageUrl,
  title,
  handleChangeContent,
}) => {
  const [selectedSection, setSelectedSection] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [insertLocation, setInsertLocation] = useState(); // 'above' | 'below'
  const [sectionToDelete, setSelectionToDelete] = useState();
  const [addContentSection, setAddContentSection] = useState();
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
  });

  const handleClickSection = (i) => {
    setSelectedSection(i);
  };

  const saveContent = async (rawContent) => {
    try {
      const response = await api.patch(`/posts/${postId}`, {
        content: JSON.stringify(rawContent),
      });

      // tells parent to render page with updated content
      let newContent = JSON.parse(response.data.content);
      handleChangeContent(newContent);
    } catch (e) {
      console.error("FAILED TO PATCH POST:", e);
    }
  };

  const handleSaveChanges = async (newValue, contentIdx) => {
    setLoading(true);
    const contentCopy = [...content];
    const contentItemCopy = { ...contentCopy[contentIdx] };
    contentItemCopy.text = newValue;

    contentCopy[contentIdx] = contentItemCopy;

    await saveContent(contentCopy);

    setLoading(false);
  };

  const handleClickDelete = (i) => {
    setSelectionToDelete(i);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    const contentCopy = [...content];
    contentCopy.splice(sectionToDelete, 1);

    await saveContent(contentCopy);

    setLoading(false);
  };

  const deleteBtnClasses = classNames([
    "absolute top-0 w-8 h-8 flex justify-center items-center hover:bg-slate-100 duration-200 -right-12",
  ]);

  const addBtnClasses = classNames([
    "absolute top-0 w-8 h-8 flex justify-center items-center hover:bg-slate-100 duration-200 -left-12",
  ]);

  const handleClickAddContent = (i) => {
    setAddModalOpen(true);
    setAddContentSection(i);
  };

  const handleAddNewContent = async (newContent) => {
    setLoading(true);
    const contentCopy = [...content];

    let spliceIdx =
      insertLocation === "above" ? addContentSection : addContentSection + 1;

    contentCopy.splice(spliceIdx, 0, newContent);

    console.log("\nCONTENT COPY NOW:", contentCopy);

    setLoading(false);
    // return;

    await saveContent(contentCopy);

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
                  <div className="relative" key={i}>
                    <div
                      onClick={() => handleClickSection(i)}
                      className={`${styles.editable}`}
                    >
                      {makeElement(item)}

                      <div
                        className={deleteBtnClasses}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClickDelete(i);
                        }}
                      >
                        X
                      </div>

                      <div
                        className={addBtnClasses}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClickAddContent(i);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>

      {loading && <FullScreenSaving />}

      {selectedSection !== undefined && (
        <EditModal
          // if 0, still want modal to open
          contentIndex={selectedSection}
          onSaveChanges={handleSaveChanges}
          isOpen={selectedSection !== undefined}
          onClose={() => setSelectedSection(undefined)}
          content={content[selectedSection]}
        />
      )}

      {deleteModalOpen && (
        <ConfirmDeleteModal
          handleConfirm={handleConfirmDelete}
          isOpen={deleteModalOpen}
          onClose={() => {
            setSelectionToDelete(undefined);
            setDeleteModalOpen(false);
          }}
        />
      )}

      {addModalOpen && (
        <AddModal
          isOpen={addModalOpen}
          onClose={() => setAddModalOpen(false)}
          onChangeInsertLocation={setInsertLocation}
          onSave={handleAddNewContent}
          insertLocation={insertLocation}
        />
      )}

      <BackToAdmin />
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

const BackToAdmin = () => {
  return (
    <div className="fixed top-2 left-2">
      <Link href="/admin" legacyBehavior>
        <a className="text-sm font-semibold">Back to Admin</a>
      </Link>
    </div>
  );
};
