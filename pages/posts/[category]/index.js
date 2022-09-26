// export { default } from "./PostsCategoryPage";
import React, { useEffect } from "react";

import Posts from "components/Posts";
import FullPageWrapper from "components/UI/FullPageWrapper";
import Navbar from "components/Navbar";
import TitleSection from "components/TitleSection";
import api from "utils/api";

import dbConnect from "utils/dbConnect";
import Post from "server/models/Post";

const PostsCategoryPage = ({ category, posts }) => {
  console.log("\n\nCATEGORY:", category);

  posts = JSON.parse(posts);
  console.log("PARSED POSTS:", posts);

  // useEffect(() => {
  //   console.log("UPDATED VALUES:", { category, posts });
  // }, [category, posts]);

  return (
    <FullPageWrapper>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex w-full ">
          <div className="h-screen w-fit">
            <TitleSection sectionTitle={category} />
          </div>

          <Navbar />
          <div className="flex-1 bg-[#f3efe9] relative">
            <div className="pt-12 max-h-screen overflow-y-auto">
              <div className="mt-8">
                <Posts category={category} posts={posts} />
              </div>

              {/* <div className="px-2 mt-8">
                <Posts category={category} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </FullPageWrapper>
  );
};

export const getServerSideProps = async ({ query }) => {
  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  const posts = await Post.find({});
  // console.log("\nSERVER SIDE POSTS:", posts, "\n");

  return {
    props: {
      category: query?.category || "love",
      posts: JSON.stringify(posts),
    },
  };
};

export default PostsCategoryPage;
