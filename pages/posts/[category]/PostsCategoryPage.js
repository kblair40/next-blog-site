import React from "react";
import { useRouter } from "next/router";

import Posts from "components/Posts";
import FullPageWrapper from "components/UI/FullPageWrapper";
import Navbar from "components/Navbar";
import TitleSection from "components/TitleSection";
import api from "utils/api";

const PostsCategoryPage = ({ category }) => {
  const router = useRouter();
  const category1 = router.query.category;

  console.log("\n\nCATEGORY1:", category1);
  console.log("PROPS CATEGORY:", category, "\n\n");

  return (
    <FullPageWrapper>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex w-full ">
          <div className="h-screen w-fit">
            <TitleSection sectionTitle={category1} />
          </div>

          <Navbar />
          <div className="flex-1 bg-[#f3efe9] relative">
            <div className="pt-12 max-h-screen overflow-y-auto">
              <div className="px-2 mt-8">
                <Posts category={category1} />
              </div>
              <div className="px-2 mt-8">
                <Posts category={category1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullPageWrapper>
  );
};

PostsCategoryPage.getInitialProps = async ({ query }) => {
  console.log("GET PROPS GET PROPS GET PROPS GET PROPS GET PROPS");
  let posts = [];
  // const router = useRouter();
  // const category = router.query.category;

  try {
    const response = await api.get("/post", {
      params: { category: "" },
    });
    console.log("\n\nRESPONSE:", response, "\n\n");
  } catch (e) {
    console.log("FAILED FETCHING POSTS:", e);
  }

  return { posts };
};

export default PostsCategoryPage;

// const TitleSection = ({ sectionTitle }) => {
//   return (
//     <div className="h-full text-slate-800 flex flex-col items-center justify-center">
//       <h1 className="text-5xl -rotate-90 tracking-widest text-center font-light tracking-wide leading-snug">
//         {sectionTitle ? sectionTitle.toUpperCase() : ""}
//       </h1>
//     </div>
//   );
// };
