import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const PostPreview = ({ variant, postData, classes = [] }) => {
  const baseClasses = [
    "max-w-md", // prev included
    "group h-full border-2 border-slate-200 border-opacity-60 rounded-lg overflow-hidden",
    ...classes,
  ];

  const defaultImg =
    "https://res.cloudinary.com/erinsblog/image/upload/v1663447171/ahtziri-lagarde-h_1g1ofwXqk-unsplash_o1bfsb.jpg";

  return (
    <div className={classNames(baseClasses)}>
      {/* h-256px; w-448px (max) */}
      <div className="w-full max-w-md relative h-64">
        <Image
          src={postData.image_url || defaultImg}
          layout="fill"
          objectFit="cover"
          alt="featured post image"
        />
        <CategoryChip />
      </div>

      <div className="px-4 pt-3 pb-2">
        <h4 className="text-xl font-medium text-slate-800 mb-2">
          {postData.title || "Post Title"}
        </h4>

        <p className="mb-3 text-left leading-snug">
          Elit non Lorem in nostrud eu dolor do id irure anim in nostrued eu
          dolor.
        </p>

        <Link href={`/post/${postData._id}`}>
          <a className="text-darkgreen flex justify-end font-medium items-center md:mb-2 lg:mb-0">
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

export default PostPreview;

const CategoryChip = ({ category = "Category" }) => {
  const classes = classNames({
    "absolute top-2 left-2": true,
    "py-1 px-2 rounded-xl": true,
    "text-slate-100 bg-darkgreen": true,
    "text-sm": true,
  });
  return <div className={classes}>{category}</div>;
};
