import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import User from "../modules/user/user.model.js";

export const authMiddleware = async (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    return await User.findById(decoded.id);
  } catch {
    return null;
  }
};