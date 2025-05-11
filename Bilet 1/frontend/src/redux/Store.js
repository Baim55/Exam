import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import basketSlice from "./BasketSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistBasketConfig = {
  key: "basket",
  storage,
};

const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice);

export const store = configureStore({
  reducer: { products: productSlice, basket: persistedBasketReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

let persistor = persistStore(store);

export default persistor;
