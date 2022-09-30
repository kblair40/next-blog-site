import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "Email address is required"],
    },
    status: {
      type: Number,
      enum: [1, 2, 3],
      default: 1,
      // 1 = subscribed
      // 2 = subscribed, but later cancelled
      // 3 = idk yet, might think of something
    },
    cancelled_timestamp: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", SubscriberSchema);
