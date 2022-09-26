import React, { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import Drawer from "./Drawer";
import NavLink from "./NavLink";
import links from "./links";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { query, pathname } = useRouter();
  console.log("\n\nNAV QUERY:", query, "\n\n");

  let currentPage = "";
  if (query && query.category) {
    currentPage = query.category;
  }

  const wrapperClasses = classNames({
    "absolute z-50 top-0 right-0 pt-4 pb-2 pl-0 pr-8 flex items-center justify-end font-medium": true,
    "bg-[#f3efe9]": false,
    "bg-transparent": true,
    "hidden md:flex": true,
    "sm:left-24 md:left-36": Boolean(query.category) && !Boolean(query.id),
    "left-0": Boolean(query.id),
  });

  return (
    <React.Fragment>
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

      <div className="bg-white z-50 md:hidden">
        <Drawer
          pathname={pathname}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>

      <HamburgerButton onClick={() => setDrawerOpen((prev) => !prev)} />
    </React.Fragment>
  );
};

export default Navbar;

const HamburgerButton = ({ onClick }) => {
  const btnClasses = [
    "flex md:hidden",
    "flex-col space-y-1 w-fit",
    "bg-[#f3efe9] hover:bg-slate-100 duration-300",
    "h-10 w-10 flex items-center justify-center",
    "p-2 rounded-full",
    "fixed top-3 right-4 z-50 ",
  ];

  return (
    <button onClick={onClick} className={classNames(btnClasses)}>
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
    </button>
  );
};
