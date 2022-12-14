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

          if (body.content) {
            foundPost.content = body.content;
            try {
              const savedPost = await foundPost.save();

              return res.status(200).json(savedPost);
            } catch (e) {
              console.log("\n\nFAILED SAVING POST:", e);
              return res.status(422).json({ success: false });
            }
          }

          if (body.title) foundPost.title = body.title;
          if (body.status) foundPost.status = parseInt(body.status);
          if (body.category) foundPost.category = body.category;
          if (body.tags) foundPost.tags = body.tags;
          if (body.preview_text) foundPost.preview_text = body.preview_text;

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
