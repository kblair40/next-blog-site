import React from "react";
import Link from "next/link";
import Image from "next/image";

import backArrow from "public/assets/icons/arrow-left.svg";

const GoBack = ({ label, route }) => {
  return (
    <Link href={route}>
      <a className="flex items-center mt-2 mb-8 w-fit">
        <div className="flex items-center">
          <Image src={backArrow} alt="Back arrow" height="28px" width="28px" />
        </div>

        <div className="ml-3 h-full">
          <p className="whitespace-nowrap font-medium text-lg">{label}</p>
        </div>
      </a>
    </Link>
  );
};

export default GoBack;
