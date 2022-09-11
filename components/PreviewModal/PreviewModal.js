import React, { useEffect, useState } from "react";
import { default as ReactModal } from "react-modal";

import markdownToHtml from "utils/md";
import IconButton from "components/UI/IconButton";
import closeIcon from "public/assets/icons/close-icon.svg";
import styles from "./PreviewModal.module.scss";

ReactModal.setAppElement("#layout");

const PreviewModal = ({ isOpen, onClose, markdown }) => {
  const [bodyContent, setBodyContent] = useState();

  useEffect(() => {
    const convertMarkdown = async () => {
      const result = await markdownToHtml(markdown);

      if (result) setBodyContent(result);
    };

    if (markdown) convertMarkdown();
  }, [markdown]);

  return (
    <React.Fragment>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Content Label"
        className={styles.preview_modal}
      >
        <div className={styles.close_button}>
          <IconButton icon={closeIcon} onClick={onClose} />
        </div>

        <div
          className={styles.preview_modal__content}
          dangerouslySetInnerHTML={{ __html: bodyContent }}
        />
      </ReactModal>
    </React.Fragment>
  );
};

export default PreviewModal;
