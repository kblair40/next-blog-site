import React from "react";
import Image from "next/image";

import heroBG from "public/assets/shapes/hero-bg.svg";

const Hero = () => {
  return (
    <div className="flex items-end justify-center h-80 border">
      <Image
        src={heroBG}
        alt="background image"
        layout="fixed"
        objectFit="cover"
        height={185}
        priority
      />
    </div>
  );
};

export default Hero;
