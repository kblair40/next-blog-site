import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import classNames from "classnames";

import Stack from "components/UI/Stack";
import Button from "components/UI/Button";

// Modal.setAppElement("#layout");

const ConfirmDeleteModal = ({ handleConfirm, onClose, isOpen }) => {
  useEffect(() => {
    if (document.querySelector("#layout")) {
      Modal.setAppElement("#layout");
    }
  }, []);

  const baseClasses = [
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    "drop-shadow-xl rounded-xl px-6 bg-white",
    "flex flex-col",
    "w-80 py-6",
  ];

  const handleClickConfirm = () => {
    handleConfirm();
    onClose();
  };

  return (
    <Modal
      className={classNames(baseClasses)}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldFocusAfterRender={false}
    >
      <div className="flex flex-col items-center space-y-4 w-full">
        <p className="text-center font-semibold text-2xl">Are you sure?</p>
        <Button classes={["w-full"]} size="sm" onClick={handleClickConfirm}>
          Confirm
        </Button>

        <Button classes={["w-full"]} size="sm" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
