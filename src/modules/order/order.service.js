import Order from "./order.model.js";
import { redis } from "../../config/redis.js";

export const createOrder = async (userId) => {
  const cartKey = `cart:${userId}`;
  const cart = JSON.parse(await redis.get(cartKey)) || [];

  const total = cart.reduce((acc, i) => acc + i.quantity * 100, 0);

  const order = await Order.create({
    user: userId,
    items: cart,
    total
  });

  await redis.del(cartKey);

  return order;
};

export const simulatePaymentWebhook = async (orderId) => {
  return Order.findByIdAndUpdate(
    orderId,
    { paymentStatus: "PAID" },
    { new: true }
  );
};