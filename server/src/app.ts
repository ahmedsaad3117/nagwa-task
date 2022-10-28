import express from 'express'
import cors from 'cors'

import wordsRoute from './router/wordsRoute'
import rankRoute from './router/rankRoute'

const app = express();
app.use(cors());

app.use(express.json());
app.use(wordsRoute)
app.use(rankRoute)

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} `);
});


