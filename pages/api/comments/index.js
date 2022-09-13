import dbConnect from "utils/dbConnect";
import Comment from "models/Comment";

const getAllCommentsForPost = async (id) => {
  try {
    const comments = await Comment.find(id);
    if (post) return post;
  } catch (error) {
    console.log("FAILED FETCHING POST:", error);
  }
};

const getAllPosts = async () => {
  try {
    const posts = await Post.find({}); /* gets all posts in db */
    return posts;
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export default async function handler(req, res) {
  // console.log("\n\nREQ RECEIVED:", req, "\n\n");
  const { method, query } = req;

  console.log("\n\n\nREQ QUERY:", req.query, "\n\n\n");

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "GET":
      // let data;
      // if (query && query.id) {
      //   data = await getPostById(query.id);
      //   return res.status(200).json({ success: true, post: data });
      // } else {
      //   data = await getAllPosts();
      //   return res.status(200).json({ success: true, posts: data });
      // }
      break;
    case "POST":
      try {
        console.log("\n\n\nPOST BODY:", req.body, "\n\n\n");
        const comment = await Comment.create(req.body);
        res.status(201).json({ success: true, data: comment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
