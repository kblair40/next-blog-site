import React, { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";

import SubscribeModal from "components/SubscribeModal";
import HamburgerButton from "./HamburgerButton";
import Drawer from "./Drawer";
import NavLink from "./NavLink";
import DrawerOverlay from "./DrawerOverlay";
import links from "./links";

const Navbar = () => {
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
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
    "w-full": Boolean(query.id),
  });

  const handleSubscribe = () => {
    const toastConfig = {
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: false,
      autoClose: 8000,
    };
    toast.success("Successfully subscribed.  Thank you!", toastConfig);
  };

  return (
    <React.Fragment>
      <div className={wrapperClasses}>
        <div
          onClick={() => setSubscribeModalOpen(true)}
          className="duration-200 hover:text-darkgreen fixed sm:absolute left-4 top-6 md:top-4 sm:left-0 md:left-4 cursor-pointer"
        >
          <p>Subscribe</p>
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

      <div className="bg-white z-20 md:hidden">
        <Drawer
          pathname={pathname}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <DrawerOverlay
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen((prev) => !prev)}
        />
      </div>

      <HamburgerButton
        isOpen={drawerOpen}
        onClick={() => setDrawerOpen((prev) => !prev)}
      />

      <SubscribeModal
        isOpen={subscribeModalOpen}
        onClose={() => setSubscribeModalOpen(false)}
        onSubscribe={handleSubscribe}
      />
    </React.Fragment>
  );
};

export default Navbar;
