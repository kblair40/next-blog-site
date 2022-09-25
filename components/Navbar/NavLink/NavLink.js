import React from "react";
import classNames from "classnames";

import Link from "next/link";

const NavLink = ({ to, label, isActive }) => {
  const linkClasses = classNames({
    "text-slate-600 duration-300 hover:text-slate-900": !isActive,
    "text-slate-900": isActive,
  });

  return (
    <Link href={to}>
      <a className={linkClasses}>{label}</a>
    </Link>
  );
};

export default NavLink;
