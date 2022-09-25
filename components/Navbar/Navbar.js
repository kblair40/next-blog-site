import React from "react";
// import classNames from "classnames";
import { useRouter } from "next/router";

import NavLink from "./NavLink";
import links from "./links";

const Navbar = () => {
  const router = useRouter();

  const currentPage = "";
  if (router.query && router.query.category) {
    currentPage = router.query.category;
  }

  return (
    // <div className="w-full z-50 bg-[#f3efe9] absolute top-0 right-0 pt-4 pb-2 pl-4 pr-8 flex items-center justify-end space-x-6 font-medium">
    <div className="absolute z-50 top-0 right-0 pt-4 pb-2 pl-4 pr-8 flex items-center justify-end space-x-6 font-medium">
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
  );
};

export default Navbar;
