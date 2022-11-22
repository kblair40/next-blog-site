import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// import logo from "public/assets/images/logo_short.png";
import TimeCurrencyCalculator from "components/Resources/TimeCurrencyCalculator";

const ResourcesPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen py-4 bg-creme">
      <div className="min-w-[320px] max-w-md sm:max-w-2xl px-6">
        <TimeCurrencyCalculator />
      </div>

      {/* <HomeLink /> */}
    </div>
  );
};

export default ResourcesPage;

// const HomeLink = () => {
//   return (
//     <Link href="/">
//       <a className="absolute top-2 left-4">
//         <Image alt="logo" src={logo} width={140} height={66} />
//       </a>
//     </Link>
//   );
// };
