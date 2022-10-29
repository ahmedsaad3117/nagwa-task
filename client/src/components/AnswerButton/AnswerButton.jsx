import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    //To disable all buttons from fire a new action
    dispatch(rankActions.answering());
    //To bind correct or false style to this button
    setIsAnswerd(true);

    //To add a point in case of the correct answer
    if (option.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase()) {
      dispatch(rankActions.addPoint());
      //To bind true class to the button
      setIsCorrect(true);
    }
    setTimeout(() => {
      //To reset button states
      setIsAnswerd(false);
      setIsCorrect(false);

      //To enable all buttons to submit
      dispatch(rankActions.answering());
      //To get the next word
      dispatch(wordActions.getNextWord());
    }, 1000);

    //Navigate to the result page after the last word
    if (counter == wordListLength - 1) {
      navigate("rank");
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
