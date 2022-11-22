import dbConnect from "utils/dbConnect";
// import FeaturedPost from "server/models/FeaturedPost";
import Post from "server/models/Post";

// const getAllPosts = async (limit) => {
//   try {
//     const posts = await FeaturedPost.find({}).limit(
//       limit
//     ); /* gets all posts in db */
//     return posts;
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// };

const getFeaturedPost = async () => {
  try {
    const post = await Post.findOne({ featured: true });
    console.log("\n\nFOUND POST:", post, "\n\n");
    return post;
  } catch (e) {
    console.log("FAILED TO GET POST:", e);
    return false;
  }
};

const getPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    console.log("\n\nFOUND POST:", post, "\n\n");
    return post;
  } catch (e) {
    console.log("FAILED TO GET POST:", e);
    return false;
  }
};

export default async function handler(req, res) {
  const { method, query } = req;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "GET":
      try {
        const post = await getFeaturedPost();
        console.log("\n\n\nSTATUS POSTS FOUND:", post, "\n\n\n");

        return res.status(201).json({ success: true, post });
      } catch (e) {
        return res.status(400).json({ success: false });
      }
    case "PATCH":
      try {
        // console.log("REQ BODY:", req.body);
        const { id } = req.body;
        const [currentFeaturedPost, postToFeature] = await Promise.all([
          getFeaturedPost(),
          getPostById(id),
        ]);

        console.log("currentFeaturedPost:", currentFeaturedPost);
        console.log("postToFeature:", postToFeature);

        let promises = [];
        if (currentFeaturedPost && postToFeature) {
          currentFeaturedPost.featured = false;
          postToFeature.featured = true;
          promises.push(currentFeaturedPost.save());
          promises.push(postToFeature.save());

          // await Promise.all([currentFeaturedPost.save(), postToFeature.save()]);
          // const newFeaturedPost = await getFeaturedPost();
          // console.log("\\n\nNEW FEATURED POST:", newFeaturedPost, "\n\n");
          // return res.status(201).json({ success: true, post: newFeaturedPost });
        } else if (currentFeaturedPost) {
          return res.status(404).json({
            success: false,
            msg: "Could not find the post you want to feature",
          });
        } else if (postToFeature) {
          postToFeature.featured = true;
          promises.push(postToFeature.save());
        }

        try {
          await Promise.all(promises);
          return res.status(200).json({ success: true });
        } catch (e) {
          return res.status(400).json({ success: false, msg: "Not sure" });
        }

        return res.status(400).json({ success: false });
      } catch (error) {
        console.log("\n\nERROR:", error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
