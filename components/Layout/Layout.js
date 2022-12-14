import React from "react";
import { ToastContainer } from "react-toastify";
import { Box } from "@chakra-ui/react";

import MobileNav from "components/Navbar_new/MobileNav";
import Navbar from "components/Navbar_new";
// import Navbar from "components/Navbar";

const layout = ({ children }) => {
  return (
    // <div id="layout" className="overflow-hidden bg-creme min-h-screen">
    <div id="layout" className="overflow-hidden min-h-screen">
      <ToastContainer />

      <Navbar />

      {/* hides self when md breakpoint is hit */}
      <Box display={{ base: "block", md: "none" }}>
        <MobileNav />
      </Box>

      <div className="relative">{children}</div>
    </div>
  );
};

export default layout;
