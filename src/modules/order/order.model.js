import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [{ productId: String, quantity: Number }],
    total: Number,
    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID"],
      default: "PENDING"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);