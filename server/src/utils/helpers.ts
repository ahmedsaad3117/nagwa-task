import { scoresList } from "../model/DBHandler"

// To shuffle array once more
export const arrayShuffling = (arr: any) => {
  return [...arr].sort(() => 0.5 - Math.random());
};

// To calculate the user rank among the participants
export const calcRank = (userScore: Number) => {
  let userRank = scoresList.filter((score) => userScore > score);
  return ((userRank.length / scoresList.length) * 100).toFixed(2);
};
