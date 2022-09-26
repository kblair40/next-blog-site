import dbConnect from "utils/dbConnect";
import Post from "server/models/Post";

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
      let posts = [];
      if (query) {
        posts = await Post.find(query);
        console.log("\nRESULTS:", posts);
        if (posts && posts.length) {
          return res.status(200).json({ success: true, posts });
        } else {
          return res.status(404).json({ sucess: false, data: [] });
        }
      } else {
        posts = await Post.find({});
        return res.status(200).json({ success: true, posts });
      }
      return res.status(400).json({ success: false, data: [] });
  }
}
