import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRank: 0,
  isAnswerd: false,
};

const rankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {
    //To add point in correct answer case
    addPoint(state) {
      state.userRank += 10;
    },
    //To toggle between disabled and enabled cases for the all buttons
    answering(state) {
      state.isAnswerd = !state.isAnswerd;
    },
    //To reset this slice to the initial state
    reset: () => initialState,
  },
});

export const rankActions = rankSlice.actions;

export default rankSlice;
