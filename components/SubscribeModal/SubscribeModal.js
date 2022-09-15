import React, { useRef, useState, useEffect } from "react";
import Modal from "react-modal";
import classNames from "classnames";

import Stack from "components/UI/Stack";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import api from "utils/api";

import IconButton from "components/UI/IconButton";

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

  const baseClasses = [
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    "drop-shadow-xl rounded-xl min-h-50 py-4 px-6 bg-white",
    "flex flex-col",
    "w-5/6 sm:w-80 md:w-96",
  ];

  return (
    <Modal
      className={classNames(baseClasses)}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className="py-2">
        <p className="text-xl font-medium">Subscribe</p>
      </div>

      <IconButton
        icon={
          <svg
            className="w-5 h-5 fill-white"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.3086 17.3867L10.4414 18.2539C10.0742 18.6211 9.48047 18.6211 9.11719 18.2539L1.52344 10.6641C1.15625 10.2969 1.15625 9.70313 1.52344 9.33984L9.11719 1.74609C9.48437 1.37891 10.0781 1.37891 10.4414 1.74609L11.3086 2.61328C11.6797 2.98438 11.6719 3.58984 11.293 3.95312L6.58594 8.4375H17.8125C18.332 8.4375 18.75 8.85547 18.75 9.375V10.625C18.75 11.1445 18.332 11.5625 17.8125 11.5625H6.58594L11.293 16.0469C11.6758 16.4102 11.6836 17.0156 11.3086 17.3867Z" />
          </svg>
        }
      />

      <div className="mt-2 py-2">
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
