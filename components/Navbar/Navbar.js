import React from "react";
// import classNames from "classnames";
import { useRouter } from "next/router";

import NavLink from "./NavLink";
import links from "./links";

const Navbar = () => {
  const router = useRouter();

  let currentPage = "";
  if (router.query && router.query.category) {
    currentPage = router.query.category;
  }

  return (
    <div className="left-36 absolute z-50 top-0 right-0 pt-4 pb-2 pl-0 pr-8 flex items-center justify-end font-medium">
      <p className="font-light mr-4">Money and...</p>
      <div className="flex items-center space-x-6">
        {links.map((link, idx) => {
          return (
            <NavLink
              key={idx}
              to={link.to}
              label={link.label}
              isActive={link.label.toLowerCase() === currentPage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
