/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { toast } from "react-toastify";

import Input from "components/UI/Input";
import Button from "components/UI/Button";
import heroBG from "public/assets/shapes/hero-bg.svg";
import api from "utils/api";
import { validateEmail } from "utils/validators";

const Hero = () => {
  const baseClasses = [
    "relative w-screen flex justify-center pt-6",
    "sm:pt-8 sm:px-8 sm:max-w-lg",
    "md:max-w-2xl lg:max-w-3xl xl:max-w-5xl",
  ];

  return (
    <div className="flex justify-center w-screen">
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
    </div>
  );
};

export default Hero;

const wrapperClasses = ["min-w-base max-w-3xl w-full", "px-4 sm:px-3"];

const innerClasses = ["flex flex-col", "text-center", "w-fit", "mb-6 sm:mb-12"];

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async () => {
    const name = nameRef.current?.value || "none";
    const email = emailRef.current?.value;

    const invalidToastId = "invalid-id";

    if (!email || !validateEmail(email)) {
      // console.error("\n\nMISSING EMAIL:", email);

      let errorMsg = email
        ? "Hmmm that doesn't appear to be a valid email address"
        : "An email address is required";

      toast.error(errorMsg, {
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        autoClose: 1000,
        toastId: invalidToastId,
      });

      return;
    }

    setLoading(true);

    try {
      await api.post("/subscribe", { name, email });

      setLoading(false);
      nameRef.current.value = "";
      emailRef.current.value = "";

      toast.success("Successfully subscribed!", {
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    } catch (e) {
      console.error("FAILED TO SUBSCRIBE:", e);
    }
  };

  const subscribeFormClasses = [
    "flex w-full",
    "flex-col space-y-4",
    "md:flex-row smdmmd:space-x-2 md:space-y-0 md:space-x-4",
    "relative bottom-4 md:px-1",
    // "sm:px-8",
    // "sm:flex-row sm:space-x-2 sm:space-y-0 sm:space-x-4",
    // "relative bottom-4 sm:px-1",
  ];

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
        <Input
          submitted={submitted}
          ref={nameRef}
          classes={["md:w-2/5"]}
          placeholder="First Name"
        />

        <Input
          submitted={submitted}
          ref={emailRef}
          classes={["md:w-2/5"]}
          placeholder="Email"
        />

        <Button loading={loading} onClick={handleSubmit} classes={["md:w-1/5"]}>
          Subscribe
        </Button>
      </div>
    </section>
  );
};
