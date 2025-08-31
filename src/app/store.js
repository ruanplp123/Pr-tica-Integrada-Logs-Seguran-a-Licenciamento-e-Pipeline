import { configureStore } from "@reduxjs/toolkit";
import storageReducer from "../redux/storageSlice";
import consumeReducer from "../redux/consumeSlice";

export const store = configureStore({
    reducer: {
        storageData: storageReducer,
        consumeTotal: consumeReducer
    },
})