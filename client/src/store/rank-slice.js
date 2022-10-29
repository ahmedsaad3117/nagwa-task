import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRank: 0,
  isAnswerd: false
}

const rankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {
    addPoint(state) {
      state.userRank += 10;
    },
    answering(state){
      state.isAnswerd = !state.isAnswerd
    },
    reset:() => initialState
  },
});

export const rankActions = rankSlice.actions

export default rankSlice
