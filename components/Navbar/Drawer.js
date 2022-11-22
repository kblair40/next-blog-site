import React from "react";
import Link from "next/link";
import classNames from "classnames";

import links from "./links";

const Drawer = ({ isOpen, onClose, pathname }) => {
  let baseClasses = [
    // "inset-x-0 z-50 absolute",
    "inset-x-0 z-50 fixed",
    "w-1/2 sm:w-1/3 px-4 py-16 shadow-sm",
    "transition-all duration-300 ease-in-out",
    "bottom-0 top-0 flex flex-col justify-center items-center space-y-8",
    "shadow-sm md:hidden",
    // "bg-creme-400",
  ];

  baseClasses.push(
    isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-50"
  );

  const handleClickLink = () => {
    onClose();
  };

  const homeLink = { label: "Home", to: "/" };
  const resourcesLink = { label: "Resources", to: "/resources" };

  return (
    <div className={classNames(baseClasses)}>
      {[homeLink, ...links, resourcesLink].map((navLink, i) => {
        return (
          <NavLink
            key={i}
            active={pathname === navLink.to}
            label={navLink.label}
            route={navLink.to}
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
    // "hover:text-slate-900 text-center hover:bg-slate-100",
    "hover:text-white hover:bg-darkgreen text-center",
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
