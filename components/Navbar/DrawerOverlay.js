import React from "react";
import classNames from "classnames";

const DrawerOverlay = ({ isOpen, onClose }) => {
  const classes = classNames({
    "absolute h-screen w-screen": true,
    "bg-slate-600/25 duration-100": true,
    "top-0 right-0 left-0 bottom-0 z-10": true,
    "-translate-x-full": !isOpen,
  });

  return <div onClick={onClose} className={classes} />;
};

export default DrawerOverlay;
