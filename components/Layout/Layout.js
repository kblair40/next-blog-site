import React from "react";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div id="layout">
      <Navbar />

      {children}
    </div>
  );
};

export default layout;
