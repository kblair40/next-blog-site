import React from "react";

import Posts from "components/Posts";
import FullPageWrapper from "components/UI/FullPageWrapper";
import dbConnect from "utils/dbConnect";
import Post from "server/models/Post";

const PostsCategoryPage = ({ category, posts }) => {
  posts = JSON.parse(posts);

  return (
    // <div className="w-screen bg-creme">
    <div className="w-screen">
      <div className="flex w-full">
        <div className="flex-1 ">
          <div className="overflow-y-auto pb-8 pt-20 px-3 sm:px-4 md:pl-40">
            <Posts category={category} posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  let posts;
  if (query.category) {
    posts = await Post.find({ category: query.category });
  } else {
    posts = await Post.find({});
  }

  console.log(`SERVER SIDE POSTS FOR ${query.category}:`, posts, "\n");

  return {
    props: {
      category: query?.category || "love",
      posts: JSON.stringify(posts),
    },
  };
};

export default PostsCategoryPage;
