import dbConnect from "utils/dbConnect";
import Comment from "models/Comment";
import Post from "models/Post";

export default async function handler(req, res) {
  // console.log("\n\nREQ RECEIVED:", req, "\n\n");
  const { method } = req;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "GET":
      try {
        let allComments = await Comment.find({}).populate({
          path: "postId",
          select: "title",
        });
        // let allComments = await Comment.find({});
        allComments = await allComments.map((cmt) => {
          console.log("\nCOMMENT:", cmt);
          return cmt;
        });

        // allComments.forEach(async (cmt) => {
        //   console.log("\n\nPOST ID TYPE:", cmt.postId, typeof cmt.postId);
        //   const post = await Post.findById(cmt.postId.toString());
        //   console.log("FOUND POST:", post, "\n");
        // });

        console.log("\n\n\nALL COMMENTS RESPONSE:", allComments);
        return res.status(200).json({ success: true, data: allComments });
      } catch (e) {
        console.error("FAILED TO FIND COMMENTS:", e);
        res.status(404).json({ success: false, data: e });
      }
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
