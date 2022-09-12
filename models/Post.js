import mongoose from "mongoose";
// import { getCurrentUnixStamp } from "utils/dateHelpers";

const PostSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "No content was received"],
    },
    title: {
      type: String,
      required: [true, "Did not receive a title for the post"],
    },
    // comments: [Comment] /* create separate model for Comment */
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
