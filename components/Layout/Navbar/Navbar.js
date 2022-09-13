import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import navLinks from "./data";
import SubscribeModal from "components/SubscribeModal";
import styles from "./Navbar.module.scss";

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
    <React.Fragment>
      <SubscribeModal
        isOpen={subscribeModalOpen}
        onClose={() => setSubscribeModalOpen(false)}
        onSubscribe={handleSubscribe}
      />
      <nav className={styles.nav}>
        <Logo />
        {navLinks.map((navLink, i) => {
          console.log("IS ACTIVE:", pathname, navLink.route === pathname);
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
          className={styles.nav__subscribe_btn}
        >
          Subscribe
        </button>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

const NavLink = ({ label, route, active }) => {
  return (
    <Link href={route}>
      <a className={active ? styles.active : undefined}>{label}</a>
    </Link>
  );
};

const Logo = () => {
  return <h2 className={styles.nav__logo}>LogoHere</h2>;
};
