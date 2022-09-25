import React from "react";
import Image from "next/future/image";
import Link from "next/link";
import classNames from "classnames";

import bgImage from "public/assets/images/statueofliberty.jpg";

const SectionRight = () => {
  return (
    <div className="relative h-full space-y-8 py-24 text-white flex flex-col items-center justify-around px-4">
      <HomeLink label="About" to="/about" />
      <HomeLink label="Money and Love" to="/posts/love" />
      <HomeLink label="Money and Style" to="/posts/style" />
      <HomeLink label="Money and Travel" to="/posts/travel" />
      <HomeLink label="Money Hungry" to="/posts/hungry" />
      <HomeLink label="Resources" to="/resources" />
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
    "py-3 px-4 w-3/5 uppercase text-lg": true,
    "duration-200": true,
  });
  return (
    <Link href={to}>
      <a className={classes}>{label}</a>
    </Link>
  );
};

// #f3efe9
