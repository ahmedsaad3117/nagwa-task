import express from 'express'

import { getRandomWords } from '../controllers/words';

const router = express.Router();

router.get("/words", getRandomWords);

export default router


