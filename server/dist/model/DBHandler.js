"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoresList = exports.generateRandomWords = void 0;
const TestData_json_1 = __importDefault(require("../assets/TestData.json"));
// Fetech All data
const wordList = TestData_json_1.default.wordList;
const scoresList = TestData_json_1.default.scoresList;
exports.scoresList = scoresList;
// Create sorted words obj based on pos
const sortedWordList = {
    adverb: [],
    verb: [],
    noun: [],
    adjective: [],
};
// This function will retrun array of all object that have a spsifec part of speech (pos).
const categorizWords = (partOfSpeech) => {
    return wordList.filter((word) => word.pos === partOfSpeech);
};
// Sorting the words into the new words obj
for (let key in sortedWordList) {
    sortedWordList[key].push(...categorizWords(key));
}
// Pick 10 random words from the data which include at least 1 from each type
const generateRandomWords = () => {
    const randomWords = [];
    // Pick the first element from each shuffled category and push it to the new array if it does not exist before
    while (randomWords.length < 10) {
        for (let key in sortedWordList) {
            let randomElm = [...sortedWordList[key]].sort(() => 0.5 - Math.random())[0];
            if (!randomWords.includes(randomElm) && randomWords.length < 10) {
                randomWords.push(randomElm);
            }
        }
    }
    return randomWords;
};
exports.generateRandomWords = generateRandomWords;
