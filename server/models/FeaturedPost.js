import mongoose from "mongoose";

const FeaturedPostSchema = new mongoose.Schema({
  post: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  estimated_read_time: {
    type: String,
  },
});

export default mongoose.models.FeaturedPost ||
  mongoose.model("FeaturedPost", FeaturedPostSchema);
