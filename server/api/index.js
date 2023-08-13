import express from "express";
import movieRouter from "./movie/routes";
import userRouter from "./user/routes";
import connectDatabase from "../database/index";

const app = express();

connectDatabase();

app.use("/api/user", userRouter.router);
app.use("/api/movie", movieRouter.router);

export default app;
