import React from "react";
import { useRouter } from "next/router";

import Posts from "components/Posts";
import FullPageWrapper from "components/UI/FullPageWrapper";
import Navbar from "components/Navbar";

const PostsCategoryPage = () => {
  const router = useRouter();
  const category = router.query.category;

  return (
    <FullPageWrapper>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex">
          <div className="h-screen w-fit">
            <TitleSection sectionTitle={category} />
          </div>
          <div className="flex-1 bg-[#f3efe9] relative">
            <Navbar />

            <div className="px-2 mt-8">
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </FullPageWrapper>
  );
};

export default PostsCategoryPage;

const TitleSection = ({ sectionTitle }) => {
  return (
    <div className="h-full text-slate-800 flex flex-col items-center justify-center">
      <h1 className="text-5xl -rotate-90 tracking-widest text-center font-medium tracking-wide leading-snug">
        {sectionTitle ? sectionTitle.toUpperCase() : ""}
      </h1>
    </div>
  );
};
