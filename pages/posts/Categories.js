import React from "react";
import Image from "next/future/image";
import classNames from "classnames";

import { categories } from "utils/constants";

const Categories = () => {
  const gridClasses = classNames({
    // "border border-red-50": true,
    "w-fit mx-auto": true,
    "grid justify-center": true,
    "grid-cols-2 md:grid-cols-3": true,
    "grid-rows-3 md:grid-rows-2": true,
    "gap-x-2 sm:gap-x-4 lg:gap-x-6 gap-y-6 md:gap-y-8": true,
  });

  return (
    <div className={gridClasses}>
      {categories.map((cat, i) => {
        return <Category key={i} category={cat} />;
      })}
    </div>
  );
};

export default Categories;

const Category = ({ category: { label, img } }) => {
  const categoryClasses = classNames({
    "flex flex-col items-center": true,
    "space-y-3": true,
    "p-2 md:p-3 rounded-lg": true,
    "cursor-pointer duration-500 hover:bg-pink": true,
  });

  return (
    <div className={categoryClasses}>
      <Image
        className="rounded-full w-36 h-36 sm:h-48 sm:w-48 lg:h-60 lg:w-60" // 192 x 192
        alt="category img"
        src={img}
        width={200}
        height={200}
      />
      <p className="text-center font-heading font-medium leading-snug tracking-wide text-lg sm:text-xl">
        {label}
      </p>
    </div>
  );
};
