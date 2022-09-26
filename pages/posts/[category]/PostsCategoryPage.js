import React from "react";

import Posts from "components/Posts";
import FullPageWrapper from "components/UI/FullPageWrapper";
import Navbar from "components/Navbar";
import TitleSection from "components/TitleSection";
import api from "utils/api";

const PostsCategoryPage = ({ category, posts }) => {
  console.log("\n\nCATEGORY:", category);

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
              <div className="px-2 mt-8">
                <Posts category={category} />
              </div>
              <div className="px-2 mt-8">
                <Posts category={category} />
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
  console.log("\n\nQUERY CATEGORY:", query.category, "\n\n");
  const category = query.category;
  let posts = [];
  // const router = useRouter();
  // const category = router.query.category;

  try {
    const response = await api.get("/post", {
      params: { category },
    });
    console.log("\n\nRESPONSE:", response, "\n\n");
    posts = response.data.posts;
  } catch (e) {
    console.log("FAILED FETCHING POSTS:", e);
  }

  return { posts, category };
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
