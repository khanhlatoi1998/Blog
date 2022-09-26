import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import indexRouter from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// limit required use 3000mb
app.use(bodyParser.json({ limit: '3000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '3000mb' }));
app.use(cors());

app.use('/', indexRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

