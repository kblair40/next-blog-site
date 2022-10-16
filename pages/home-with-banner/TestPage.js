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
    <div className="relative flex flex-col items-center border border-red-200 h-100 w-24">
      <div className="absolute left-7 border border-green-300 h-full bottom-4">
        <BannerNav />
      </div>

      <HeartIcon />
      <ShirtIcon />
    </div>
  );
};

export default TestPage;

const BannerNav = () => {
  return (
    <svg
      className="z-0"
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

const ShirtIcon = () => {
  return (
    <svg
      className="z-10"
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.7501 15.6667L82.2501 23.5001V43.0834H70.5001V74.4167C70.5001 75.4555 70.0875 76.4517 69.353 77.1863C68.6184 77.9208 67.6222 78.3334 66.5835 78.3334H27.4168C26.378 78.3334 25.3818 77.9208 24.6473 77.1863C23.9128 76.4517 23.5001 75.4555 23.5001 74.4167V43.0834H11.7501V23.5001L35.2501 15.6667C35.2501 18.783 36.4881 21.7717 38.6916 23.9753C40.8952 26.1788 43.8838 27.4167 47.0001 27.4167C50.1164 27.4167 53.1051 26.1788 55.3086 23.9753C57.5122 21.7717 58.7501 18.783 58.7501 15.6667Z"
        stroke="black"
        stroke-width="9.26231"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg
      className="z-10"
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76.3751 53.1572L47.0001 82.2502L17.6251 53.1572M17.6251 53.1572C15.6876 51.2717 14.1614 49.0056 13.1427 46.5013C12.124 43.9971 11.6348 41.3091 11.706 38.6065C11.7772 35.9039 12.4072 33.2454 13.5563 30.7982C14.7054 28.3511 16.3488 26.1684 18.3829 24.3876C20.4171 22.6068 22.7979 21.2664 25.3755 20.451C27.953 19.6355 30.6716 19.3625 33.3598 19.6493C36.0481 19.9361 38.6478 20.7763 40.9954 22.1172C43.3429 23.4581 45.3874 25.2705 47.0001 27.4403C48.6198 25.2863 50.6667 23.4897 53.0126 22.163C55.3585 20.8364 57.9531 20.0083 60.6338 19.7305C63.3145 19.4526 66.0237 19.7311 68.5918 20.5485C71.1599 21.3659 73.5317 22.7046 75.5587 24.4808C77.5857 26.2569 79.2242 28.4324 80.3718 30.8709C81.5193 33.3095 82.1512 35.9586 82.2278 38.6526C82.3045 41.3466 81.8242 44.0274 80.8171 46.5272C79.8101 49.0271 78.2978 51.2921 76.3751 53.1807"
        stroke="black"
        stroke-width="9.26231"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
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
