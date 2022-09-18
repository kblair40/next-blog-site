import React from "react";
import classNames from "classnames";
import ReactModal from "react-modal";

import IconButton from "components/UI/IconButton";

const Modal = ({
  isOpen,
  onClose,
  children,
  centerContent,
  closable = true,
  widthClasses = "w-5/6 sm:w-80 md:w-96",
}) => {
  const baseClasses = [
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
    "drop-shadow-xl rounded-xl min-h-50 py-4 px-6 bg-white",
    "flex flex-col",
  ];
  baseClasses.push(widthClasses);

  if (centerContent) {
    baseClasses.push("justify-center items-center");
  }

  return (
    <ReactModal
      className={classNames(baseClasses)}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      {closable && <CloseButton onClose={onClose} />}
      {children}
    </ReactModal>
  );
};

export default Modal;

const CloseButton = ({ onClose }) => {
  return (
    <IconButton
      classes={["absolute", "top-0", "right-0"]}
      padding="p-1"
      onClick={onClose}
      icon={
        <svg
          className="w-6 h-6 fill-slate-800"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
        </svg>
      }
    />
  );
};
