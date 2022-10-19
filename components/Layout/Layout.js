import React from "react";
import { ToastContainer } from "react-toastify";

import MobileNav from "components/Navbar/MobileNav";
import NavBanner from "components/Navbar/NavBanner";
import Navbar from "components/Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden bg-creme min-h-screen">
      <ToastContainer />

      <div className="absolute z-20">
        <NavBanner />
      </div>

      <Navbar />

      {/* hides self when md breakpoint is hit */}
      <MobileNav />

      <div className="relative">{children}</div>
    </div>
  );
};

export default layout;
