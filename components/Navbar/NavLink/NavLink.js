import React from "react";
import classNames from "classnames";

import Link from "next/link";

const NavLink = ({ to, label, isActive }) => {
  const linkClasses = classNames({
    "text-slate-600 duration-300 hover:text-darkgreen": !isActive,
    "text-darkgreen": isActive,
  });

  return (
    <Link href={to}>
      <a className={linkClasses}>{label}</a>
    </Link>
  );
};

export default NavLink;
