import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Carousel as RRCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Loading from "components/UI/Loading";
import useMediaQuery from "utils/hooks/useMediaQuery";

const Carousel = ({ posts }) => {
  const [formattedPosts, setFormattedPosts] = useState();
  // const [loading, setLoading] = useState();

  const isSmall = useMediaQuery("(min-width: 480px)");
  console.log("isSmall?", isSmall);
  const isMedium = useMediaQuery("(min-width: 768px)");
  console.log("isMedium?", isMedium);

  useEffect(() => {
    console.log("POSTS:", posts);

    if (posts && posts.length) {
      let postComponents = [];
      for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let postComponent = <Post key={i} post={post} />;
        postComponents.push(postComponent);
      }

      setFormattedPosts(postComponents);
    }
  }, [posts]);

  const renderItem = (item, options) => {
    // console.log("RENDER ITEM - ITEM/OPTIONS:", { item, options });

    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames({
          // "min-w-[300px] sm:min-w-[340px]": true,
          "w-fit": true,
          "px-2 sm:mx-0": true,
          "md:my-2": true,
          "border border-blue-400": true,
        })}
      >
        {item}
      </div>
    );
  };

  const renderArrow = (dir, ...args) => {
    return <Arrow dir={dir} onClick={args[0]} />;
  };

  const classes = classNames({
    "w-full h-fit": true,
    "max-w-full": true,
    "rounded-md sm:shadow-inner": true,
    relative: true,
    "border border-red-400": true,
  });

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-start">
        <div className={classes}>
          {formattedPosts && formattedPosts.length ? (
            <RRCarousel
              renderItem={renderItem}
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              renderArrowPrev={(...args) => renderArrow("left", ...args)}
              renderArrowNext={(...args) => renderArrow("right", ...args)}
              centerMode={isSmall}
              // centerSlidePercentage={isMedium ? 60 : 80}
              centerSlidePercentage={isMedium ? 33 : isSmall ? 33 : 80}
              showThumbs={false}
              swipeable={false}
            >
              {formattedPosts}
            </RRCarousel>
          ) : (
            <Loading fullScreen />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;

const Post = ({ post }) => {
  return (
    <div className="cursor-pointer duration-200 p-1 hover:bg-slate-50 active:bg-slate-100 border border-orange-700">
      <div className="flex flex-col items-center relative h-80 rounded-sm overflow-hidden">
        <Image
          alt="style image"
          src={post.image_url}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col px-2">
        <p className="text-center text-xl font-semibold mt-2">{post.title}</p>
        <p className="text-center line-clamp-2 mt-1">
          Esse ea non Lorem nulla sint mollit ex ullamco irure in.
        </p>
      </div>
    </div>
  );
};

const Arrow = ({ dir, onClick }) => {
  const classes = classNames({
    "absolute top-0 bottom-0 z-10 duration-300": true,
    "right-0": dir === "right",
    "left-0": dir === "left",
    "flex flex-column h-full justify-center items-center w-8": true,
    "duration-150 cursor-pointer": true,
    "bg-slate-300/25 hover:bg-slate-300/50 active:bg-slate-300/75": true,
  });

  const svgClasses = classNames({
    "w-5 h-5 fill-darkgreen": true,
    "rotate-180": dir === "right",
    "border border-green-600": true,
    "z-50": true,
  });

  return (
    <div className={classes} onClick={onClick}>
      <svg
        className={svgClasses}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.3086 17.3867L10.4414 18.2539C10.0742 18.6211 9.48047 18.6211 9.11719 18.2539L1.52344 10.6641C1.15625 10.2969 1.15625 9.70313 1.52344 9.33984L9.11719 1.74609C9.48437 1.37891 10.0781 1.37891 10.4414 1.74609L11.3086 2.61328C11.6797 2.98438 11.6719 3.58984 11.293 3.95312L6.58594 8.4375H17.8125C18.332 8.4375 18.75 8.85547 18.75 9.375V10.625C18.75 11.1445 18.332 11.5625 17.8125 11.5625H6.58594L11.293 16.0469C11.6758 16.4102 11.6836 17.0156 11.3086 17.3867Z" />
      </svg>
    </div>
  );
};
