"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calcRank_1 = require("../controllers/calcRank");
const router = express_1.default.Router();
router.post("/rank", calcRank_1.getCalcRank);
exports.default = router;
