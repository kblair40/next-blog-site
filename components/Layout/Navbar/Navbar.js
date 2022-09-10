import React from "react";
import Link from "next/link";

import navLinks from "./data";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      {navLinks.map((navLink, i) => {
        console.log("NAV LINK:", navLink);
        return <NavLink key={i} label={navLink.label} route={navLink.route} />;
      })}
    </nav>
  );
};

export default Navbar;

const NavLink = ({ label, route }) => {
  return <Link href={route}>{label}</Link>;
};

const Logo = () => {
  return <h2 className={styles.nav__logo}>LogoHere</h2>;
};
