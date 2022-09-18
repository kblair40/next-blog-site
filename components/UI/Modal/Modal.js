import React from "react";
import classNames from "classnames";
import ReactModal from "react-modal";

const Modal = ({
  isOpen,
  onClose,
  children,
  centerContent = true,
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
      {children}
    </ReactModal>
  );
};

export default Modal;
