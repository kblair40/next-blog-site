import React, { useEffect, useState } from "react";
import { default as ReactModal } from "react-modal";

import markdownToHtml from "utils/markdownToHtml";
import styles from "./Modal.module.scss";

ReactModal.setAppElement("#layout");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modal = ({ isOpen, onClose, markdown }) => {
  const [bodyContent, setBodyContent] = useState();

  useEffect(() => {
    const convertMarkdown = async () => {
      const result = await markdownToHtml(markdown);

      if (result) setBodyContent(result);
    };

    if (markdown) convertMarkdown();
  }, [markdown]);

  const handleClose = () => {
    setOpened(false);
    onClose();
  };

  return (
    <div className={styles.container}>
      <ReactModal
        isOpen={isOpen}
        // onAfterOpen={() => setOpened(true)}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Content Label"
      >
        <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      </ReactModal>
    </div>
  );
};

export default Modal;
