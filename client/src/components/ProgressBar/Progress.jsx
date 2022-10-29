import classes from "./Progress.module.css";

const Progress = ({ currentQuestion, words }) => {
  return (
    <section className={classes.progress_section}>
      <progress value={currentQuestion + 1} max={words.length}>
        {currentQuestion * 10} %
      </progress>
      <span className="question-number">
        {currentQuestion + 1} / {words && words.length}
      </span>
    </section>
  );
};

export default Progress;
