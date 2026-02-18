import { configureStore } from "@reduxjs/toolkit";
import productReucer from "./slice/productSlice.js";

const store = configureStore({
  reducer: {
    product: productReucer,
  },
});

export default store;
