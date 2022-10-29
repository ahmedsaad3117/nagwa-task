import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import classes from "./AnswerButton.module.css";

import { wordActions } from "../../store/words-slice";
import { rankActions } from "../../store/rank-slice";

const AnswerButton = ({ option, correctAnswer, counter, wordListLength }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for local button state
  const [isAnswerd, setIsAnswerd] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  //for global buttons states
  const answering = useSelector((state) => state.rank.isAnswerd);

  const submitAnswerHandler = () => {
    dispatch(rankActions.answering());
    setIsAnswerd(true);
    if (option.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase()) {
      dispatch(rankActions.addPoint());
      setIsCorrect(true);
    }
    setTimeout(() => {
      setIsAnswerd(false);
      setIsCorrect(false);

      dispatch(rankActions.answering());
      dispatch(wordActions.getNextWord());
    }, 1000);


    if(counter == wordListLength-1){
      navigate('rank')
    }
  };

  return (
    <button
      onClick={submitAnswerHandler}
      className={classes.button_answer}
      value={option}
      disabled={answering}
    >
      {option}
      {isAnswerd && (
        <span className={isCorrect ? classes.correct : classes.false}>
          {isCorrect ? "✔" : "✗"}
        </span>
      )}
    </button>
  );
};

export default AnswerButton;
