import jsonData from '../assets/TestData.json'
import { ISortedWordList, IWord } from '../utils/interfaces';


// Fetech All data
const wordList: IWord[] = jsonData.wordList;
const scoresList: Number[] = jsonData.scoresList;

// Create sorted words obj based on pos
const sortedWordList: ISortedWordList = {
  adverb: [],
  verb: [],
  noun: [],
  adjective: [],
};

// This function will retrun array of all object that have a spsifec part of speech (pos).
const categorizWords = (partOfSpeech: String) => {
  return wordList.filter((word) => word.pos === partOfSpeech);
};

// Sorting the words into the new words obj
for (let key in sortedWordList) {
  sortedWordList[key as keyof ISortedWordList].push(...categorizWords(key));
}

// Pick 10 random words from the data which include at least 1 from each type
const generateRandomWords = () => {
  const randomWords: IWord[] = [];

  // Pick the first element from each shuffled category and push it to the new array if it does not exist before
  while (randomWords.length < 10) {
    for (let key in sortedWordList) {
      let randomElm = [...sortedWordList[key as keyof ISortedWordList]].sort(
        () => 0.5 - Math.random()
      )[0];

      if (!randomWords.includes(randomElm) && randomWords.length < 10) {
        randomWords.push(randomElm);
      }
    }
  }
  return randomWords;
};

export { generateRandomWords, scoresList };
