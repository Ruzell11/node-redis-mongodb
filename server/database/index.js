import mongoose from "mongoose";
import {MONGO_USER_NAME , MONGO_DB_IP , MONGO_PORT ,MONG_PASSWORD} from '../config/config';
console.log(MONGO_USER_NAME , MONGO_DB_IP , MONGO_PORT ,MONG_PASSWORD)

const connectDatabase = () => {
  mongoose
    .connect(`mongodb://${MONGO_USER_NAME}:${MONG_PASSWORD}@${MONGO_DB_IP}:${MONGO_PORT}/?authSource=admin`)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(`Error ${e}`));
};


export default connectDatabase
