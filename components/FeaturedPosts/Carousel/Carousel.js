import React, {
  useRef,
  // useEffect
} from "react";

import Flickity from "react-flickity-component";

const Carousel = ({ postsArray }) => {
  const windowWidth = window.innerWidth;

  const carouselRef = useRef();

  // useEffect(() => {
  //   //
  // }, [carouselRef]);

  const flickityOptions = {
    initialIndex: 0,
    cellAlign: windowWidth > 768 ? "left" : "center",
    prevNextButtons: false, // not showing up anyways, which is fine
    pageDots: false,
  };

  const handleClickNext = () => {
    carouselRef.current.next();
  };

  return (
    <div className="w-full h-fit" onClick={handleClickNext}>
      <Flickity
        className={
          "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative"
        } // default ''
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
