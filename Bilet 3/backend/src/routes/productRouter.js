import exspress from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controllers/ProductController.js";

const productRouter = exspress.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.delete("/:id", deleteProduct);

export default productRouter