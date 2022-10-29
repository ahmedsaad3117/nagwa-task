import AnswerButton from "../AnswerButton/AnswerButton";
import Progress from "../ProgressBar/Progress";

import classes from "./QuestionCard.module.css";


const QuestionCard = ({ answer }) => {
  return <section className={classes.card}>
    <h2>qtuiosn qtuiosnqtuiosnqtuiosn qtuiosn qtuiosn</h2>
    <h1> Word</h1>
    <div className={classes.answers}>
        <AnswerButton/>
        <AnswerButton/>
        <AnswerButton/>
        <AnswerButton/>
    </div>
    <div className={classes.options}>
      <div className={classes.progress}>
        <Progress currentQuestion={0}  words= {["a","s"]}/>
      </div>
      <div className={classes.forward_backward}></div>
    </div>
  </section>;
};

export default QuestionCard;
