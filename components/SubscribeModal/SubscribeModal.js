import React from "react";
import Modal from "react-modal";

import Stack from "components/UI/Stack";
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
        <Stack direction="column">
          <Input />
          <Input />
          <Input />
        </Stack>
      </div>
    </Modal>
  );
};

export default SubscribeModal;
