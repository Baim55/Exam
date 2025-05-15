import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let findProduct = state.basket.find((item) => item._id == action.payload._id);
            if (!findProduct) {
                state.basket.push({ ...action.payload, count: 1 })
            }
        },
        removeBasket: (state, action) => {
            state.basket = state.basket.filter((item) => item._id !== action.payload)
        },
        plusBtn: (state, action) => {
            let findProduct = state.basket.find((item) => item._id == action.payload);
            if (findProduct) {
                findProduct.count++
            }
        },
        minusBtn: (state, action) => {
            let findProduct = state.basket.find((item) => item._id == action.payload);
            if (findProduct) {
                findProduct.count--
            }
        }
    },
})

export const { addBasket, removeBasket, plusBtn, minusBtn } = basketSlice.actions

export default basketSlice.reducer