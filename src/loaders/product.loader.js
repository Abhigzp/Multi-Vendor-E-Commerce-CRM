import DataLoader from "dataloader";
import Product from "../modules/product/product.model.js";

export const productLoader = () =>
  new DataLoader(async (ids) => {
    const products = await Product.find({ _id: { $in: ids } });
    const map = {};
    products.forEach(p => map[p.id] = p);
    return ids.map(id => map[id]);
  });