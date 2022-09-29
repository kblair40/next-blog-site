import React from "react";
import Link from "next/link";

import TimeCurrencyCalculator from "components/Resources/TimeCurrencyCalculator";

const ResourcesPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-md sm:max-w-2xl px-6">
        <TimeCurrencyCalculator />
      </div>
    </div>
  );
};

export default ResourcesPage;
