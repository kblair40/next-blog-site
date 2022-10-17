import React, { useRef, useState, useEffect } from "react";
import Modal from "react-modal";
import classNames from "classnames";

import Stack from "components/UI/Stack";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import api from "utils/api";

// Modal.setAppElement("#layout");

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
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log("\nVALUES:", { name, email });

    if (!name || !email) return;
    setLoading(true);

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

  const baseClasses = [
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    "drop-shadow-xl rounded-xl min-h-50 py-4 px-6 bg-white",
    "flex flex-col",
    "w-5/6 sm:w-80 md:w-96 z-50",
  ];

  return (
    <Modal
      className={classNames(baseClasses)}
      isOpen={isOpen}
      overlayClassName="z-40 bg-black/40 fixed top-0 left-0 right-0 bottom-0"
      onRequestClose={onClose}
      shouldFocusAfterRender={false}
    >
      <div className="py-2">
        <p className="text-xl font-medium">Subscribe</p>
      </div>

      <div className="mt-2 py-2">
        <Stack direction="column">
          <Input
            classes={["w-full"]}
            ref={nameRef}
            placeholder="Your name (optional)"
          />
          <Input
            classes={["w-full"]}
            ref={emailRef}
            placeholder="Your email (required)"
          />
          <Button classes={["w-full"]} loading={loading} onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </div>
    </Modal>
  );
};

export default SubscribeModal;
