import React from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout" style={{ overflowX: "hidden" }}>
      <Toaster /> {/* doesn't occupy any space */}
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
