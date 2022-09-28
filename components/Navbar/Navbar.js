import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

import logo from "public/assets/images/logo_sm.png";
import Drawer from "./Drawer";
import NavLink from "./NavLink";
import links from "./links";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { query, pathname } = useRouter();
  console.log("\n\nNAV QUERY:", query, "\n\n");

  let currentPage = "";
  if (query && query.category) {
    currentPage = query.category;
  }

  const wrapperClasses = classNames({
    "absolute z-40 top-0 right-0 pt-4 pb-2 pl-0 pr-8 flex items-center font-medium": true,
    "bg-[#f3efe9]": false,
    "bg-transparent": true,
    "md:flex justify-end ": true,
    "left:0 sm:left-24 md:left-36":
      Boolean(query.category) && !Boolean(query.id),
    // "left-0": Boolean(query.id),
    // hidden: true,
    // "border border-green-400": true,
  });

  return (
    <React.Fragment>
      {/* <div className="border border-red-400 h-8"> */}

      <div className={wrapperClasses}>
        <div className="fixed top-1 left-2 sm:left-2 md:left-6 sm:top-1 sm:absolute">
          <Link href="/">
            <a>
              <Image src={logo} width={140} height={66} />
            </a>
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/">
            <a className="font-light mr-4">Money and...</a>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, idx) => {
            return (
              <NavLink
                key={idx}
                to={link.to}
                label={link.label}
                isActive={link.label.toLowerCase() === currentPage}
              />
            );
          })}
        </div>
      </div>
      {/* </div> */}

      <div className="bg-white z-50 md:hidden">
        <Drawer
          pathname={pathname}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>

      <HamburgerButton onClick={() => setDrawerOpen((prev) => !prev)} />
    </React.Fragment>
  );
};

export default Navbar;

const HamburgerButton = ({ onClick }) => {
  const btnClasses = [
    "flex md:hidden",
    "flex-col space-y-1 w-fit",
    "bg-[#f3efe9] hover:bg-slate-100 duration-300",
    "h-10 w-10 flex items-center justify-center",
    "p-2 rounded-full",
    "fixed top-3 right-4 z-50 ",
  ];

  return (
    <button onClick={onClick} className={classNames(btnClasses)}>
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
    </button>
  );
};

// const homeIcon = (
//   <svg
//     width="24"
//     height="19"
//     viewBox="0 0 24 19"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M11.6821 5.01084L3.99998 11.3379V18.1667C3.99998 18.3435 4.07022 18.5131 4.19525 18.6381C4.32027 18.7631 4.48984 18.8333 4.66665 18.8333L9.33582 18.8213C9.51205 18.8204 9.68076 18.7498 9.80507 18.6248C9.92937 18.4999 9.99915 18.3308 9.99915 18.1546V14.1667C9.99915 13.9899 10.0694 13.8203 10.1944 13.6953C10.3194 13.5702 10.489 13.5 10.6658 13.5H13.3325C13.5093 13.5 13.6789 13.5702 13.8039 13.6953C13.9289 13.8203 13.9991 13.9899 13.9991 14.1667V18.1517C13.9989 18.2394 14.0159 18.3263 14.0493 18.4074C14.0827 18.4886 14.1317 18.5623 14.1937 18.6244C14.2556 18.6866 14.3292 18.7358 14.4102 18.7695C14.4912 18.8031 14.5781 18.8204 14.6658 18.8204L19.3333 18.8333C19.5101 18.8333 19.6797 18.7631 19.8047 18.6381C19.9297 18.5131 20 18.3435 20 18.1667V11.3333L12.3196 5.01084C12.2293 4.93806 12.1168 4.89837 12.0008 4.89837C11.8848 4.89837 11.7724 4.93806 11.6821 5.01084V5.01084ZM23.8166 9.31126L20.3333 6.44001V0.668762C20.3333 0.536154 20.2806 0.408977 20.1869 0.315209C20.0931 0.221441 19.9659 0.168762 19.8333 0.168762H17.5C17.3674 0.168762 17.2402 0.221441 17.1464 0.315209C17.0527 0.408977 17 0.536154 17 0.668762V3.69418L13.2696 0.625012C12.9116 0.33042 12.4624 0.169351 11.9987 0.169351C11.5351 0.169351 11.0859 0.33042 10.7279 0.625012L0.180817 9.31126C0.130187 9.35311 0.0882982 9.40452 0.0575449 9.46256C0.0267916 9.52061 0.00777612 9.58414 0.00158503 9.64953C-0.00460606 9.71493 0.00214857 9.7809 0.021463 9.84368C0.0407774 9.90646 0.072273 9.96482 0.11415 10.0154L1.17665 11.3071C1.21841 11.3579 1.26978 11.3999 1.32782 11.4308C1.38585 11.4617 1.44941 11.4809 1.51485 11.4872C1.5803 11.4935 1.64635 11.4868 1.70922 11.4676C1.77209 11.4483 1.83054 11.4169 1.88123 11.375L11.6821 3.30251C11.7724 3.22973 11.8848 3.19004 12.0008 3.19004C12.1168 3.19004 12.2293 3.22973 12.3196 3.30251L22.1208 11.375C22.1714 11.4169 22.2298 11.4484 22.2926 11.4677C22.3553 11.487 22.4213 11.4938 22.4867 11.4876C22.5521 11.4814 22.6156 11.4624 22.6737 11.4316C22.7317 11.4009 22.7831 11.359 22.825 11.3083L23.8875 10.0167C23.9293 9.96578 23.9607 9.90712 23.9798 9.84406C23.9989 9.781 24.0053 9.7148 23.9987 9.64925C23.9921 9.58369 23.9727 9.52009 23.9414 9.46208C23.9102 9.40408 23.8678 9.35283 23.8166 9.31126V9.31126Z"
//       fill="#1E293B"
//     />
//   </svg>
// );
