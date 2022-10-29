import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./words-slice";
import rankSlice from "./rank-slice";

//Create the Store (redux)
const store = configureStore({
  reducer: { words: wordSlice.reducer, rank: rankSlice.reducer },
});

export default store;
