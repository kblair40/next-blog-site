import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import bgImage from "public/assets/images/statueofliberty.jpg";

const SectionRight = () => {
  return (
    <div className="relative h-full pb-16 pt-4 sm:pb-12 sm:pt-12 text-white flex flex-col items-center justify-around px-4">
      <HomeLink label="About" to="/about" />
      <HomeLink label="Money and Love" to="/posts/love" />
      <HomeLink label="Money and Style" to="/posts/style" />
      <HomeLink label="Money and Travel" to="/posts/travel" />
      <HomeLink label="Money Hungry" to="/posts/hungry" />
      <HomeLink label="Resources" to="/resources" />

      <div className="absolute left-0 top-0 right-0 bottom-0 h-full">
        <Image layout="fill" objectFit="cover" src={bgImage} priority />
      </div>
    </div>
  );
};

export default SectionRight;

const HomeLink = ({ label, to }) => {
  const classes = classNames({
    "bg-[#f3efe9] rounded-sm text-slate-800": true,
    "cursor-pointer z-20 font-heading text-center": true,
    "py-2 px-3 sm:py-3 sm:px-4 w-4/5 uppercase sm:text-lg": true,
    "duration-200 flex justify-center items-center": true,
  });

  return (
    <Link href={to}>
      <a className={classes}>{label}</a>
    </Link>
  );
};

// #f3efe9
