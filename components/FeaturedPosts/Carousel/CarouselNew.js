import React, { useState } from "react";
import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import IconButton from "components/UI/IconButton";

const CarouselNew = ({ postsArray }) => {
  const [curSlide, setCurSlide] = useState(0);

  const handleClickNext = () => {
    setCurSlide((cur) => cur + 1);
  };
  const handleClickPrev = () => {
    setCurSlide((cur) => cur - 1);
  };

  const renderItem = (item, options) => {
    console.log("RENDER ITEM - ITEM/OPTIONS:", { item, options });

    return (
      <div
        onClick={(e) => e.stopPropagation()}
        // className="border border-red-300 mr-12 w-full"
        // className="border border-red-300 ml-12 w-fit"
        className="ml-12 w-fit"
      >
        {item}
      </div>
    );
    return item;
  };

  const classes = classNames({
    "w-full h-fit": true,
    "w-screen relative": true,
    // "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative": true,
    // "custom-cursor": !endReached,
  });

  return (
    <React.Fragment>
      <div className="flex flex-col items-end">
        <PrevNextButtons
          onClickNext={handleClickNext}
          onClickPrev={handleClickPrev}
          slideCount={postsArray.length || 0}
          curSlide={curSlide}
        />

        <div className={classes}>
          {postsArray && postsArray.length ? (
            <Carousel
              renderItem={renderItem}
              selectedItem={curSlide}
              centerMode={true}
              centerSlidePercentage={60}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              swipeable={true}
              showArrows={false}
            >
              {postsArray}
            </Carousel>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarouselNew;

const PrevNextButtons = ({
  onClickNext,
  onClickPrev,
  slideCount,
  curSlide,
}) => {
  return (
    <div className="flex justify-between w-screen items-center px-12 mb-2">
      <IconButton
        onClick={onClickPrev}
        disabled={curSlide === 0}
        padding="p-1.5"
        icon={
          <svg
            className="w-6 h-6 fill-slate-800"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.3086 17.3867L10.4414 18.2539C10.0742 18.6211 9.48047 18.6211 9.11719 18.2539L1.52344 10.6641C1.15625 10.2969 1.15625 9.70313 1.52344 9.33984L9.11719 1.74609C9.48437 1.37891 10.0781 1.37891 10.4414 1.74609L11.3086 2.61328C11.6797 2.98438 11.6719 3.58984 11.293 3.95312L6.58594 8.4375H17.8125C18.332 8.4375 18.75 8.85547 18.75 9.375V10.625C18.75 11.1445 18.332 11.5625 17.8125 11.5625H6.58594L11.293 16.0469C11.6758 16.4102 11.6836 17.0156 11.3086 17.3867Z" />
          </svg>
        }
      />
      <IconButton
        onClick={onClickNext}
        disabled={curSlide + 1 === slideCount}
        padding="p-1.5"
        icon={
          <svg
            className="w-6 h-6 fill-slate-800 rotate-180"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.3086 17.3867L10.4414 18.2539C10.0742 18.6211 9.48047 18.6211 9.11719 18.2539L1.52344 10.6641C1.15625 10.2969 1.15625 9.70313 1.52344 9.33984L9.11719 1.74609C9.48437 1.37891 10.0781 1.37891 10.4414 1.74609L11.3086 2.61328C11.6797 2.98438 11.6719 3.58984 11.293 3.95312L6.58594 8.4375H17.8125C18.332 8.4375 18.75 8.85547 18.75 9.375V10.625C18.75 11.1445 18.332 11.5625 17.8125 11.5625H6.58594L11.293 16.0469C11.6758 16.4102 11.6836 17.0156 11.3086 17.3867Z" />
          </svg>
        }
      />
    </div>
  );
};

// ORIGINAL
// const classes = classNames({
//   "w-full h-fit": true,
//   "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative": true,
//   "custom-cursor": !endReached,
// });
