/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import classNames from "classnames";

import heroBG from "public/assets/shapes/hero-bg.svg";

const Hero = () => {
  const baseClasses = [
    "relative",
    "mt-4",
    // "border border-red-400",
    "flex items-end justify-center",
    "h-80", // height: 360px
  ];
  return (
    <div className={classNames(baseClasses)}>
      <Image
        src={heroBG}
        alt="background image"
        layout="fixed"
        objectFit="cover"
        // height="100%"
        height={185}
        priority
      />

      <Content />
    </div>
  );
};

export default Hero;

const Content = () => {
  const centerClasses = ["absolute", "flex items-center justify-center"];
  // const centerClasses = ["flex items-center justify-center"];

  const wrapperClasses = [
    ...centerClasses,
    "text-slate-600 body-font h-full",
    // "mb-4",
    // "absolute",
    // "border border-emerald-600",
    // "h-full",
  ];

  const innerClasses = [
    "container",
    "px-5",
    // "h-full",
    // "border border-red-300"
  ];
  return (
    <section class={classNames(wrapperClasses)}>
      <div class={classNames(innerClasses)}>
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Dolore Lorem Lorem ad in commodo ex. &nbsp;Irure minim duis commodo
            dolore elit commodo incididunt laboris incididunt sint ut officia
            exercitation.
          </p>
        </div>
        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div class="relative flex-grow w-full">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative flex-grow w-full">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};
