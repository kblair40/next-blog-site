import React from "react";

import FullPageWrapper from "components/UI/FullPageWrapper";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

const HomePage = () => {
  return (
    <FullPageWrapper>
      <div className="flex h-full w-full">
        <div className="h-full w-1/2">
          <SectionLeft />
        </div>
        <div className="h-full w-1/2">
          <SectionRight />
        </div>
      </div>
    </FullPageWrapper>
  );
};

export default HomePage;
