import React, { useRef, useState, useEffect } from "react";
import Modal from "react-modal";

import Stack from "components/UI/Stack";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import api from "utils/api";
import styles from "./SubscribeModal.module.scss";

Modal.setAppElement("#layout");

const SubscribeModal = ({ isOpen, onClose, onSubscribe }) => {
  const [loading, setLoading] = useState(false);
  const [elementSet, setElementSet] = useState(false);

  useEffect(() => {
    if (document.querySelector("#layout")) {
      Modal.setAppElement("#layout");
      setElementSet(true);
    }
  }, []);

  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async () => {
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log("\nVALUES:", { name, email });

    if (name && email) onSubscribe();

    const response = await api.post("/subscribe", { name, email });
    // console.log("RESPONSE:", response.data, "\n");

    clearForm();
    setLoading(false);
    onClose();
  };

  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  if (!elementSet) {
    return <div />;
  }

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
