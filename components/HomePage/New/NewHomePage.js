import React from "react";
import Image from "next/image";
import classNames from "classnames";

import logo from "public/assets/images/logo_short.png";

const NewHomePage = () => {
  const logoWrapperClasses = classNames({
    "pt-4": true,
  });

  return (
    <div className="flex flex-col items-center bg-creme min-h-screen md: pl-20">
      <div className={logoWrapperClasses}>
        <Image alt="logo" src={logo} width={300} height={60} />
      </div>
    </div>
  );
};

export default NewHomePage;
