import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, text: true },
    description: { type: String, text: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String, index: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

productSchema.index({ name: "text", description: "text" });

export default mongoose.model("Product", productSchema);