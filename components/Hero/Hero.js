/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import classNames from "classnames";

import Input from "components/UI/Input";
import Button from "components/UI/Button";
import heroBG from "public/assets/shapes/hero-bg.svg";

const Hero = () => {
  const baseClasses = [
    "relative",
    // "mt-4",
    // "border border-red-400",
    "flex items-end justify-center",
    "h-100",
    "sm:h-80", // height: 360px
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

  const wrapperClasses = [...centerClasses, "text-slate-600 body-font h-full"];

  const innerClasses = [
    "container",
    "px-5",
    "min-w-base",
    "border border-red-700",
    //
    //
  ];

  const subscribeFormClasses = [
    "flex w-full",
    "flex-col space-y-4",
    "sm:flex-row sm:space-x-4 sm:space-y-0 sm:space-x-4",
    "border",
  ];

  return (
    <section className={classNames(wrapperClasses)}>
      <div className={classNames(innerClasses)}>
        <div className="flex flex-col text-center w-full mb-6 sm: mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 asm:mb-4 text-gray-900">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p className="leading-relaxed text-base">
            Dolore Lorem Lorem ad in commodo ex. &nbsp;Irure minim duis commodo
            dolore elit commodo incididunt laboris incididunt sint ut officia
            exercitation.
          </p>
        </div>

        {/* <div class="flex border lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"> */}
        <div className={classNames(subscribeFormClasses)}>
          <Input classes={["w-"]} placeholder="First Name" />

          <Input classes={["w-"]} placeholder="Email" />

          <Button>Submit</Button>
        </div>
      </div>
    </section>
  );
};
