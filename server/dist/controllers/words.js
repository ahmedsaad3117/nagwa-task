"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomWords = void 0;
const DBHandler_1 = require("../model/DBHandler");
const helpers_1 = require("../utils/helpers");
const getRandomWords = (req, resp) => {
    try {
        resp.json({ data: (0, helpers_1.arrayShuffling)((0, DBHandler_1.generateRandomWords)()),
            message: "Scuess!"
        });
    }
    catch (e) {
        resp.status(500).send();
    }
};
exports.getRandomWords = getRandomWords;
