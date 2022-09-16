import React from "react";
import Link from "next/link";
import classNames from "classnames";

import navLinks from "./data";

const Drawer = ({ isOpen, onClose, pathname }) => {
  let baseClasses = [
    "inset-x-0 z-50 absolute",
    "h-screen-nav w-fit px-4 py-4 bg-white shadow-sm",
    "transition-all duration-300 ease-in-out",
    "bottom-0 flex flex-col space-y-2",
    "border-t border-slate-100 shadow-md",
    "md:hidden",
  ];

  baseClasses.push(
    isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-50"
  );

  const handleClickLink = () => {
    onClose();
  };
  return (
    <div className={classNames(baseClasses)}>
      {navLinks.map((navLink, i) => {
        return (
          <NavLink
            key={i}
            active={pathname === navLink.route}
            label={navLink.label}
            route={navLink.route}
            onClick={handleClickLink}
          />
        );
      })}
    </div>
  );
};

export default Drawer;

const NavLink = ({ label, route, active, onClick }) => {
  const baseClasses = [
    "font-medium whitespace-nowrap",
    "text-slate-700 transition-colors duration-300",
    "pl-6 pr-12 py-2 rounded-xl w-full",
    "hover:text-slate-900 hover:bg-slate-100",
  ];

  if (active) baseClasses.push("text-slate-900");

  return (
    <Link href={route}>
      <a onClick={onClick} className={classNames(baseClasses)}>
        {label}
      </a>
    </Link>
  );
};
