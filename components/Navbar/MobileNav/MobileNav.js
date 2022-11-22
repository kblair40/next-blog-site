import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/future/image";
import classNames from "classnames";

// import logo from "public/assets/images/logo_short.png";
import HamburgerButton from "../HamburgerButton";
import Drawer from "../Drawer";
import DrawerOverlay from "../DrawerOverlay";

const MobileNav = () => {
  // const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { query, pathname } = useRouter();
  console.log("\n\nNAV QUERY:", query, "\n\n");

  const imageClasses = classNames({
    "flex w-screen justify-center bg-creme": true,
    "md:pl-20": !Boolean(query.id),
    hidden: Boolean(query.id),
  });

  return (
    <React.Fragment>
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

      {/* <div className={imageClasses}>
        <Image
          alt="logo"
          src={logo}
          className="mt-6 w-[200px] h-10 sm:w-80 sm:h-16"
          quality={100}
          priority
        />
      </div> */}

      <HamburgerButton
        isOpen={drawerOpen}
        onClick={() => setDrawerOpen((prev) => !prev)}
      />
    </React.Fragment>
  );
};

export default MobileNav;
