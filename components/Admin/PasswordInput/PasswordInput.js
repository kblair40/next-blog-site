import React, { useState, useEffect, useRef } from "react";

import Modal from "components/UI/Modal";
import Input from "components/UI/Input";
import Button from "components/UI/Button";

const PasswordInput = ({ onAuthenticated }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    const password = localStorage.getItem("admin-password");

    if (password && password === "1379") {
      setAuthenticated(true);
      onAuthenticated();
    } else {
      setShowModal(true);
    }

    setChecked(true);
  }, []);

  const handleSubmit = () => {
    const inputVal = inputRef.current.value;
    console.log("\n\nINPUT VAL:", inputVal, "\n\n");

    if (inputVal === "1379") {
      onAuthenticated();
      setShowModal(false);
    }
  };

  if (!showModal || !checked) {
    return <div />;
  }

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <div className="mt-8 w-full flex flex-col space-y-6">
        <Input placeholder="Admin Password" ref={inputRef} />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default PasswordInput;
