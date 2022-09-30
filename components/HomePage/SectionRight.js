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
      <HomeLink label="Money Hungry" to="/posts/hunger" />
      <HomeLink label="Resources" to="/resources" />

      <div className="absolute left-0 top-0 right-0 bottom-0 h-full">
        <Image
          alt="bg image"
          layout="fill"
          objectFit="cover"
          src={bgImage}
          priority
        />
      </div>
    </div>
  );
};

export default SectionRight;

const HomeLink = ({ label, to }) => {
  const classes = classNames({
    "bg-creme rounded-sm text-slate-800 font-medium": true,
    "cursor-pointer z-20 font-heading text-center": true,
    "py-2 px-3 sm:py-3 sm:px-4 w-7/8 sm:w-11/12 uppercase sm:text-lg": true,
    "duration-300 flex justify-center items-center": true,
    "hover:bg-darkgreen hover:text-white shadow-sm": true,
  });

  return (
    <Link href={to}>
      <a className={classes}>{label}</a>
    </Link>
  );
};
