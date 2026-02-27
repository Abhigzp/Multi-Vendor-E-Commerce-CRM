import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  password: String,
  role: {
    type: String,
    enum: ["ADMIN", "VENDOR", "USER"],
    default: "USER",
  },
  addresses: [
    {
      street: String,
      city: String,
      zip: String,
    }
  ]
}, { timestamps: true });

export default mongoose.model("User", userSchema);