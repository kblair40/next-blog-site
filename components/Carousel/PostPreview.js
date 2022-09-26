import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const PostPreview = ({ post, category }) => {
  const router = useRouter();

  const handleClickPost = () => {
    router.push(`/posts/${category}/${post._id}`);
  };

  return (
    <div
      onClick={handleClickPost}
      className="cursor-pointer duration-200 p-1 sm:p-1.5 md:p-2 hover:bg-slate-50 active:bg-slate-100 max-w-screen"
    >
      <div className="relative h-96 rounded-sm overflow-hidden max-w-screen">
        <Image
          alt="style image"
          src={post.image_url}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col px-2 text-center">
        <p className="text-xl font-semibold mt-2">{post.title}</p>
        <p className="line-clamp-2 mt-1 leading-tight">
          Esse ea non Lorem nulla sint mollit ex ullamco irure in. Esse ea non
          Lorem nulla sint mollit ex ullamco irure in.
        </p>
      </div>
    </div>
  );
};

export default PostPreview;
