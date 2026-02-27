import Product from "./product.model.js";
import { cacheGet, cacheSet } from "../../utils/redisCache.js";

export const createProduct = async (input, user) => {
  return Product.create({ ...input, vendor: user._id });
};

export const getProducts = async ({ page = 1, limit = 10, search }) => {
  const cacheKey = `products:${page}:${limit}:${search || ""}`;
  const cached = await cacheGet(cacheKey);
  if (cached) return cached;

  const query = search ? { $text: { $search: search } } : {};

  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(limit);

  await cacheSet(cacheKey, products, 60);
  return products;
};