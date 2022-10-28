import { RequestHandler } from "express";
import { calcRank } from "../utils/helpers";

export const getCalcRank: RequestHandler = (req, resp) => {
    const userRank = calcRank(req.body.score);
    try {
        resp.json({ data: userRank });
    } catch (e) {
        resp.status(500).send();
    }
}

