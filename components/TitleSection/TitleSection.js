import React from "react";
import Link from "next/link";
// import Image from "next/image";
import classNames from "classnames";

// import logo from "public/assets/images/logo_sm.png";

const TitleSection = ({ sectionTitle }) => {
  const titleWrapperClasses = classNames({
    "hidden sm:flex sm:flex-col sm:items-center sm:justify-center": true,
    "h-full w-full sm:max-w-[80px] md:max-w-[140px]": true,
    "text-slate-800 relative": true,
    "box-border": true,
  });

  const titleClasses = classNames([
    "text-2xl sm:text-3xl md:text-5xl",
    "-rotate-90 tracking-widest leading-snug",
    "font-light text-center",
  ]);

  return (
    <div className={titleWrapperClasses}>
      <h1 className={titleClasses}>
        {sectionTitle ? sectionTitle.toUpperCase() : ""}
      </h1>

      <div className="group hover:pb-3 top-8 mx-auto absolute hover:-translate-y-3 duration-300">
        <Link href="/">
          <a className="relative w-screen text-6xl">
            <svg
              className="h-12 w-12 fill-darkgreen group-hover:fill-lightgreen"
              viewBox="0 0 15 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6836 11.3965L5.41015 9.85352C4.7998 9.67773 4.37499 9.10645 4.37499 8.47168C4.37499 7.67578 5.01952 7.03125 5.81542 7.03125H9.05273C9.64843 7.03125 10.2344 7.21191 10.7226 7.54395C11.0205 7.74414 11.4209 7.69531 11.6748 7.44629L13.374 5.78613C13.7207 5.44922 13.6719 4.8877 13.2861 4.58984C12.0898 3.65234 10.5957 3.12988 9.06249 3.125V0.78125C9.06249 0.351562 8.71093 0 8.28124 0H6.71874C6.28905 0 5.93749 0.351562 5.93749 0.78125V3.125H5.81542C2.70507 3.125 0.205069 5.7959 0.493155 8.96484C0.698233 11.2158 2.41698 13.0469 4.58495 13.6816L9.58983 15.1465C10.2002 15.3271 10.625 15.8936 10.625 16.5283C10.625 17.3242 9.98046 17.9688 9.18456 17.9688H5.94726C5.35155 17.9688 4.76562 17.7881 4.27733 17.4561C3.97948 17.2559 3.57909 17.3047 3.32519 17.5537L1.62597 19.2139C1.27929 19.5508 1.32812 20.1123 1.71386 20.4102C2.91015 21.3477 4.40429 21.8701 5.93749 21.875V24.2188C5.93749 24.6484 6.28905 25 6.71874 25H8.28124C8.71093 25 9.06249 24.6484 9.06249 24.2188V21.8652C11.3379 21.8213 13.4717 20.4688 14.2236 18.3154C15.2734 15.3076 13.5107 12.2217 10.6836 11.3965V11.3965Z" />
            </svg>
          </a>
        </Link>
      </div>

      {/* <div className="group text-darkgreen absolute top-8 mx-auto hover:-translate-y-3 duration-300">
        <Link href="/">
          <a className="text-6xl">
            <svg
              className="h-12 w-12 fill-darkgreen group-hover:fill-lightgreen"
              viewBox="0 0 15 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6836 11.3965L5.41015 9.85352C4.7998 9.67773 4.37499 9.10645 4.37499 8.47168C4.37499 7.67578 5.01952 7.03125 5.81542 7.03125H9.05273C9.64843 7.03125 10.2344 7.21191 10.7226 7.54395C11.0205 7.74414 11.4209 7.69531 11.6748 7.44629L13.374 5.78613C13.7207 5.44922 13.6719 4.8877 13.2861 4.58984C12.0898 3.65234 10.5957 3.12988 9.06249 3.125V0.78125C9.06249 0.351562 8.71093 0 8.28124 0H6.71874C6.28905 0 5.93749 0.351562 5.93749 0.78125V3.125H5.81542C2.70507 3.125 0.205069 5.7959 0.493155 8.96484C0.698233 11.2158 2.41698 13.0469 4.58495 13.6816L9.58983 15.1465C10.2002 15.3271 10.625 15.8936 10.625 16.5283C10.625 17.3242 9.98046 17.9688 9.18456 17.9688H5.94726C5.35155 17.9688 4.76562 17.7881 4.27733 17.4561C3.97948 17.2559 3.57909 17.3047 3.32519 17.5537L1.62597 19.2139C1.27929 19.5508 1.32812 20.1123 1.71386 20.4102C2.91015 21.3477 4.40429 21.8701 5.93749 21.875V24.2188C5.93749 24.6484 6.28905 25 6.71874 25H8.28124C8.71093 25 9.06249 24.6484 9.06249 24.2188V21.8652C11.3379 21.8213 13.4717 20.4688 14.2236 18.3154C15.2734 15.3076 13.5107 12.2217 10.6836 11.3965V11.3965Z" />
            </svg>
          </a>
        </Link>
      </div> */}

      {/* <div className="absolute top-4 mx-auto">
        <Link href="/">
          <a>
            <Image src={logo} width={140} height={66} />
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default TitleSection;

// 0.470967741935
