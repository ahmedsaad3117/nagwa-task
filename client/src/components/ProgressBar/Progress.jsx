import classes from "./Progress.module.css";

const Progress = ({ currentQuestionNumber, wordsLength }) => {
  return (
    <section className={classes.progress_section}>
      <progress value={currentQuestionNumber + 1} max={wordsLength}></progress>
      <span className="question-number">
        {currentQuestionNumber + 1} / {wordsLength}
      </span>
    </section>
  );
};

export default Progress;
