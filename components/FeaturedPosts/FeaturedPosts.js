import React, { useEffect, useState } from "react";

import MostRecentPosts from "components/MostRecentPosts";
import Loading from "components/UI/Loading";
import PostPreview from "components/PostPreview";
import Carousel from "./Carousel";
import api from "utils/api";

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await api.get("/posts", {
          params: { limit: 3 },
        });
        console.log("FEATURED POSTS RESPONSE:", response.data);

        setFeaturedPosts(response.data.posts);
      } catch (e) {
        console.log("FAILED TO FETCH FEATURED POSTS:", e);
      }

      setLoading(false);
    };

    fetchFeaturedPosts();
  }, []);

  const makePostsArray = () => {
    let postsArray = [];
    featuredPosts.forEach((post, i) => {
      postsArray.push(
        <div
          key={i}
          // prevent scroll forward if clicking on card
          onClick={(e) => e.stopPropagation()}
          className="featured-post-card duration-700 ease-in-out flex justify-center cursor-default w-full"
        >
          <PostPreview variant="featured" postData={post} />
        </div>
      );
    });

    return postsArray;
  };

  if (loading) {
    return (
      <div className="h-screen-nav w-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    // <div className="flex md:space-x-8">
    <div className="flex flex-col items-start h-full w-fit lg:w-3/5 space-y-4">
      <h2 className="text-3xl md:text-2xl font-semibold text-center sm:mb-0 lg:text-left md:border-b md:border-slate-300 w-full">
        Featured Posts
      </h2>
      {featuredPosts.length && <Carousel postsArray={makePostsArray()} />}
    </div>

    //   <div className="hidden md:block md:w-2/5 md:pr-4">
    //     <MostRecentPosts />
    //   </div>
    // </div>
  );
};

export default FeaturedPosts;
