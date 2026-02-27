import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./user.model.js";
import { env } from "../../config/env.js";

export const registerUser = async (input) => {
  const hashedPassword = await bcrypt.hash(input.password, 10);

  const user = await User.create({
    ...input,
    password: hashedPassword
  });

  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};