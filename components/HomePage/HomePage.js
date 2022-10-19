import React from "react";

import NewHomePage from "./New";
import FullPageWrapper from "components/UI/FullPageWrapper";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

const HomePage = () => {
  return (
    <FullPageWrapper>
      <NewHomePage />
      {/* <div className="flex flex-col sm:flex-row h-full w-full">
        <div className="w-full h-2/5 sm:h-full sm:w-1/2">
          <SectionLeft />
        </div>
        <div className="w-full h-3/5 sm:h-full sm:w-1/2">
          <SectionRight />
        </div>
      </div> */}
    </FullPageWrapper>
  );
};

export default HomePage;
