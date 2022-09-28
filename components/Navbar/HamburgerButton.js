import React from "react";
import classNames from "classnames";

const HamburgerButton = ({ isOpen, onClick }) => {
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-slate-800 transition ease transform duration-300`;
  const btnClasses = classNames([
    "fixed top-3 right-4 z-50 flex flex-col",
    "h-12 w-12 border border-transparent",
    "rounded group justify-center items-center",
  ]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-75 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-75 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-75 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
