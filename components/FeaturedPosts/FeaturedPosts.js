import React, { useEffect, useState } from "react";

import Loading from "components/UI/Loading";
import PostPreview from "components/PostPreview";
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
        console.log("RESPONSE:", response);

        setFeaturedPosts(response.data.posts);
      } catch (e) {
        console.log("FAILED TO FETCH FEATURED POSTS:", e);
      }

      setLoading(false);
    };

    fetchFeaturedPosts();
  }, []);

  if (loading) {
    return (
      <div className="h-screen-nav w-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <PostPreview variant="featured" />
    </div>
  );
};

export default FeaturedPosts;
