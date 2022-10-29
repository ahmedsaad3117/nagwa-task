import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWordsData } from "../../store/actions/words-actions";

import AnswerButton from "../AnswerButton/AnswerButton";
import Progress from "../ProgressBar/Progress";

import classes from "./QuestionCard.module.css";

const QuestionCard = () => {
  const dispatch = useDispatch();
  const { currentWord, options, counter, wordListLength } = useSelector(
    (state) => state.words
  );

  useEffect(() => {
    dispatch(getWordsData());
  }, []);

  return (
    <section className={classes.card}>
      <h2>What do you think of the type of the following word?</h2>
      <h1> {currentWord.word}</h1>
      <div className={classes.answers}>
        {options.map((option, index) => (
          <AnswerButton
            key={index}
            option={option}
            correctAnswer={currentWord.pos}
            counter={counter}
            wordListLength={wordListLength}
          />
        ))}
      </div>
      <div className={classes.options}>
        <div className={classes.progress}>
          <Progress
            currentQuestionNumber={counter}
            wordsLength={wordListLength}
          />
        </div>
        <div className={classes.forward_backward}></div>
      </div>
    </section>
  );
};

export default QuestionCard;
