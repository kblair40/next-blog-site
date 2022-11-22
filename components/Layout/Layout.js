import React from "react";
import { ToastContainer } from "react-toastify";

import MobileNav from "components/Navbar/MobileNav";
import Navbar from "components/Navbar_new";
// import Navbar from "components/Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden bg-creme min-h-screen">
      <ToastContainer />

      <Navbar />

      {/* hides self when md breakpoint is hit */}
      <MobileNav />

      <div className="relative">{children}</div>
    </div>
  );
};

export default layout;
