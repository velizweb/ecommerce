import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./cartSlice";
import ProductSlice from "./productSlice";


const store = configureStore({
    reducer: {
        cart: CartSlice,
        products: ProductSlice
    }
})

export default store;