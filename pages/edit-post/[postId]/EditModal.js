import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import classNames from "classnames";

import Stack from "components/UI/Stack";
import Button from "components/UI/Button";

// Modal.setAppElement("#layout");

const EditModal = ({
  content,
  onClose,
  isOpen,
  contentIndex,
  onSaveChanges,
}) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (document.querySelector("#layout")) {
      Modal.setAppElement("#layout");
    }
  }, []);

  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current && content) {
      setValue(content.text);
      initialized.current = true;
    }
  }, [content]);

  const handleSubmit = async () => {
    onSaveChanges(value, contentIndex);
  };

  const baseClasses = [
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    "drop-shadow-xl rounded-xl min-h-50 py-4 px-6 bg-white",
    "flex flex-col",
    "w-5/6 h-5/6",
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClickClose = () => {
    initialized.current = false;
    setValue(undefined);
    onClose();
  };

  return (
    <Modal
      className={classNames(baseClasses)}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldFocusAfterRender={false}
    >
      <div className="py-2">
        <p className="text-xl font-medium">Edit</p>
      </div>

      <div className="h-full space-y-2 mb-4">
        {value !== undefined && (
          <textarea
            className="w-full border border-slate-100 rounded-md p-2 h-3/4 focus:outline-none hover:border-slate-200 focus:border-slate-300"
            onChange={handleChange}
            value={value}
          />
        )}

        <div className="border border-slate-200 h-1/4 rounded-md"></div>
      </div>

      <div className="mt-4 flex flex-row items-end space-x-4 w-full">
        <Button classes={["w-1/4"]} onClick={handleClickClose}>
          Cancel
        </Button>

        <Button classes={["w-3/4"]} onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default EditModal;
