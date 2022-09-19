import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import Flickity from "react-flickity-component";

const Carousel = ({ postsArray }) => {
  const [endReached, setEndReached] = useState(false);

  const handleChange = (idx) => {
    setEndReached(idx === postsArray.length - 1);
  };

  const localCarouselRef = useRef();
  const getRef = (ref) => {
    localCarouselRef.current = ref;
  };

  const classes = classNames({
    "w-full h-fit": true,
    "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative": true,
    "custom-cursor": !endReached,
  });

  return (
    <div
      className={classes}
      onClick={() => {
        if (!endReached && localCarouselRef.current) {
          localCarouselRef.current.next();
        }
      }}
    >
      {postsArray.length ? (
        <FlickityCarousel
          postsArray={postsArray}
          onChange={handleChange}
          onMount={getRef}
        />
      ) : null}
    </div>
  );
};

export default Carousel;

const FlickityCarousel = React.memo(
  ({ postsArray, onChange, onMount }) => {
    const windowWidth = window.innerWidth;

    const carouselRef = useRef();
    const curIndex = useRef(0);

    const flickityOptions = {
      initialIndex: 0,
      cellAlign: windowWidth > 768 ? "left" : "center",
      prevNextButtons: false, // not showing up anyways, which is fine
      pageDots: false,
    };

    useEffect(() => {
      if (carouselRef.current) {
        onMount(carouselRef.current);
        carouselRef.current.on("change", function (slideIdx) {
          // console.log("\nSLIDE CHANGED TO:", { slideIdx });
          curIndex.current = slideIdx;
          onChange(slideIdx);
        });
      }
    }, []);

    return (
      <Flickity
        className="sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative"
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        flickityRef={(flick) => (carouselRef.current = flick)}
        reloadOnUpdate // default false
        static // default false
      >
        {postsArray}
      </Flickity>
    );
  },
  (prev, next) => prev.postsArray !== next.postsArray
);

FlickityCarousel.displayName = "FlickityCarousel";
