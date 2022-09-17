import React from "react";
import Link from "next/link";
// import Image from "next/image";

const FeaturedPost = () => {
  return (
    <div className="group max-w-md h-full border-2 border-slate-200 border-opacity-60 rounded-lg overflow-hidden">
      {/* placeholder for image */}
      <div className="bg-slate-200 h-40 w-full" />

      <div className="p-4">
        <h2 className="tracking-wider text-xs title-font font-semibold text-slate-500 mb-1">
          FEATURED POST
        </h2>

        <h1 className="text-lg font-medium text-slate-800 mb-3">Post Title</h1>

        <p className="mb-3">
          Elit non Lorem in nostrud eu dolor do id irure anim in nostrued eu
          dolor.
        </p>

        <Link href="/all-posts">
          <a className="text-primary-600 inline-flex font-medium items-center md:mb-2 lg:mb-0">
            Read
            <svg
              className="w-4 h-4 ml-2 group-hover:animate-point-right"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
