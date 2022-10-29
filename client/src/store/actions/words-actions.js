import axiosServices from "../../network/axiosServices";

import { wordActions } from "../words-slice";

//Redux action that fire a Get request to get the words
export const getWordsData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axiosServices.get("/words");
      const data = await response.data;
      return data;
    };
    try {
      const wordsData = await getData();
      //To save the date into the store 
      dispatch(wordActions.setWordsData(wordsData));
    } catch (err) {
      console.log(err);
    }
  };
};
