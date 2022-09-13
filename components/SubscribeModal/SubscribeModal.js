import React, { useRef, useState } from "react";
import Modal from "react-modal";

import Stack from "components/UI/Stack";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import api from "utils/api";
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

    const response = await api.post("/subscribe", {
      name: nameRef.current.value,
      email: emailRef.current.value,
    });

    console.log("RESPONSE:", response.data);

    // setTimeout(() => {
    clearForm();
    setLoading(false);
    onClose();
    // }, 1500);
  };

  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
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
