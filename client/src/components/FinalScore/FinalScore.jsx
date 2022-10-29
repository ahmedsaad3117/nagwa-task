import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axiosServices from "../../network/axiosServices";
import { wordActions } from "../../store/words-slice";
import { rankActions } from "../../store/rank-slice";
import { getWordsData } from "../../store/actions/words-actions";

import classes from './FinalScore.module.css'

const FinalScore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Getting the user score
  const finelResult = useSelector((state) => state.rank.userRank);
  const [rank, setRank] = useState(0);

  const resetHandler = () => {
    //To reset the store (redux) to the initial state
    dispatch(wordActions.reset());
    dispatch(rankActions.reset());

    //Fire a new request to get new words
    dispatch(getWordsData());

    //To navigate to the home page
    navigate("/");
  };

  useEffect(() => {
    //fire a request to calculate the user rank 
    axiosServices.post("/rank", { score: finelResult }).then((res) => {
      const finelRank = res.data;
      setRank(finelRank.data);
    });
  }, []);
  return (
    <section className={classes.fienl_result}>
      <h1>You got a score higher than {rank}% of the participants</h1>
      <button onClick={resetHandler}>Try Again</button>
    </section>
  );
};

export default FinalScore;
