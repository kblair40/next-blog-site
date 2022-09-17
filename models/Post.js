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
    image_url: {
      type: String,
    },
    status: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: 1,
      // 1 - active
      // 2 - do not show
      // 3 - deleted
      // 4 - idk, might think of something
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
