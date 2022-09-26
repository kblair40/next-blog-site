import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import NavLink from "./NavLink";
import links from "./links";

const Navbar = () => {
  const { query } = useRouter();
  console.log("\n\nNAV QUERY:", query, "\n\n");

  let currentPage = "";
  if (query && query.category) {
    currentPage = query.category;
  }

  const wrapperClasses = classNames({
    "absolute z-50 top-0 right-0 pt-4 pb-2 pl-0 pr-8 flex items-center justify-end font-medium bg-[#f3efe9]": true,
    "sm:left-24 md:left-36": Boolean(query.category) && !Boolean(query.id),
    "left-0": Boolean(query.id),
  });

  return (
    <div className={wrapperClasses}>
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
