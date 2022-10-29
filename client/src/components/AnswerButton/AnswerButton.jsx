import classes from './AnswerButton.module.css'

const AnswerButton = ({ answer }) => {
  const submitAnswerHandler = () => {};

  return <button className={classes.button_answer} value={"answer"}>answer</button>;
};

export default AnswerButton;
