import React from "react";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout" style={{ overflowX: "hidden" }}>
      <Navbar />

      {children}
    </div>
  );
};

export default layout;
