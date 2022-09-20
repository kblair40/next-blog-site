import dbConnect from "utils/dbConnect";
import Comment from "server/models/Comment";

const getAllCommentsForPost = async (id) => {
  try {
    const comments = await Comment.find(id);
    if (post) return post;
  } catch (error) {
    console.log("FAILED FETCHING POST:", error);
  }
};

export default async function handler(req, res) {
  // console.log("\n\nREQ RECEIVED:", req, "\n\n");
  const { method, query } = req;

  console.log("\n\nCOMMENTS QUERY:", query, "\n\n");

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "GET":
      try {
        const allComments = await Comment.find({ postId: query.postId });
        console.log("\n\nALL COMMENTS:", allComments, "\n\n");

        res.status(201).json({ success: true, data: allComments });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
