import React from "react";

import Resource from "./Resource";

const Resources = () => {
  return (
    <div>
      <Resource
        resource={{
          name: "Time Currency Calculator",
          description: "Calculate how long you'll need to save for a purchase",
          href: "/resource/time-currency-calc",
        }}
      />
    </div>
  );
};

export default Resources;
