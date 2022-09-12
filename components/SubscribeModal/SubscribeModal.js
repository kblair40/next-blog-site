import React from "react";
import Modal from "react-modal";

import styles from "./SubscribeModal.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minHeight: "200px",
  },
};

Modal.setAppElement("#layout");

const SubscribeModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
    ></Modal>
  );
};

export default SubscribeModal;
