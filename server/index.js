import express from 'express';
import bodyParser from 'body-parser';
import movieRouter from './api/movie/routes';
import userRouter from './api/user/routes';
import connectDatabase from './service/database';
import connectRedis from './service/redis';


const app = express();

connectDatabase();
connectRedis()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/user', userRouter.router);
app.use('/api/v1/movie', movieRouter.router);

export default app;
