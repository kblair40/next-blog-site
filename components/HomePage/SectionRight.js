import React from "react";
import Image from "next/future/image";
import classNames from "classnames";

import bgImage from "public/assets/images/statueofliberty.jpg";

const SectionRight = () => {
  return (
    <div className="relative h-full space-y-4 py-32 text-white flex flex-col items-center justify-around px-4">
      <HomeLink label="About" />
      <HomeLink label="Money and Love" />
      <HomeLink label="Money and Style" />
      <HomeLink label="Money and Travel" />
      <HomeLink label="Money Hungry" />
      <HomeLink label="Resources" />
      <div>
        <Image
          height={900}
          width={400}
          className="w-full h-full z-0 absolute top-0 left-0 right-0 bottom-0 m-0"
          src={bgImage}
        />
      </div>
    </div>
  );
};

export default SectionRight;

const HomeLink = ({ label, to }) => {
  const classes = classNames({
    "bg-[#f3efe9] rounded-sm text-slate-800": true,
    "cursor-pointer z-20 font-heading text-center": true,
    "py-2 px-4 w-3/5 uppercase": true,
    "duration-200": true,
  });
  return <div className={classes}>{label}</div>;
};

// #f3efe9
