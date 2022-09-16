import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import classNames from "classnames";

import navLinks from "./data";
import SubscribeModal from "components/SubscribeModal";
import Drawer from "./Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);

  const { pathname } = useRouter();

  const handleSubscribe = () => {
    const config = {
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: false,
    };
    toast.success("Successfully subscribed!", config);
  };

  return (
    <React.Fragment>
      {/* Mobile Menu open: "block", Menu closed: "hidden" */}
      <div className="bg-white z-50">
        <Drawer
          pathname={pathname}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>

      <div className="fixed flex flex-col bg-white z-50">
        <SubscribeModal
          isOpen={subscribeModalOpen}
          onClose={() => setSubscribeModalOpen(false)}
          onSubscribe={handleSubscribe}
        />

        <nav className="h-14">
          <div className="h-full px-6 flex justify-between items-center">
            <Logo />

            {/* Mobile menu button */}
            <HamburgerButton onClick={() => setDrawerOpen(!drawerOpen)} />

            <div className="hidden items-start w-fit md:flex md:flex-row">
              {navLinks.map((navLink, i) => {
                return (
                  <NavLink
                    key={i}
                    active={pathname === navLink.route}
                    label={navLink.label}
                    route={navLink.route}
                  />
                );
              })}
            </div>
          </div>
        </nav>

        <hr className="bg-slate-50 w-screen" />
      </div>
    </React.Fragment>
  );
};

export default Navbar;

const NavLink = ({ label, route, active }) => {
  const baseClasses = [
    "group font-medium whitespace-nowrap",
    "text-slate-700 transition-colors duration-300 hover:text-slate-900",
    "flex flex-col items-center",
    "p-2 rounded-md",
    "md:mx-2",
  ];

  if (active) baseClasses.push("text-slate-900");

  let borderClasses = ["w-8", "h-px", "duration-300"];
  const borderInactive = ["md:group-hover:bg-slate-700"];
  const borderActive = ["bg-slate-700"];

  if (active) {
    borderClasses = borderClasses.concat(borderActive);
  } else {
    borderClasses = borderClasses.concat(borderInactive);
  }

  return (
    <Link href={route}>
      <a className={classNames(baseClasses)}>
        {label}

        <div className={classNames(borderClasses)} />
      </a>
    </Link>
  );
};

const Logo = () => {
  return <h2 className="text-xl">LogoHere</h2>;
};

const HamburgerButton = ({ onClick }) => {
  const btnClasses = [
    "flex md:hidden",
    "flex-col space-y-1 w-fit",
    "bg-white hover:bg-slate-100 duration-500",
    "h-10 w-10 flex items-center justify-center",
    "p-2 rounded-full",
  ];

  return (
    <button onClick={onClick} className={classNames(btnClasses)}>
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
    </button>
  );
};
