import React from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden">
      <Navbar />
      <ToastContainer />

      {/* 14 * 4 = 56px === exact navbar height */}
      <div className="mt-14">{children}</div>
    </div>
  );
};

export default layout;
