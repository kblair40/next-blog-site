import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselNew = ({ postsArray }) => {
  const [endReached, setEndReached] = useState(false);

  const localCarouselRef = useRef();

  const classes = classNames({
    "w-full h-fit": true,
    "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative": true,
    "custom-cursor": !endReached,
  });
  return (
    <div
      className={classes}
      onClick={() => {
        console.log("nada");
        // if (!endReached && localCarouselRef.current) {
        //   localCarouselRef.current.next();
        // }
      }}
    >
      {postsArray && postsArray.length ? (
        <Carousel>{postsArray}</Carousel>
      ) : null}
    </div>
  );
};

export default CarouselNew;
