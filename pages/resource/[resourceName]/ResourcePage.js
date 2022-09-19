import React from "react";
import { useRouter } from "next/router";

import TimeCurrencyCalculator from "components/Resources/TimeCurrencyCalculator";

const ResourcePage = () => {
  const router = useRouter();
  // console.log("ROUTER:", router);

  const getMainComponent = () => {};

  return (
    <div className="flex justify-center px-8 py-8">
      <div className="max-w-2xl w-full flex justify-center">
        <TimeCurrencyCalculator />
      </div>
    </div>
  );
};

export default ResourcePage;
