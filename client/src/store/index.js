import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./words-slice";

const store = configureStore({
    reducer:{words : wordSlice.reducer}
})

export default store