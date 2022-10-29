import { useDispatch } from "react-redux";
import classes from "./AnswerButton.module.css";

import { wordActions } from "../../store/words-slice";

const AnswerButton = ({ answer }) => {
  const dispatch = useDispatch();

  const submitAnswerHandler = () => {
    dispatch(wordActions.getNextWord())
  };

  return (
    <button onClick={submitAnswerHandler} className={classes.button_answer} value={answer}>
      {answer}
    </button>
  );
};

export default AnswerButton;
