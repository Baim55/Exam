import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controller/productController.js";

let productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter