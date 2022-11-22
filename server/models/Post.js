import mongoose from "mongoose";

const lorem =
  "In ad voluptate eiusmod adipisicing consectetur amet esse cupidatat enim. Consectetur sint sunt eu Lorem commodo reprehenderit. Commodo dolore est deserunt dolor ipsum eu ex cillum. Sunt laboris duis do consequat esse id ut. Qui voluptate sint tempor consectetur ea Lorem velit consectetur. Laborum anim laborum irure aliquip velit cupidatat do ea incididunt voluptate.";

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
    featured: {
      type: Boolean,
      required: true,
      default: false,
    },
    preview_text: {
      type: String,
      default: lorem,
    },
    estimated_read_time: {
      type: String,
      default: "5 min",
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
    category: {
      type: String,
      // This should eventually use enums below, although they may need modification
      // For now, enforce enum client-side before sending request.
      // enum: ["style", "love", "travel", "hunger"],
      // default: undefined,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
