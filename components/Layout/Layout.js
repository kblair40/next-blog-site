import React from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden">
      <Navbar />
      <ToastContainer />

      {/* 16 * 4 = 64px === exact navbar height */}
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default layout;
