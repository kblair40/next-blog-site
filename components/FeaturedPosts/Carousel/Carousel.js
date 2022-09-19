import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import Flickity from "react-flickity-component";

const Carousel = ({ postsArray, onChange }) => {
  // const [curIndex, setCurIndex] = useState(0);

  const windowWidth = window.innerWidth;

  const carouselRef = useRef();
  const curIndex = useRef(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.on("change", function (slideIdx) {
        console.log("\nSLIDE CHANGED TO:", { slideIdx });
        curIndex.current = slideIdx;
        // setCurIndex(slideIdx);
        // onChange(slideIdx);

        // if (slideIdx === postsArray.length - 1) {
        //   onEndReached(true);
        // } else {
        //   onEndReached(false);
        // }
      });
    }
  }, []);

  const flickityOptions = {
    initialIndex: 0,
    cellAlign: windowWidth > 768 ? "left" : "center",
    prevNextButtons: false, // not showing up anyways, which is fine
    pageDots: false,
  };

  const handleClickNext = () => {
    carouselRef.current.next();
  };

  // const classes = classNames({
  //   "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative": true,
  //   "custom-cursor": curIndex < postsArray.length - 1,
  // });

  console.log(
    "\n\n\nSHOULD PREVENT CURSOR:",
    curIndex.current < postsArray.length - 1,
    "\n\n\n"
  );

  return (
    <div className="w-full h-fit" onClick={handleClickNext}>
      <Flickity
        className={classNames({
          "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative": true,
          "custom-cursor": curIndex.current < postsArray.length - 1,
        })}
        // className={
        //   "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative custom-cursor"
        // } // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        flickityRef={(flick) => (carouselRef.current = flick)}
        reloadOnUpdate // default false
        static // default false
      >
        {postsArray}
      </Flickity>
    </div>
  );
};

export default Carousel;
// export default React.memo(Carousel);
// export default React.memo(Carousel, (prev, next) => {
//   return prev.postsArray !== next.postsArray;
// });
