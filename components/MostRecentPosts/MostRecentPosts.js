import React, { useEffect, useState } from "react";

import api from "utils/api";

const MostRecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const response = await api.get("/posts", {
        params: { limit: 3 },
      });
      console.log("RESPONSE:", response);
    };

    fetchRecentPosts();
  }, []);

  return <div>MostRecentPosts</div>;
};

export default MostRecentPosts;
