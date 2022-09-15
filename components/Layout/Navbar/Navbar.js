import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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

      <nav className="flex items-center px-4 pt-5 pb-3">
        <Logo />
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

        <button
          onClick={() => setSubscribeModalOpen(true)}
          className="py-1 px-3"
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
  return (
    <Link href={route}>
      {/* <a className={active ? styles.active : undefined}>{label}</a> */}
      <a className="py-1 px-3">{label}</a>
    </Link>
  );
};

const Logo = () => {
  return <h2 className="mr-8">LogoHere</h2>;
};
