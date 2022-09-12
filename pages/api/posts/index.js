import dbConnect from "utils/dbConnect";
import Post from "models/Post";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
  }

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find({}); /* gets all posts in db */
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
