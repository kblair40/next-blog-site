import React from "react";
import Modal from "react-modal";

import Input from "components/UI/Input";
import styles from "./SubscribeModal.module.scss";

Modal.setAppElement("#layout");

const SubscribeModal = ({ isOpen, onClose }) => {
  return (
    <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onClose}>
      <div className={styles.modal__header}>
        <p className={styles.modal__title}>Subscribe</p>
      </div>

      <div className={styles.modal__body}>
        <Input />
        <Input />
      </div>
    </Modal>
  );
};

export default SubscribeModal;
