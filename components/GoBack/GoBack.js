import React from "react";
import Link from "next/link";
import Image from "next/image";

import backArrow from "public/assets/icons/arrow-left.svg";
import styles from "./GoBack.module.scss";

const GoBack = ({ label, route }) => {
  return (
    <Link href={route}>
      <a className={styles.go_back}>
        <div className={styles.go_back__icon}>
          <Image src={backArrow} alt="Back arrow" />
        </div>

        <div className={styles.go_back__label_container}>
          <p className={styles.go_back__label}>{label}</p>
        </div>
      </a>
    </Link>
  );
};

export default GoBack;
