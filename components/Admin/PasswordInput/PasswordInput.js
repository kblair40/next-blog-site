import React, { useState, useRef } from "react";

import Modal from "components/UI/Modal";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const PasswordInput = ({ onValidSubmit }) => {
  const [showModal, setShowModal] = useState(true);
  const inputRef = useRef();

  const handleSubmit = () => {
    const inputVal = inputRef.current.value;
    console.log("\n\nINPUT VAL:", inputVal, "\n\n");

    if (inputVal === "1379") {
      setShowModal(false);
      onValidSubmit();
    }
  };

  return (
    <Modal
      isOpen={showModal}
      onClose={() => console.log("CANT CLOSE THIS MODAL")}
      closable={false}
      shouldCloseOnOverlayClick={false}
    >
      <div className="mt-8 w-full flex flex-col space-y-6">
        <Input placeholder="Admin Password" ref={inputRef} />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default PasswordInput;
