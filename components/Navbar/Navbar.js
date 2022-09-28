import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

import HamburgerButton from "./HamburgerButton";
import logo from "public/assets/images/logo_sm.png";
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
    "absolute z-40 top-0 right-0 pt-4 pb-2 pl-0 pr-8 flex items-center font-medium": true,
    "bg-transparent": true,
    "md:flex justify-end ": true,
    "left:0 sm:left-24 md:left-36":
      Boolean(query.category) && !Boolean(query.id),
    "left-0": Boolean(query.id),
    // hidden: true,
    // "border border-green-400": true,
  });

  return (
    <React.Fragment>
      <div className={wrapperClasses}>
        <div className="fixed top-1 left-2 sm:left-2 md:left-6 sm:top-1 sm:absolute">
          <Link href="/">
            <a>
              <Image alt="logo" src={logo} width={140} height={66} />
            </a>
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/">
            <a className="font-light mr-4">Money and...</a>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
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

      <HamburgerButton
        isOpen={drawerOpen}
        onClick={() => setDrawerOpen((prev) => !prev)}
      />
    </React.Fragment>
  );
};

export default Navbar;
