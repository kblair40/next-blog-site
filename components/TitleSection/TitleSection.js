import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import logo from "public/assets/images/logo_sm.png";

const TitleSection = ({ sectionTitle }) => {
  const titleWrapperClasses = classNames({
    "hidden sm:flex sm:flex-col sm:items-center sm:justify-center": true,
    "h-full w-full sm:max-w-[80px] md:max-w-[140px]": true,
    "text-slate-800 relative": true,
    "box-border": true,
  });

  const titleClasses = classNames([
    "text-2xl sm:text-3xl md:text-5xl",
    "-rotate-90 tracking-widest leading-snug",
    "font-light text-center",
  ]);

  return (
    <div className={titleWrapperClasses}>
      <h1 className={titleClasses}>
        {sectionTitle ? sectionTitle.toUpperCase() : ""}
      </h1>

      {/* <div className="absolute top-4 mx-auto">
        <Link href="/">
          <a>
            <Image src={logo} width={140} height={66} />
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default TitleSection;

// 0.470967741935
