import React from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout" style={{ overflowX: "hidden" }}>
      <Navbar />
      <ToastContainer />
      {children}
    </div>
  );
};

export default layout;
