import express from 'express';
import movieRouter from './api/movie/routes';
import userRouter from './api/user/routes';
import connectDatabase from './service/database';
import connectRedis from './service/redis';

const app = express();

connectDatabase();
connectRedis()


app.use('/api/user', userRouter.router);
app.use('/api/movie', movieRouter.router);

export default app;
