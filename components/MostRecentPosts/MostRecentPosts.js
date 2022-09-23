import React, { useEffect, useState } from "react";
import classNames from "classnames";

import api from "utils/api";
import Button from "components/UI/Button";
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
        // console.log("RESPONSE:", response);

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
    <div className="">
      <h2 className="text-2xl font-semibold mb-4 border-b border-slate-300">
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

        <Button
          size="sm"
          variant="ghost"
          iconRight={
            <svg
              className="w-3 h-3 fill-slate-800 rotate-180 ml-2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.3086 17.3867L10.4414 18.2539C10.0742 18.6211 9.48047 18.6211 9.11719 18.2539L1.52344 10.6641C1.15625 10.2969 1.15625 9.70313 1.52344 9.33984L9.11719 1.74609C9.48437 1.37891 10.0781 1.37891 10.4414 1.74609L11.3086 2.61328C11.6797 2.98438 11.6719 3.58984 11.293 3.95312L6.58594 8.4375H17.8125C18.332 8.4375 18.75 8.85547 18.75 9.375V10.625C18.75 11.1445 18.332 11.5625 17.8125 11.5625H6.58594L11.293 16.0469C11.6758 16.4102 11.6836 17.0156 11.3086 17.3867Z" />
            </svg>
          }
        >
          Read
        </Button>
      </div>

      <div
        className="line-clamp-2 strip-styles"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};
