import React from "react";
import Image from "next/future/image";

import Flickity from "react-flickity-component";

const Carousel = ({ postsArray }) => {
  const flickityOptions = {
    initialIndex: 0,
  };

  return (
    <Flickity
      className={"carousel w-screen min-h-min"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {postsArray}
      {/* <img src="/images/placeholder.png"/>
      <img src="/images/placeholder.png"/>
      <img src="/images/placeholder.png"/> */}
    </Flickity>
  );
};

export default Carousel;
