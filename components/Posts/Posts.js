import React, { useEffect, useState } from "react";
import Image from "next/image";

import Loading from "components/UI/Loading";
import one from "public/assets/images/models/one.jpg";
import two from "public/assets/images/models/two.jpg";
import three from "public/assets/images/models/three.jpg";

const Posts = ({ category }) => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [category]);

  return (
    // CHANGE TO GRID
    <div className="p-2 flex items-center space-x-4">
      {[one, two, three].map((img, i) => {
        return <Post imgSrc={img} key={i} />;
      })}
    </div>
  );
};

export default Posts;

const Post = ({ imgSrc }) => {
  return (
    <div className="cursor-pointer duration-200 p-1 hover:bg-slate-50 active:bg-slate-100">
      <div className="flex flex-col items-center relative h-80 rounded-sm overflow-hidden">
        <Image alt="style image" src={imgSrc} layout="fill" objectFit="cover" />
      </div>

      <div className="flex flex-col px-2">
        <p className="text-center text-xl font-semibold mt-2">Post Title</p>
        <p className="text-center line-clamp-2 mt-1">
          Esse ea non Lorem nulla sint mollit ex ullamco irure in.
        </p>
      </div>
    </div>
  );
};
