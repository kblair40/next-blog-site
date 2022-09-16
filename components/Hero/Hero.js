/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { toast } from "react-toastify";

import Input from "components/UI/Input";
import Button from "components/UI/Button";
import heroBG from "public/assets/shapes/hero-bg.svg";
import api from "utils/api";

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
  "relative bottom-4 sm:px-1",
  // "border border-blue-700",
];

const Content = () => {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    // console.log("\n\nVALUES:", { name, email }, "\n\n");

    if (!name || !email) {
      // Todo: Show error message in toast
      console.error("\n\nMISSING VALUE:", { name, email });
      return;
    }

    setLoading(true);

    try {
      await api.post("/subscribe", { name, email });
      // const response = await api.post("/subscribe", { name, email });
      // console.log("API RESPONSE:", response);

      setLoading(false);
      nameRef.current.value = "";
      emailRef.current.value = "";

      toast.success("Successfully subscribed!", {
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnHover: false,
      });

      // Todo: show toast
    } catch (e) {
      console.error("FAILED TO SUBSCRIBE:", e);
    }
  };

  return (
    <section className={classNames(wrapperClasses)}>
      <div className={classNames(innerClasses)}>
        <h1 className="sm:text-3xl text-2xl font-medium mb-2 sm:mb-4">
          Lorem Ipsum Dolor Sit Amet
        </h1>
        <p className="leading-normal sm:leading-relaxed text-base">
          Dolore Lorem Lorem ad in commodo ex. Irure minim duis commodo dolore
          elit commodo incididunt laboris incididunt sint ut officia
          exercitation.
        </p>
      </div>

      <div className={classNames(subscribeFormClasses)}>
        <Input ref={nameRef} classes={["sm:w-2/5"]} placeholder="First Name" />

        <Input ref={emailRef} classes={["sm:w-2/5"]} placeholder="Email" />

        <Button loading={loading} onClick={handleSubmit} classes={["sm:w-1/5"]}>
          Subscribe
        </Button>
      </div>
    </section>
  );
};
