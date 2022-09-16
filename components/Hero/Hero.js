/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import classNames from "classnames";

import Input from "components/UI/Input";
import Button from "components/UI/Button";
import heroBG from "public/assets/shapes/hero-bg.svg";

const Hero = () => {
  const baseClasses = [
    "relative w-screen flex justify-center",
    "pt-6 sm:pt-8",
    // "border border-red-400 top-px",
  ];

  return (
    <div className={classNames(baseClasses)}>
      <div className="absolute -z-50">
        <Image
          src={heroBG}
          alt="background image"
          layout="fixed"
          objectFit="cover"
          // height={185}
          priority
        />
      </div>

      <Content />
    </div>
  );
};

export default Hero;

const Content = () => {
  const wrapperClasses = [
    "min-w-base max-w-3xl w-full",
    "px-4 sm:px-3",
    // "border border-green-400",
  ];

  const innerClasses = [
    "flex flex-col",
    "text-center",
    "w-fit",
    "mb-6 sm:mb-12",
    // "border border-orange-700",
  ];

  const subscribeFormClasses = [
    "flex w-full",
    "flex-col space-y-4",
    "sm:flex-row sm:space-x-2 sm:space-y-0 sm:space-x-4",
    // "border border-blue-700",
    "relative bottom-4",
  ];

  return (
    <section className={classNames(wrapperClasses)}>
      <div className={classNames(innerClasses)}>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 sm:mb-4">
          Lorem Ipsum Dolor Sit Amet
        </h1>
        <p className="leading-normal sm:leading-relaxed text-base">
          Dolore Lorem Lorem ad in commodo ex. Irure minim duis commodo dolore
          elit commodo incididunt laboris incididunt sint ut officia
          exercitation.
        </p>
      </div>

      <div className={classNames(subscribeFormClasses)}>
        <Input classes={["sm:w-2/5"]} placeholder="First Name" />

        <Input classes={["sm:w-2/5"]} placeholder="Email" />

        <Button classes={["sm:w-1/5"]}>Subscribe</Button>
      </div>
    </section>
  );
};
