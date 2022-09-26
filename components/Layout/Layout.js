import React from "react";
import { ToastContainer } from "react-toastify";

const layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden">
      <ToastContainer />

      <div className="relative min-h-screen">{children}</div>
    </div>
  );
};

export default layout;
