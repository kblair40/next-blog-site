import React, { useEffect } from "react";

import Posts from "components/Posts";
import FullPageWrapper from "components/UI/FullPageWrapper";
import Navbar from "components/Navbar";
import TitleSection from "components/TitleSection";
import api from "utils/api";

import Post from "server/models/Post";

export const getServerSideProps = async ({ query }) => {
  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  const posts = await Post.find({});
  console.log("\nSERVER SIDE POSTS:", posts, "\n");

  return {
    category: query?.category || "love",
    posts: [],
  };
};

const PostsCategoryPage = ({ category, posts }) => {
  console.log("\n\nCATEGORY:", category);

  useEffect(() => {
    console.log("UPDATED VALUES:", { category, posts });
  }, [category, posts]);

  return (
    <FullPageWrapper>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex w-full ">gsafs</div>
      </div>
      {/* <div className="h-screen w-fit">
            <TitleSection sectionTitle={category} />
          </div> */}

      {/* <Navbar /> */}
      {/* <div className="flex-1 bg-[#f3efe9] relative">
            <div className="pt-12 max-h-screen overflow-y-auto">
              <div className="px-2 mt-8">
                <Posts category={category} />
              </div>
              <div className="px-2 mt-8">
                <Posts category={category} />
              </div>
            </div>
          </div> */}
      {/* </div>
      </div> */}
    </FullPageWrapper>
  );
};

// export async function getServerSideProps({ query }) {
//   const posts = await Post.find({});
//   console.log("\nSERVER SIDE POSTS:", posts, "\n");

//   return {
//     props: {
//       category: query?.category || "love",
//       posts: [],
//     },
//   };
// }

// PostsCategoryPage.getInitialProps = async ({ query }) => {
//   console.log("GET PROPS GET PROPS GET PROPS GET PROPS GET PROPS");
//   console.log("\n\nQUERY CATEGORY:", query.category, "\n\n");
//   const category = query.category;
//   let posts = [];
//   // const router = useRouter();
//   // const category = router.query.category;

//   try {
//     // gets post with a category equal to query.category
//     // const response = await api.get("/post", {
//     //   params: { category },
//     // });

//     // gets ALL posts
//     const response = await api.get("/post");
//     console.log("\n\nRESPONSE:", response, "\n\n");
//     posts = response.data.posts;
//   } catch (e) {
//     console.log("FAILED FETCHING POSTS:", e);
//   }

//   return { posts, category };
// };

export default PostsCategoryPage;
