import React, { useEffect, useState } from "react";
import classNames from "classnames";

import api from "utils/api";
import Loading from "components/UI/Loading";

const MostRecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await api.get("/posts", {
          params: { limit: 3 },
        });
        console.log("RESPONSE:", response);

        setRecentPosts(response.data.posts);
      } catch (err) {
        console.error("FAILED TO FETCH RECENT POSTS");
      }

      setLoading(false);
    };

    fetchRecentPosts();
  }, []);

  if (loading) {
    return (
      <div className="h-20 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative top-8">
      <h2 className="text-xl font-semibold mb-4 border-b border-slate-400">
        Recent Posts
      </h2>

      <div className="flex flex-col space-y-4">
        {recentPosts.length
          ? recentPosts.map((post, i) => {
              return <RecentPost key={i} post={post} />;
            })
          : null}
      </div>
    </div>
  );
};

export default MostRecentPosts;

const RecentPost = ({ post }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-lg font-medium">{post.title}</h2>
        <div className="flex space-x-2 items-center border-b border-transparent duration-200 hover:border-slate-400 leading-none">
          <button className="py-1 font-medium duration-200">Read</button>
          <p>-&gt;</p>
        </div>
      </div>

      <div
        className="line-clamp-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};
