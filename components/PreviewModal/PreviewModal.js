import React, { useEffect, useState } from "react";
import { default as ReactModal } from "react-modal";

import markdownToHtml from "utils/markdownToHtml";
import IconButton from "components/UI/IconButton";
import closeIcon from "public/assets/icons/close-icon.svg";
import styles from "./PreviewModal.module.scss";

ReactModal.setAppElement("#layout");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    maxWidth: "800px",
    paddingTop: "3rem",
  },
};

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
        style={customStyles}
        contentLabel="Content Label"
      >
        <div className={styles.close_button}>
          <IconButton icon={closeIcon} onClick={onClose} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      </ReactModal>
    </React.Fragment>
  );
};

export default PreviewModal;
