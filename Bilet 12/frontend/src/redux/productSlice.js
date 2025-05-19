import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  products: [],
}

let baseUrl = " http://localhost:4000/api/products"

export const getProducts = createAsyncThunk("products/get", async () => {
  let { data } = await axios.get(baseUrl)
  return data
})

export const deleteProducts = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
  return id
})

export const postProducts = createAsyncThunk("products/post", async (data) => {
  await axios.post(`${baseUrl}`, data)
  return data
})



export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
    }),
      builder.addCase(deleteProducts.fulfilled, (state, action) => {
        state.products=state.products.filter((item) => item._id == action.payload)
      }),
      builder.addCase(postProducts.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
  },
})

export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer