import React from "react";

import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default layout;
