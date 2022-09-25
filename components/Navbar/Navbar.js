import React from "react";
// import classNames from "classnames";
import { useRouter } from "next/router";

import NavLink from "./NavLink";
import links from "./links";

const Navbar = () => {
  const router = useRouter();

  const currentPage = "";
  if (router.query && router.query.category) {
    // console.log("CATEGORY:", router.query.category);
    currentPage = router.query.category;
  }

  return (
    <div className="pt-4 pb-2 pl-4 pr-8 flex items-center justify-end space-x-6 font-medium">
      {/* <p className="pr-2 font-normal">Money and...</p> */}

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
