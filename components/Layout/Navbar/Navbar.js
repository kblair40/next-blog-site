import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import classNames from "classnames";

// import logo from "public/assets/images/high-low.png";
import logo from "public/assets/images/money-and-other-things.webp";
import navLinks from "./data";
import SubscribeModal from "components/SubscribeModal";
import DropDown from "components/UI/DropDown";
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
        {subscribeModalOpen && (
          <SubscribeModal
            isOpen={subscribeModalOpen}
            onClose={() => setSubscribeModalOpen(false)}
            onSubscribe={handleSubscribe}
          />
        )}

        <nav className="h-14">
          <div className="relative h-full px-6 flex justify-between items-center">
            <Logo />

            {/* Mobile menu button */}
            <HamburgerButton onClick={() => setDrawerOpen(!drawerOpen)} />

            <div className="hidden items-start w-fit md:flex md:flex-row">
              <DropDown />

              {navLinks.map((navLink, i) => {
                return (
                  <NavLink
                    key={i}
                    active={pathname === navLink.route}
                    label={navLink.label}
                    // route={navLink.route}
                    route={pathname === navLink.route ? "#" : navLink.route}
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
    "text-slate-700 transition-colors duration-300 hover:text-lightgreen",
    "flex flex-col items-center",
    "py-2 px-3 rounded-md",
    "md:mx-2",
    // "font-heading font-semibold",
  ];

  if (active) baseClasses.push("text-slate-900");

  let borderClasses = ["w-8", "h-px", "duration-300"];
  const borderInactive = ["md:group-hover:bg-darkgreen/50"];
  const borderActive = ["bg-darkgreen/50"];

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
  const boxSize = 64;
  return <Image alt="logo" src={logo} height={boxSize} width={boxSize} />;
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
