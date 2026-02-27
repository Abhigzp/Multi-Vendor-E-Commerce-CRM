import { redis } from "../../config/redis.js";

export const addToCart = async (userId, productId, quantity) => {
  const key = `cart:${userId}`;
  const cart = JSON.parse(await redis.get(key)) || [];

  const existing = cart.find(i => i.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  await redis.set(key, JSON.stringify(cart));
  return cart;
};

export const getCart = async (userId) => {
  const cart = await redis.get(`cart:${userId}`);
  return cart ? JSON.parse(cart) : [];
};