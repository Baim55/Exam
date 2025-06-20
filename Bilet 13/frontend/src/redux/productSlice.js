import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  allProducts: [],
};

const baseUrl = "http://localhost:4000/api/products";

export const getProducts = createAsyncThunk("products/get", async () => {
  let { data } = await axios.get(baseUrl);
  return data;
});

export const deleteProduct = createAsyncThunk("delete/product", async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
});

export const postProduct = createAsyncThunk("post/product", async (data) => {
  await axios.post(`${baseUrl}`, data);
  return data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sortBy: (state, action) => {
      if (action.payload == "high") {
        state.products = state.products.sort((a, b) => b.price - a.price);
      } else if (action.payload == "low") {
        state.products = state.products.sort((a, b) => a.price - b.price);
      }
    },
    searchProduct: (state, action) => {
      state.products = state.allProducts.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase().trim())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products.filter((item) => item._id == action.payload);
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
    });
  },
});

export const { sortBy, searchProduct } = productSlice.actions;

export default productSlice.reducer;
