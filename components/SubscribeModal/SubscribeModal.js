import React, { useRef, useState } from "react";
import Modal from "react-modal";

import Stack from "components/UI/Stack";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import styles from "./SubscribeModal.module.scss";

Modal.setAppElement("#layout");

const SubscribeModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async () => {
    setLoading(true);
    console.log("VALUES:", {
      name: nameRef.current.value,
      email: emailRef.current.value,
    });

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onClose}>
      <div className={styles.modal__header}>
        <p className={styles.modal__title}>Subscribe</p>
      </div>

      <div className={styles.modal__body}>
        <Stack direction="column">
          <Input ref={nameRef} placeholder="Your name (optional)" />
          <Input ref={emailRef} placeholder="Your email (required)" />
          <Button loading={loading} onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </div>
    </Modal>
  );
};

export default SubscribeModal;
