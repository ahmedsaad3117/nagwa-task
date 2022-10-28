"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcRank = exports.arrayShuffling = void 0;
const DBHandler_1 = require("../model/DBHandler");
// To shuffle array once more
const arrayShuffling = (arr) => {
    return [...arr].sort(() => 0.5 - Math.random());
};
exports.arrayShuffling = arrayShuffling;
// To calculate the user rank among the participants
const calcRank = (userScore) => {
    let userRank = DBHandler_1.scoresList.filter((score) => userScore > score);
    return ((userRank.length / DBHandler_1.scoresList.length) * 100).toFixed(2);
};
exports.calcRank = calcRank;
