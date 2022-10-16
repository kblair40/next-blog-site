import React from "react";
import Image from "next/image";

import banner_nav from "public/assets/images/banner-nav.svg";

// Banner left 30px, width 94px
// position: absolute;
// bottom: -3.75rem;
// left: 30px;
// width: 94px;
// margin-bottom: 3.75rem;
// padding: 0.5rem 0.5rem 0;
// border: 1px solid #000;
// border-top: none;
// background: #fff;
// filter: drop-shadow(3px 10px 4px rgba(0,0,0,.2));
// transform: translateY(100%);

const TestPage = () => {
  return (
    <div className="absolute left-7">
      <Image
        alt="banner-navigation"
        src={banner_nav}
        height="600px"
        width="94px"
      />
    </div>
  );
};

export default TestPage;

const icons = {
  banner: () => {},
};

const bannerIcon = (
  <svg
    width="94"
    height="649"
    viewBox="0 0 94 649"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="93" height="599" stroke="black" />
    <path d="M92.8276 600.5L47 648.278L1.17242 600.5H92.8276Z" stroke="black" />
  </svg>
);
