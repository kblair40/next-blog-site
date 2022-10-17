import React, { useState } from "react";
import { useRouter } from "next/router";

import HamburgerButton from "../HamburgerButton";
import Drawer from "../Drawer";
import DrawerOverlay from "../DrawerOverlay";

const MobileNav = () => {
  // const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { query, pathname } = useRouter();
  console.log("\n\nNAV QUERY:", query, "\n\n");

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

      <HamburgerButton
        isOpen={drawerOpen}
        onClick={() => setDrawerOpen((prev) => !prev)}
      />
    </React.Fragment>
  );
};

export default MobileNav;
