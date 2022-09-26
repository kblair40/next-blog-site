import React from "react";
import { useRouter } from "next/router";

import Post from "server/models/Post";
import dbConnect from "utils/dbConnect";
import NavBar from "components/NavBar";
import BlogPost from "components/BlogPost";
import GoBack from "components/GoBack";

const BlogPostPage = ({ post }) => {
  const { query } = useRouter();

  post = JSON.parse(post);
  console.log("PARSED POST:", post);

  return (
    <div>
      <NavBar />

      <div className="mt-16 pl-6">
        <GoBack
          route={`/posts/${query.category}`}
          label={`Back to all ${query.category} posts`}
        />
      </div>

      {post && post.content ? (
        <BlogPost postContent={post.content} postImage={post.image_url} />
      ) : null}
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  console.log("\n\nSERVER SIDE QUERY:", query);

  const postId = query.id;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  const res = await Post.findById(postId);
  console.log("\nBLOG POST RESPONSE:", res, "\n");

  return { props: { post: JSON.stringify(res) } };
};

export default BlogPostPage;
