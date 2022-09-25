import React from "react";

const FullPageWrapper = ({ children }) => {
  return <div className="h-screen w-screen overflow-hidden">{children}</div>;
};

export default FullPageWrapper;
