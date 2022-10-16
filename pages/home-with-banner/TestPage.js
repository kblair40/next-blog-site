import React from "react";

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
    <div className="absolute left-7 border ">
      <BannerNav />
    </div>
  );
};

export default TestPage;

const BannerNav = () => {
  return (
    <svg
      width="94"
      height="627"
      viewBox="0 0 94 627"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="94" height="600" fill="#eee" />
      <path d="M47 600L0 626.015V600H94V626.015L47 600Z" fill="#eee" />
    </svg>
  );
};
// const BannerNav = () => {
//   return (
//     <svg
//       width="94"
//       height="627"
//       viewBox="0 0 94 627"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="94" height="600" fill="#eee" />
//       <path d="M47 600L0 626.015V600H94V626.015L47 600Z" fill="#eee" />
//     </svg>
//   );
// };
