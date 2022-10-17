import React from "react";
import { ToastContainer } from "react-toastify";

import MobileNav from "components/Navbar/MobileNav";
import NavBanner from "components/Navbar/NavBanner";

const layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden">
      <ToastContainer />

      <div className="absolute z-20">
        <NavBanner />
      </div>

      {/* hides self when md breakpoint is hit */}
      <MobileNav />

      <div className="relative min-h-screen">{children}</div>
    </div>
  );
};

export default layout;
