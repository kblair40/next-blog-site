import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import classNames from "classnames";
import Select from "react-select";

import { elementOptions } from "utils/constants";
import Button from "components/UI/Button";

// Modal.setAppElement("#layout");

const AddModal = ({
  onClose,
  isOpen,
  onChangeInsertLocation,
  insertLocation,
  onSave,
}) => {
  const [value, setValue] = useState("");
  const [selectedEl, setSelectedEl] = useState();

  useEffect(() => {
    if (document.querySelector("#layout")) {
      Modal.setAppElement("#layout");
    }
  }, []);

  const baseClasses = [
    "absolute top-4 left-1/2 -translate-x-1/2",
    "drop-shadow-xl rounded-xl min-h-50 py-4 px-6 bg-white",
    "flex flex-col",
    "w-5/6 h-2/3",
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClickClose = () => {
    setValue(undefined);
    onClose();
  };

  const handleSubmit = () => {
    const newContent = {
      text: value,
      classes: [],
      el: selectedEl,
    };

    onSave(newContent);
    onClose();
  };

  const handleChangeEl = (el) => {
    setSelectedEl(el);
  };

  return (
    <Modal
      className={classNames(baseClasses)}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldFocusAfterRender={false}
    >
      <div className="py-2 flex items-center space-x-4">
        <p className="whitespace-nowrap">Insert Location</p>

        <Select
          className="w-full"
          options={[
            { value: "above", label: "Above" },
            { value: "below", label: "Below" },
          ]}
          onChange={(val) => onChangeInsertLocation(val.value)}
        />
      </div>

      <div className="h-full space-y-2 mb-4">
        {value !== undefined && (
          <textarea
            className="w-full border border-slate-100 rounded-md p-2 h-full focus:outline-none hover:border-slate-200 focus:border-slate-300"
            onChange={handleChange}
            value={value}
          />
        )}
      </div>

      <Select
        className="mb-4"
        placeholder="Element"
        options={elementOptions}
        onChange={(val) => handleChangeEl(val.value)}
      />

      <div className="mt-4 flex flex-row items-end space-x-4 w-full">
        <Button classes={["w-1/4"]} onClick={handleClickClose}>
          Cancel
        </Button>

        <Button
          isDisabled={!insertLocation || !selectedEl}
          classes={["w-3/4"]}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default AddModal;
