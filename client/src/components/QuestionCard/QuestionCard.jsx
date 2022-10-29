import { useSelector } from "react-redux";

import AnswerButton from "../AnswerButton/AnswerButton";
import Progress from "../ProgressBar/Progress";

import classes from "./QuestionCard.module.css";

const QuestionCard = ({ answer }) => {
  const { currentWord, options, counter, wordListLength } = useSelector(
    (state) => state.words
  );

  return (
    <section className={classes.card}>
      <h2>qtuiosn qtuiosnqtuiosnqtuiosn qtuiosn qtuiosn</h2>
      <h1> {currentWord.word}</h1>
      <div className={classes.answers}>
        {options.map((option, index) => (
          <AnswerButton key={index} answer={option} />
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
