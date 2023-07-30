import express from 'express';
import 'dotenv/config';
import indexRouter from './routes/index.js'
import { dbConnection } from './config/db.config.js';
import cors from 'cors';

const app = express();
dbConnection();

const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use(indexRouter);


app.listen(PORT, () => {
   console.log(`Server is running at ${PORT}`);
})