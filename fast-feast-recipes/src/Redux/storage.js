import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/slices/cartslice"

export const store = configureStore({
    reducer: {
        cart:cartReduce
    },
})