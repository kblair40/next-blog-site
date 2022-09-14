import React from "react";
import Image from "next/image";

import heroBG from "public/assets/shapes/hero-bg.svg";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image src={heroBG} alt="background svg" />
    </div>
  );
};

export default Hero;
