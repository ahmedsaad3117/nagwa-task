"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalcRank = void 0;
const helpers_1 = require("../utils/helpers");
const getCalcRank = (req, resp) => {
    const userRank = (0, helpers_1.calcRank)(req.body.score);
    try {
        resp.json({ data: userRank });
    }
    catch (e) {
        resp.status(500).send();
    }
};
exports.getCalcRank = getCalcRank;
