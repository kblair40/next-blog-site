import dbConnect from "utils/dbConnect";
import Post from "server/models/Post";

export default async function handler(req, res) {
  const { method, body, query } = req;

  let postId;
  if (query) {
    postId = query.postId;
  }

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "PATCH":
      try {
        const foundPost = await Post.findById(postId);
        if (foundPost) {
          // console.log("\n\nFOUND POST:", foundPost, "\n\n");

          foundPost.title = body.title;
          foundPost.status = parseInt(body.status);

          const savedPost = await foundPost.save();
          // console.log("\n\nSAVED POST:", savedPost);

          res.status(200).json(savedPost);
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
