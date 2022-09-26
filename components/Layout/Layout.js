import React from "react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  console.log;
  return (
    <div id="layout" className="overflow-hidden">
      {/* <Navbar /> */}
      <ToastContainer />

      <div className="relative min-h-screen">{children}</div>
      {/* {children} */}
    </div>
  );
};

export default layout;
