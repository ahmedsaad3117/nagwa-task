import axiosServices from "../../network/axiosServices";

import { wordActions } from "../words-slice";

export const getWordsData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axiosServices.get("/words");
      const data = await response.data;
      return data;
    };
    try {
      const wordsData = await getData();
      dispatch(wordActions.setWordsData(wordsData));
    } catch (err) {
      console.log(err);
    }
  };
};
