import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  products: [],
}

const baseUrl="http://localhost:4000/api/products"

export const getProducts = createAsyncThunk("products/get" ,async()=>{
    let {data}=await axios.get(baseUrl)
    return data
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  }, extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products=action.payload
    })
  },
})

export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer