import React, { useEffect, useState } from "react";
// import Image from "next/image";

import Hero from "components/Hero";
import PostPreview from "./PostPreview";
import api from "utils/api";
import md from "utils/md";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await api.get("/posts");
        console.log("ALL POSTS:", allPosts.data.posts);

        setAllPosts(
          allPosts.data.posts.map((post, i) => {
            return {
              ...post,
              content: "<div>" + post.content.trim() + "</div>",
            };
          })
        );
      } catch (e) {
        console.error("FAILED TO FETCH POSTS:");
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  const getPosts = () => {
    if (!allPosts) return [];

    let combinedPosts = [];
    for (let i = 0; i < allPosts.length; i += 2) {
      let post1 = allPosts[i];
      let post2 = allPosts[i + 1];

      post1 = (
        <PostPreview key={i} title={post1.title} postId={post1._id}>
          <div dangerouslySetInnerHTML={{ __html: md.render(post1.content) }} />
        </PostPreview>
      );

      let posts = [post1];

      if (post2) {
        posts.push(
          <PostPreview key={i + 1} title={post2.title} postId={post2._id}>
            <div
              dangerouslySetInnerHTML={{ __html: md.render(post2.content) }}
            />
          </PostPreview>
        );
      }

      combinedPosts.push(posts);
    }

    return combinedPosts;
  };

  return (
    <div className="z-0">
      <Hero />

      <div className="mt-4 px-4 flex flex-wrap">
        {getPosts().map((posts, i) => {
          return (
            <div key={i} className="flex space-x-4 mb-4">
              {posts}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
