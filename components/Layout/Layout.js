import React from "react";
import { ToastContainer } from "react-toastify";

import NavBanner from "components/Navbar/NavBanner";

const layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden">
      <ToastContainer />
      <div className="absolute z-20">
        <NavBanner />
      </div>

      <div className="relative min-h-screen">{children}</div>
    </div>
  );
};

export default layout;
