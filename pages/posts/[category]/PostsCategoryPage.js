import React from "react";
import { useRouter } from "next/router";

import FullPageWrapper from "components/UI/FullPageWrapper";
import Navbar from "components/Navbar";

const PostsCategoryPage = () => {
  const router = useRouter();
  const category = router.query.category;

  return (
    <FullPageWrapper>
      <div className="flex h-screen w-screen">
        <div className="w-1/5 h-screen">
          <TitleSection sectionTitle={category} />
        </div>
        <div className="w-4/5 bg-[#f3efe9] h-screen relative">
          <Navbar />
        </div>
      </div>
    </FullPageWrapper>
  );
};

export default PostsCategoryPage;

const TitleSection = ({ sectionTitle }) => {
  return (
    <div className="h-full text-slate-800 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl -rotate-90 tracking-widest text-center font-medium tracking-wide leading-snug">
        {sectionTitle.toUpperCase()}
      </h1>
    </div>
  );
};
