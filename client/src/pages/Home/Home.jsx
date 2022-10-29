import QuestionCard from "../../components/QuestionCard/QuestionCard";
import classes from './Home.module.css'
const Home = () => {
  return (
    <section className={classes.home}>
      <QuestionCard />
    </section>
  );
};

export default Home;
