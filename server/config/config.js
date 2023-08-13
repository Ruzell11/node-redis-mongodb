import dotenv from 'dotenv'

dotenv.config()


module.exports = {
    MONGO_DB_IP : process.env.MONGO_DB_IP || "db-app-container",
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER_NAME: process.env.MONGO_INITDB_ROOT_USERNAME,
    MONG_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD
}