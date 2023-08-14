import mongoose from "mongoose";
import {MONGO_USER_NAME , MONGO_DB_IP , MONGO_PORT ,MONG_PASSWORD} from '../config/config';

const mongoUrl = `mongodb://${MONGO_USER_NAME}:${MONG_PASSWORD}@${MONGO_DB_IP}:${MONGO_PORT}/?authSource=admin`;



const connectDatabase = () => {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(`Error ${e}`));
};




export default connectDatabase
