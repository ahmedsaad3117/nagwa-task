import express from 'express'

import { getCalcRank } from '../controllers/calcRank';

const router = express.Router();

router.post("/rank", getCalcRank);

export default router

