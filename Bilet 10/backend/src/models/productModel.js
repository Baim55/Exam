import mongoose, { Schema } from "mongoose";

let productSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    collection: "Products",
    timestamps: true,
  }
);

const product = mongoose.model("Products", productSchema);
export default product;
