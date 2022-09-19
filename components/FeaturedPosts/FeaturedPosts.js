import React, { useEffect, useState } from "react";

import Loading from "components/UI/Loading";
import PostPreview from "components/PostPreview";
import Carousel from "./Carousel";
import api from "utils/api";

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await api.get("/posts", {
          params: { limit: 3 },
        });
        console.log("RESPONSE:", response);

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
          // className="duration-700 ease-in-out flex justify-center w-screen"
          className="duration-700 ease-in-out flex justify-center mr-16 cursor-default"
        >
          <PostPreview variant="featured" postData={post} />
        </div>
      );
    });

    return postsArray;
  };

  const handleChangeSlide = (slideIndex) => {
    setSlideIndex(slideIndex);
  };

  // console.log(
  //   "\n\n\n\nMAIN BOOLEAN:",
  //   slideIndex < featuredPosts.length - 1,
  //   "\n\n\n\n"
  // );

  // const carouselClasses = classNames({
  //   "sm:pl-[5vw] md:pl-[10vw] carousel w-screen border-transparent relative": true,
  //   "custom-cursor": slideIndex < featuredPosts.length - 1,
  // });

  if (loading) {
    return (
      <div className="h-screen-nav w-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex justify-center h-full">
      {featuredPosts.length && (
        <Carousel
          postsArray={makePostsArray()}
          onChange={handleChangeSlide}
          // classes={carouselClasses}
        />
      )}
    </div>
  );
};

export default FeaturedPosts;
