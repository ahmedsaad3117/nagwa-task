import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wordList: [],
  counter: 0,
  wordListLength: 0,
  currentWord: {},
  options: ["Noun", "Adverb", "Adjective", "Verb"],
};

const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    //To set data of words (words action dispatch) into the store
    setWordsData(state, action) {
      state.wordList = action.payload.data;
      state.wordListLength = action.payload.data.length;
      state.currentWord = state.wordList[0];
    },
    //To get the next word
    getNextWord(state) {
      if (state.counter < state.wordList.length - 1) {
        state.counter++;
        state.currentWord = state.wordList[state.counter];
      }
    },
    //To reset this slice to the initial state
    reset: () => initialState,
  },
});

export const wordActions = wordSlice.actions;

export default wordSlice;
