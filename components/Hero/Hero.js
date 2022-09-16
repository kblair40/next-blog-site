/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import classNames from "classnames";

import Input from "components/UI/Input";
import Button from "components/UI/Button";
import heroBG from "public/assets/shapes/hero-bg.svg";

const Hero = () => {
  const baseClasses = [
    "relative w-screen top-4",
    "flex justify-center items-center",
    "h-88 sm:h-72 md:h-60", // height: 400px, sm-height: 360px
  ];
  return (
    <div className={classNames(baseClasses)}>
      <Image
        src={heroBG}
        alt="background image"
        layout="fixed"
        objectFit="cover"
        // height={185}
        priority
      />

      <Content />
    </div>
  );
};

export default Hero;

const Content = () => {
  const centerClasses = ["absolute", "flex items-center justify-center"];

  const wrapperClasses = [
    ...centerClasses,
    "w-full",
    // "border border-emerald-700",
    "h-88",
  ];

  const subscribeFormClasses = [
    "flex w-full",
    "flex-col space-y-4",
    "sm:flex-row sm:space-x-2 sm:space-y-0 sm:space-x-4",
  ];

  const innerClasses = ["min-w-base max-w-3xl w-full", "px-4 sm:px-3"];

  return (
    <section className={classNames(wrapperClasses)}>
      <div className={classNames(innerClasses)}>
        <div className="flex flex-col text-center w-fit mb-6 sm:mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 sm:mb-4">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p className="leading-normal sm:leading-relaxed text-base">
            Dolore Lorem Lorem ad in commodo ex. &nbsp;Irure minim duis commodo
            dolore elit commodo incididunt laboris incididunt sint ut officia
            exercitation.
          </p>
        </div>

        <div className={classNames(subscribeFormClasses)}>
          <Input classes={["sm:w-2/5"]} placeholder="First Name" />

          <Input classes={["sm:w-2/5"]} placeholder="Email" />

          <Button classes={["sm:w-1/5"]}>Subscribe</Button>
        </div>
      </div>
    </section>
  );
};
