import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "No comment text was received"],
    },
    name: {
      type: String,
      required: [true, "Did not receive a name for the commenter"],
    },
    email: {
      type: String,
      required: [true, "Did not receive an email for the commenter"],
    },
    status: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: 2,
      // 1 - approved
      // 2 - posted, but not yet approved (default)
      // 3 - posted, but rejected by admin (erin or me?)
      // 4 - posted, but later deleted
    },
  },
  { timestamps: true }
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
