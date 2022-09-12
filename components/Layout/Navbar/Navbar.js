import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import navLinks from "./data";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { pathname } = useRouter();

  console.log("pathname:", pathname, typeof pathname);
  return (
    <nav className={styles.nav}>
      <Logo />
      {navLinks.map((navLink, i) => {
        console.log("IS ACTIVE:", navLink.route === pathname, {
          route: navLink.route,
          pathname,
        });
        return (
          <NavLink
            key={i}
            active={pathname === navLink.route}
            label={navLink.label}
            route={navLink.route}
          />
        );
      })}
    </nav>
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
