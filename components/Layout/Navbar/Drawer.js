import React from "react";
import Link from "next/link";
import classNames from "classnames";

import navLinks from "./data";

const Drawer = ({ isOpen, pathname }) => {
  let baseClasses = [
    "inset-x-0 z-20 absolute",
    "h-screen-nav w-screen-1/2 px-4 py-4 bg-white shadow-sm",
    "transition-all duration-300 ease-in-out",
    "bottom-0 flex flex-col space-y-2",
    "border-t border-slate-100 shadow-md",
    "md:-translate-x-full md:opacity-0",
  ];

  baseClasses.push(
    isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
  );
  return (
    <div className={classNames(baseClasses)}>
      {navLinks.map((navLink, i) => {
        return (
          <NavLink
            key={i}
            active={pathname === navLink.route}
            label={navLink.label}
            route={navLink.route}
          />
        );
      })}
    </div>
  );
};

export default Drawer;

const NavLink = ({ label, route, active }) => {
  const baseClasses = [
    "font-medium whitespace-nowrap",
    "text-slate-700 transition-colors duration-300",
    "px-6 py-2 rounded-xl w-full",
    "hover:text-slate-900 hover:bg-slate-100",
  ];

  if (active) baseClasses.push("text-slate-900");

  return (
    <Link href={route}>
      <a className={classNames(baseClasses)}>{label}</a>
    </Link>
  );
};
