import React from "react";
// import Image from "next/future/image";

import Flickity from "react-flickity-component";

const Carousel = ({ postsArray }) => {
  const windowWidth = window.innerWidth;

  const flickityOptions = {
    initialIndex: 0,
    cellAlign: windowWidth > 768 ? "left" : "center",
    prevNextButtons: false, // not showing up anyways, which is fine
    pageDots: false,
  };

  return (
    <Flickity
      className={
        "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent"
      } // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {postsArray}
    </Flickity>
  );
};

export default Carousel;
