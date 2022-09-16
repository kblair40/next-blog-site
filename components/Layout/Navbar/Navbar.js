import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import classNames from "classnames";

import navLinks from "./data";
import SubscribeModal from "components/SubscribeModal";

const Navbar = () => {
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
    <div className="fixed h-16 top-0 w-screen z-50 bg-white">
      <SubscribeModal
        isOpen={subscribeModalOpen}
        onClose={() => setSubscribeModalOpen(false)}
        onSubscribe={handleSubscribe}
      />

      <nav className="flex justify-between items-center px-4 pt-5 pb-3">
        <div>
          <Logo />
        </div>

        <HamburgerIcon />

        <div className="flex items-center space-x-6">
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

        <button
          onClick={() => setSubscribeModalOpen(true)}
          className="py-1 px-3 duration-300 hover:text-slate-900"
        >
          Subscribe
        </button>
      </nav>

      <hr className="bg-slate-50" />
    </div>
  );
};

export default Navbar;

const NavLink = ({ label, route, active }) => {
  const baseClasses = [
    "group font-medium whitespace-nowrap",
    "duration-200 hover:text-slate-900",
    "flex flex-col items-center",
  ];

  if (active) baseClasses.push("text-slate-900");

  let borderClasses = ["w-8", "h-px", "duration-300"];
  const borderInactive = ["group-hover:bg-slate-700"];
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

const HamburgerIcon = () => {
  const btnClasses = [
    "flex sm:hidden",
    "flex-col space-y-1 w-fit",
    "bg-white hover:bg-slate-100 duration-500",
    "h-10 w-10 flex items-center justify-center",
    "p-2 rounded-full",
  ];

  return (
    <button className={classNames(btnClasses)}>
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
      <span className="h-0.5 w-5 bg-slate-700" />
    </button>
  );
};
